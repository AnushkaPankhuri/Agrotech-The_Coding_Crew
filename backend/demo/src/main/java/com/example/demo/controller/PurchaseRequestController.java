package com.example.demo.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.entity.PurchaseRequest;
import com.example.demo.repository.PurchaseRequestRepository;

@RestController
@RequestMapping("/api/purchase-requests")
public class PurchaseRequestController {

    @Autowired
    private PurchaseRequestRepository repo;

    @PostMapping
    public PurchaseRequest createRequest(@RequestBody PurchaseRequest request, Principal principal) {
        request.setFarmerUsername(principal.getName());
        request.setStatus("pending");
        request.setMiddlemanUsername(null);
        return repo.save(request);
    }

    @GetMapping
    public List<PurchaseRequest> getMyPendingRequests(Principal principal) {
        return repo.findByFarmerUsernameAndStatus(principal.getName(), "pending");
    }

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id, Principal principal) {
        PurchaseRequest request = repo.findById(id).orElseThrow();
        if (request.getFarmerUsername().equals(principal.getName())) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Unauthorized deletion attempt");
        }
    }

    @GetMapping("/all-pending")
    public List<PurchaseRequest> allPendingRequests() {
        return repo.findByStatus("pending");
    }

    @PutMapping("/{id}/status")
    public PurchaseRequest updateStatus(@PathVariable Long id, @RequestParam String status) {
        String normalizedStatus = status.trim().toLowerCase();
        if (!normalizedStatus.equals("pending") && !normalizedStatus.equals("fulfilled")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Status must be 'pending' or 'fulfilled'");
        }

        PurchaseRequest pr = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "PurchaseRequest with id " + id + " not found"));

        String middlemanUsername = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            middlemanUsername = ((UserDetails) principal).getUsername();
        }

        pr.setStatus(normalizedStatus);
        if (normalizedStatus.equals("fulfilled")) {
            pr.setMiddlemanUsername(middlemanUsername);
        } else {
            pr.setMiddlemanUsername(null);
        }

        return repo.save(pr);}


    @GetMapping("/pending")
    public List<PurchaseRequest> getAllPendingRequests() {
        return repo.findByStatus("pending");
    }
}