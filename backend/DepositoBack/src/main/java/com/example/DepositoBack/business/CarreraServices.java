package com.example.DepositoBack.business;

import com.example.DepositoBack.model.Carrera;

import java.util.List;

public interface CarreraServices {

    List<Carrera> getAll();
    List<Carrera> getAllMasters();
    String getFacultadNameById(Long id);
    String getCarreraNameById(Long id);
    int getCantidadSoluciones();
}
