package com.example.paymentinitiation.controller;



import com.example.paymentinitiation.entity.User;

import com.example.paymentinitiation.service.AuthService;

import org.springframework.web.bind.annotation.*;



import java.util.Map;



@RestController

@RequestMapping("/api/auth")

@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class AuthController {



    private final AuthService authService;



    public AuthController(AuthService authService) {

        this.authService = authService;

    }



    @PostMapping("/signup")

    public String signUp(@RequestBody User user) {

        return authService.signUp(user);

    }



    @PostMapping("/login")

    public String login(@RequestBody Map<String, String> payload) {

        return authService.login(payload.get("userId"), payload.get("password"));

    }



    @PostMapping("/reset-password")

    public String resetPassword(@RequestBody Map<String, String> payload) {

        return authService.resetPassword(payload.get("userId"), payload.get("newPassword"));

    }

}
