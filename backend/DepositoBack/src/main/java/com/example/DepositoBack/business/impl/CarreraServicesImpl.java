package com.example.DepositoBack.business.impl;

import com.example.DepositoBack.business.CarreraServices;
import com.example.DepositoBack.integration.CarreraRepository;
import com.example.DepositoBack.model.Carrera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarreraServicesImpl implements CarreraServices {

    @Autowired
    private CarreraRepository carreraRepository;

    @Override
    public List<Carrera> getAll() {
        return carreraRepository.findAll();
    }

    @Override
    public List<Carrera> getAllMasters() {
        return carreraRepository.findAllMasters();
    }

    @Override
    public String getFacultadNameById(Long id) {
        return carreraRepository.getFacultadNameById(id);
    }
}
