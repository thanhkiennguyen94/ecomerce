package com.ecommerce.be.services.impls;

import com.ecommerce.be.models.Authentication.AuthenticationRequest;
import com.ecommerce.be.models.Authentication.AuthenticationResponse;
import com.ecommerce.be.models.Employee;
import com.ecommerce.be.models.Token.Token;
import com.ecommerce.be.models.Token.TokenType;
import com.ecommerce.be.repositories.EmployeeRepository;
import com.ecommerce.be.repositories.TokenRepository;
import com.ecommerce.be.securities.JwtService;
import com.ecommerce.be.services.AuthenticationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final EmployeeRepository employeeRepository;
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        Employee employee = employeeRepository.findEmployeeByUsername(request.getUsername());
        String jwtToken = jwtService.generateToken(employee);
        String refreshToken = jwtService.generateRefreshToken(employee);
        revokeAllUserTokens(employee);
        saveUserToken(employee, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    private void saveUserToken(Employee employee, String jwtToken) {
        Token token = Token.builder()
                .employee(employee)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(Employee employee) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(employee.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String username;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        username = jwtService.extractUsername(refreshToken);
        if (username != null) {
            Employee employee = this.employeeRepository.findEmployeeByUsername(username);
            if (jwtService.isTokenValid(refreshToken, employee)) {
                String accessToken = jwtService.generateToken(employee);
                revokeAllUserTokens(employee);
                saveUserToken(employee, accessToken);
                AuthenticationResponse authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
