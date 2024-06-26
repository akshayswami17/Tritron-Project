package com.example.TritronEcom.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.TritronEcom.entities.Area;
import com.example.TritronEcom.entities.Role;
import com.example.TritronEcom.entities.Seller;
import com.example.TritronEcom.entities.SellerRegistration;
import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.services.AreaService;
import com.example.TritronEcom.services.CityService;
import com.example.TritronEcom.services.EmailService;
import com.example.TritronEcom.services.RoleService;
import com.example.TritronEcom.services.SellerService;
import com.example.TritronEcom.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SellerController {

    @Autowired
    SellerService sservice;

    @Autowired
    RoleService rservice;

    @Autowired
    UserService uservice;

    @Autowired
    CityService cyservice;

    @Autowired
    AreaService aservice;

    @Autowired
    EmailService emailService;

    @PostMapping("/sellerreg")
    public Seller saveSeller(@RequestBody SellerRegistration slr) {
        System.out.println(slr);
        Role r = rservice.getRole(3);
        User u = new User(slr.getUsername(), slr.getPassword(), r, true);
        User saved = uservice.save(u);

        Area ar = aservice.getArea(slr.getArea_id());

        Seller s = new Seller(slr.getGst_no(), slr.getLicense_id(), slr.getShop_name(), slr.getPhone_no(), slr.getEmail(), slr.getAddress(), ar, saved);
        System.out.println(s);

        Seller savedSeller = sservice.saveSeller(s);
        

        // Send email notification
        String to = savedSeller.getEmail();
        String subject = "Registration Successful";
        String text = "Dear " + savedSeller.getShop_name() + ",\n\nThank you for registering. Your registration was successful.\n\nBest regards,\nTritronEcom Team";
        emailService.sendEmail(to, subject, text);

        return savedSeller;
    }

    @GetMapping("/getAllSellers")
    public List<Seller> getAllSellers() {
        return sservice.getAllSellers();
    }
}
