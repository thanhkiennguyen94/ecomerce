package com.ecommerce.be.dto.employee;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class FindEmployeeDTO {
    private int id;
    private String firstName;
    private String username;
    private String midName;
    private String lastName;
    private String address;
    private String birthday;
    private String idCard;
    private int gender;
    private Boolean active;
    private String phone;
}
