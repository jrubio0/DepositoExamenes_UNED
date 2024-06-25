package com.example.DepositoBack.presentation;

import com.example.DepositoBack.business.CarreraServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carrera")
public class CarreraController {

    @Autowired
    private CarreraServices carreraServices;


    @GetMapping
    public String getAll(){
        return carreraServices.getAll().toString();
    }
}
