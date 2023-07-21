package com.order.order.entity;

import lombok.Data;

@Data
public class RegisterRequest {
    private Integer user_id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;
}
