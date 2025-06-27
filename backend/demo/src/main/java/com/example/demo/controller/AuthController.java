package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.entity.User;
import com.example.demo.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register/farmer")
    public ResponseEntity<User> registerFarmer(@RequestBody User user) {
        User savedUser = authService.registerFarmer(user);
        savedUser.setPassword(null);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/register/middleman")
    public ResponseEntity<User> registerMiddleman(@RequestBody User user) {
        User savedUser = authService.registerMiddleman(user);
        savedUser.setPassword(null);
        return ResponseEntity.ok(savedUser);
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginWithRole(@RequestBody LoginRequest loginRequest) {
        User user = authService.authenticateUserWithRole(
                loginRequest.getUsername(),
                loginRequest.getPassword(),
                loginRequest.getRole()
        );

        if (user == null) {
            return ResponseEntity.status(401).body("Invalid credentials or role");
        }

        LoginResponse response = new LoginResponse();
        response.setUsername(user.getUsername());
        response.setRole(user.getRole().name());
        response.setMessage("Login successful");

        return ResponseEntity.ok(response);
    }
}
