package com.ecommerce.be.repositories;

import com.ecommerce.be.models.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findEmployeeByUsername(String username);

    @Query("SELECT emp FROM Employee emp " +
            "WHERE emp.firstName LIKE %:search% " +
            "OR emp.username LIKE %:search% " +
            "OR emp.midName LIKE %:search% " +
            "OR emp.lastName LIKE %:search% " +
            "OR emp.address LIKE %:search% " +
            "OR emp.phone LIKE %:search% " +
            "OR emp.birthday LIKE %:search%"
    )
    Page<Employee> findAllEmployees(String search, Pageable pageable);
}
