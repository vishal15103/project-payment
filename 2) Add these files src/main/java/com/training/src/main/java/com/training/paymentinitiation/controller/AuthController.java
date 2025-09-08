package com.training.paymentinitiation.controller;



import com.training.paymentinitiation.entity.User;

import com.training.paymentinitiation.service.AuthService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;



import java.util.Map;



@RestController

@RequestMapping("/api/auth")

@CrossOrigin(origins = "http://localhost:3000") // allow your React app

public class AuthController {



    private final AuthService authService;

    public AuthController(AuthService authService) { this.authService = authService; }



    @PostMapping("/signup")

    public ResponseEntity<?> signUp(@RequestBody User user) {

        return authService.signUp(user);

    }



    @PostMapping("/login")

    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {

        return authService.login(body.get("userId"), body.get("password"));

    }



    @PostMapping("/reset-password")

    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> body) {

        return authService.resetPassword(body.get("userId"), body.get("newPassword"));

    }

}
