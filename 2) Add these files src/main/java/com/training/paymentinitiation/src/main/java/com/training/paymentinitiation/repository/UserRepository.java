package com.training.paymentinitiation.repository;



import com.training.paymentinitiation.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, String> { }
