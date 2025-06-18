package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String phoneNumber;
    private String address;
    private String bio;
    private String companyName;
    private String businessType;
    private String preferredCrops;
    private String marketRegions;
    private String businessLicenseNumber;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role; // FARMER or MIDDLEMAN

    public User() {
    }

    public User(Long id, String username, String email, String phoneNumber, String address, String bio,
                String companyName, String businessType, String preferredCrops, String marketRegions,
                String businessLicenseNumber, String password, Role role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.bio = bio;
        this.companyName = companyName;
        this.businessType = businessType;
        this.preferredCrops = preferredCrops;
        this.marketRegions = marketRegions;
        this.businessLicenseNumber = businessLicenseNumber;
        this.password = password;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getBusinessType() {
        return businessType;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public String getPreferredCrops() {
        return preferredCrops;
    }

    public void setPreferredCrops(String preferredCrops) {
        this.preferredCrops = preferredCrops;
    }

    public String getMarketRegions() {
        return marketRegions;
    }

    public void setMarketRegions(String marketRegions) {
        this.marketRegions = marketRegions;
    }

    public String getBusinessLicenseNumber() {
        return businessLicenseNumber;
    }

    public void setBusinessLicenseNumber(String businessLicenseNumber) {
        this.businessLicenseNumber = businessLicenseNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Lob
    @Column(name = "profile_picture", columnDefinition = "LONGBLOB")
    private byte[] profilePicture;

    public byte[] getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(byte[] profilePicture) {
        this.profilePicture = profilePicture;
    }

}
