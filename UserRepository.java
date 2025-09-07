package com.example.paymentinitiation.repository;



import com.example.paymentinitiation.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, String> {

}
