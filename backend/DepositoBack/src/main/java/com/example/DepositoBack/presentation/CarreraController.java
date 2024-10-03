package com.example.DepositoBack.presentation;

import com.example.DepositoBack.business.CarreraServices;
import com.example.DepositoBack.model.Carrera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carreras")
public class CarreraController {

    @Autowired
    private CarreraServices carreraServices;


    @GetMapping
    public List<Carrera> getAll() {
        return carreraServices.getAll();
    }

    @GetMapping("/masters")
    public List<Carrera> getAllMasters() {
        return carreraServices.getAllMasters();
    }

    @GetMapping("/facultadNameById/{id}")
    public String getFacultadById(@PathVariable Long id) {
        return carreraServices.getFacultadNameById(id);
    }

    @GetMapping("/cantidadSoluciones")
    public int getCantidadSoluciones() {
        return carreraServices.getCantidadSoluciones();
    }
}
