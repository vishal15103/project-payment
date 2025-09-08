package com.training.paymentinitiation.service;



import com.training.paymentinitiation.entity.User;

import com.training.paymentinitiation.repository.UserRepository;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;



import java.util.Map;

import java.util.Optional;



@Service

public class AuthService {



    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;



    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;

        this.passwordEncoder = passwordEncoder;

    }



    // ---- SIGN UP (Only USER role allowed) ----

    public ResponseEntity<?> signUp(User user) {

        if (!"USER".equalsIgnoreCase(user.getRole())) {

            return ResponseEntity.status(HttpStatus.FORBIDDEN)

                    .body(Map.of("success", false, "message", "Only USER role can sign up"));

        }

        if (userRepository.existsById(user.getUserId())) {

            return ResponseEntity.badRequest()

                    .body(Map.of("success", false, "message", "User ID already exists"));

        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setFailedAttempts(0);

        user.setAccountLocked(false);

        userRepository.save(user);

        return ResponseEntity.ok(Map.of("success", true, "message", "Account created successfully"));

    }



    // ---- LOGIN ----

    public ResponseEntity<?> login(String userId, String password) {

        Optional<User> opt = userRepository.findById(userId);

        if (opt.isEmpty()) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)

                    .body(Map.of("success", false, "message", "Invalid User ID"));

        }



        User user = opt.get();



        if (user.isAccountLocked()) {

            return ResponseEntity.status(HttpStatus.LOCKED)

                    .body(Map.of("success", false, "message", "Account locked after 3 failed attempts"));

        }



        if (passwordEncoder.matches(password, user.getPassword())) {

            user.setFailedAttempts(0);

            userRepository.save(user);

            return ResponseEntity.ok(Map.of(

                    "success", true,

                    "message", "Login successful",

                    "role", user.getRole(),

                    "username", user.getUsername()

            ));

        } else {

            int attempts = user.getFailedAttempts() + 1;

            user.setFailedAttempts(attempts);

            if (attempts >= 3) {

                user.setAccountLocked(true);

            }

            userRepository.save(user);

            String msg = user.isAccountLocked()

                    ? "Account locked after 3 failed attempts"

                    : "Invalid password! Attempts left: " + (3 - attempts);

            HttpStatus status = user.isAccountLocked() ? HttpStatus.LOCKED : HttpStatus.UNAUTHORIZED;

            return ResponseEntity.status(status).body(Map.of("success", false, "message", msg));

        }

    }



    // ---- RESET PASSWORD (any role can use Forgot Password) ----

    public ResponseEntity<?> resetPassword(String userId, String newPassword) {

        Optional<User> opt = userRepository.findById(userId);

        if (opt.isEmpty()) {

            return ResponseEntity.status(HttpStatus.NOT_FOUND)

                    .body(Map.of("success", false, "message", "User not found"));

        }

        User user = opt.get();

        user.setPassword(passwordEncoder.encode(newPassword));

        user.setFailedAttempts(0);

        user.setAccountLocked(false);

        userRepository.save(user);

        return ResponseEntity.ok(Map.of("success", true, "message", "Password reset successful"));

    }

}

