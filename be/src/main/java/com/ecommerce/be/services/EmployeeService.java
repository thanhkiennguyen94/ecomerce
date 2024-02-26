package com.ecommerce.be.services;

import com.ecommerce.be.dto.employee.FindEmployeeDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {
    Page<FindEmployeeDTO> findAllEmployees(Pageable pageable, String search);
}
