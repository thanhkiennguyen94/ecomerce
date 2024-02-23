package com.ecommerce.be.controllers;

import com.ecommerce.be.models.Employee;
import com.ecommerce.be.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo-controller")
public class DemoController {
    @Autowired
    EmployeeRepository employeeRepository;
    @GetMapping
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Hello from secured endpoint ");
    }

    @GetMapping("/a")
    public ResponseEntity<String> a() {
        Employee employee = employeeRepository.findEmployeeByUsername("kiennt");
        return ResponseEntity.ok("Hello from secured endpoint " + employee.getFirstName());
    }

}
