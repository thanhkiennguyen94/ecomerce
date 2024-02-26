package com.ecommerce.be.services.impls;

import com.ecommerce.be.dto.employee.FindEmployeeDTO;
import com.ecommerce.be.models.Employee;
import com.ecommerce.be.repositories.EmployeeRepository;
import com.ecommerce.be.services.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final ModelMapper modelMapper;
    private final EmployeeRepository employeeRepository;
    @Override
    public Page<FindEmployeeDTO> findAllEmployees(Pageable pageable, String search) {
        ModelMapper modelMapper = new ModelMapper();
        Page<Employee> listEmployees = employeeRepository.findAllEmployees(search, pageable);
        return listEmployees.map(employee -> modelMapper.map(employee, FindEmployeeDTO.class));
    }
}
