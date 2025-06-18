package com.example.demo.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository repo) {
        this.userRepository = repo;
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Principal principal) {
        User user = userRepository.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, Object> data = new HashMap<>();
        data.put("username", user.getUsername());
        data.put("email", user.getEmail());
        data.put("phoneNumber", user.getPhoneNumber());
        data.put("address", user.getAddress());
        data.put("bio", user.getBio());
        data.put("companyName", user.getCompanyName());
        data.put("businessType", user.getBusinessType());
        data.put("marketRegions", user.getMarketRegions());
        data.put("businessLicenseNumber", user.getBusinessLicenseNumber());

        if (user.getProfilePicture() != null) {
            String base64 = Base64.getEncoder().encodeToString(user.getProfilePicture());
            data.put("profilePicture", base64);
        }

        return ResponseEntity.ok(data);
    }
    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(
            @RequestParam("phoneNumber") String phone,
            @RequestParam("address") String address,
            @RequestParam("bio") String bio,
            @RequestParam("companyName") String companyName,
            @RequestParam("businessType") String businessType,
            @RequestParam("marketRegions") String marketRegions,
            @RequestParam("businessLicenseNumber") String businessLicenseNumber,
            @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture,
            Principal principal) throws IOException {

        User user = userRepository.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setPhoneNumber(phone);
        user.setAddress(address);
        user.setBio(bio);
        user.setCompanyName(companyName);
        user.setBusinessType(businessType);
        user.setMarketRegions(marketRegions);
        user.setBusinessLicenseNumber(businessLicenseNumber);

        if (profilePicture != null && !profilePicture.isEmpty()) {
            user.setProfilePicture(profilePicture.getBytes());
        }

        userRepository.save(user);
        return ResponseEntity.ok("Profile updated successfully");
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        return userRepository.findByUsername(username)
                .map(u -> ResponseEntity.ok(u))
                .orElse(ResponseEntity.notFound().build());
    }
}