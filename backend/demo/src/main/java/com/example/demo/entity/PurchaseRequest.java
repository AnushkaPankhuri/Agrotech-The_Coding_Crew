package com.example.demo.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class PurchaseRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String farmerUsername;
    private String cropType;
    private double quantity; // in KG
    private double price;
    private LocalDate requestDate;
    private LocalDate neededDate;

    private String status = "pending";
    private String middlemanUsername;


}

