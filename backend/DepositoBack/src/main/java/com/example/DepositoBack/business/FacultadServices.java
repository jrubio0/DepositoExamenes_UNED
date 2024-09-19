package com.example.DepositoBack.business;

import com.example.DepositoBack.model.Facultad;

import java.util.List;

public interface FacultadServices {

    List<Facultad> getAllWithMasters();
}
