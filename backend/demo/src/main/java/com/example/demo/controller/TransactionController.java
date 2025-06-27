package com.example.demo.controller;



import com.example.demo.entity.PurchaseRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.PurchaseRequestRepository;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private PurchaseRequestRepository purchaseRequestRepository;

    @Autowired
    private UserRepository userRepository;


    @GetMapping
    public ResponseEntity<List<PurchaseRequest>> getFulfilledTransactions(Principal principal) {
        String farmerUsername = principal.getName();
        List<PurchaseRequest> fulfilled = purchaseRequestRepository
                .findByFarmerUsernameAndStatusIgnoreCase(farmerUsername, "fulfilled");

        return ResponseEntity.ok(fulfilled);
    }

    @GetMapping("/middleman")
    public ResponseEntity<List<PurchaseRequest>> getFulfilledMiddlemanTransactions(Principal principal) {
        String middlemanUsername = principal.getName();
        List<PurchaseRequest> fulfilled = purchaseRequestRepository
                .findByMiddlemanUsernameAndStatusIgnoreCase(middlemanUsername, "fulfilled");
        return ResponseEntity.ok(fulfilled);
    }


    @GetMapping("/profile/{username}")
    public ResponseEntity<?> getUserProfile(@PathVariable String username) {
        return userRepository.findByUsername(username)
                .map(user -> ResponseEntity.ok(user))
                .orElse(ResponseEntity.notFound().build());
    }



}
