package com.ecommerce.be.models.Token;

import com.ecommerce.be.models.Employee;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String token;
    private boolean revoked;
    private boolean expired;

    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.BEARER;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    public Employee employee;
}
