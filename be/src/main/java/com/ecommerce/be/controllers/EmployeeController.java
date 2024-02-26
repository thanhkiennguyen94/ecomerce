package com.ecommerce.be.controllers;

import com.ecommerce.be.commons.SortData;
import com.ecommerce.be.dto.employee.FindEmployeeDTO;
import com.ecommerce.be.models.Employee;
import com.ecommerce.be.services.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Page<FindEmployeeDTO>> findAllEmployees(
            @RequestParam(name = "page", required = false, defaultValue = "0") int page,
            @RequestParam(name = "size", required = false, defaultValue = "10") int size,
            @RequestParam(name = "search", required = false, defaultValue = "") String search,
            @RequestParam(defaultValue = "id,asc") String[] sort) {
        return ResponseEntity.ok(employeeService.findAllEmployees(PageRequest.of(page, size, Sort.by(SortData.getOrderByParamSort(sort))), search));
    }

}
