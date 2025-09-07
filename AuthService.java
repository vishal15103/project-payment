
Vishal M <hellovm15102003@gmail.com>
9:11 PM (6 minutes ago)
to me

package com.example.paymentinitiation.service;



import com.example.paymentinitiation.entity.User;

import com.example.paymentinitiation.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;



import java.util.Optional;



@Service

public class AuthService {



    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();



    public AuthService(UserRepository userRepository) {

        this.userRepository = userRepository;

    }



    // Signup (Only role=USER can register)

    public String signUp(User user) {

        if (!"USER".equalsIgnoreCase(user.getRole())) {

            return "Only USER role is allowed to sign up!";

        }

        if (userRepository.existsById(user.getUserId())) {

            return "User ID already exists!";

        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return "User registered successfully!";

    }



    // Login

    public String login(String userId, String password) {

        Optional<User> optionalUser = userRepository.findById(userId);



        if (optionalUser.isEmpty()) {

            return "Invalid User ID!";

        }



        User user = optionalUser.get();



        if (user.isAccountLocked()) {

            return "Account is locked due to 3 failed attempts!";

        }



        if (passwordEncoder.matches(password, user.getPassword())) {

            user.setFailedAttempts(0);

            userRepository.save(user);

            return "Login successful!";

        } else {

            int attempts = user.getFailedAttempts() + 1;

            user.setFailedAttempts(attempts);



            if (attempts >= 3) {

                user.setAccountLocked(true);

                userRepository.save(user);

                return "Account locked after 3 failed attempts!";

            }



            userRepository.save(user);

            return "Invalid password! Attempt " + attempts + " of 3.";

        }

    }



    // Reset Password

    public String resetPassword(String userId, String newPassword) {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()) {

            return "User not found!";

        }

        User user = optionalUser.get();

        user.setPassword(passwordEncoder.encode(newPassword));

        user.setFailedAttempts(0);

        user.setAccountLocked(false);

        userRepository.save(user);

        return "Password reset successful!";

    }

}
