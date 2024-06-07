package com.example.TritronEcom.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TritronEcom.entities.User;
import com.example.TritronEcom.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository urepo;

    public UserService(UserRepository userRepository) {
        this.urepo = userRepository;
    }

    public User getUserById(Integer id) {
        return urepo.findById(id).orElse(null);
    }

    public User getuser(String username, String password) {
        Optional<User> ou = urepo.getUser(username, password);
        return ou.orElse(null);
    }

    public User save(User u) {
        return urepo.save(u);
    }

    public List<User> getAllUsers() {
        return urepo.findAll();
    }

    public User updateUser(Integer uid, User updatedUser) {
        return urepo.findById(uid).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword());
            // Update other fields as necessary
            return urepo.save(user);
        }).orElseGet(() -> {
            updatedUser.setUid(uid);
            return urepo.save(updatedUser);
        });
    }

    public User findByUsername(String username) {
        return urepo.findByUsername(username);
    }
}
