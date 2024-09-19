package com.example.DepositoBack.integration;


import com.example.DepositoBack.model.Carrera;
import com.example.DepositoBack.model.Facultad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacultadRepository extends JpaRepository<Facultad, Integer> { }
