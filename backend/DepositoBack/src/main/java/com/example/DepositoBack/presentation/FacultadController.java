package com.example.DepositoBack.presentation;

import com.example.DepositoBack.business.FacultadServices;
import com.example.DepositoBack.model.Facultad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facultades")
public class FacultadController {

    @Autowired
    private FacultadServices facultadServices;

    @GetMapping()
    public List<Facultad> getAllWithMasters() {
        return facultadServices.getAllWithMasters();
    }
}
