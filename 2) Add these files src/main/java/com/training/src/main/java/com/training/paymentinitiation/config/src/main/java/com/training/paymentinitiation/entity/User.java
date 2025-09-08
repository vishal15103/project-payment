package com.training.paymentinitiation.entity;



import jakarta.persistence.*;

import lombok.*;



@Entity

@Table(name = "users")

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder

public class User {



    @Id

    @Column(length = 64, nullable = false)

    private String userId;           // login id



    @Column(length = 120, nullable = false)

    private String username;



    @Column(nullable = false)

    private String password;         // BCrypt hash



    @Column(length = 20, nullable = false)

    private String role;             // USER / APPROVER / OPERATOR



    private int failedAttempts = 0;



    private boolean accountLocked = false;

}
