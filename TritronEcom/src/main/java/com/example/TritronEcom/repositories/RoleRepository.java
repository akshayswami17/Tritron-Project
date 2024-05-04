package com.example.TritronEcom.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TritronEcom.entities.Role;



@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
