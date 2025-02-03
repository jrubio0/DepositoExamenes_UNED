package com.example.DepositoBack.presentation;

import com.example.DepositoBack.business.AsignaturaServices;
import com.example.DepositoBack.model.Asignatura;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/asignaturas")
public class AsignaturaController {

    @Autowired
    private AsignaturaServices asignaturaServices;

    @GetMapping
    public List<Asignatura> getAllByCarrera(@RequestParam(value="carrera", required=true) String idCarrera) { //Ej: 6201, 6602
        return asignaturaServices.getAsignaturasByCarrera(idCarrera);
    }

}
