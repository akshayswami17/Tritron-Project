package com.example.TritronEcom.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.TritronEcom.entities.Order;
import com.example.TritronEcom.services.OrderService;

import java.util.List;
@CrossOrigin(origins="http://localhost:3000")
@RestController
//@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getAllOrders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping("/add")
    public Order addOrder(@RequestBody Order order) {
        return orderService.addOrder(order);
    }

    // Other endpoints for updating, deleting orders, etc.
}
