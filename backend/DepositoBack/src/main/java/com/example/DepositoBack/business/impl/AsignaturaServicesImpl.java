package com.example.DepositoBack.business.impl;

import com.example.DepositoBack.business.AsignaturaServices;
import com.example.DepositoBack.integration.AsignaturaRepository;
import com.example.DepositoBack.model.Asignatura;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AsignaturaServicesImpl implements AsignaturaServices {

    @Autowired
    private AsignaturaRepository asignaturaRepository;

    @Override
    public List<Asignatura> getAsignaturasByCarrera(String idCarrera) {
        return asignaturaRepository.getAsignaturasByCarrera(idCarrera).stream().map(
                x -> asignaturaRepository.getNameById(x)
        ).collect(Collectors.toList());
    }
}
