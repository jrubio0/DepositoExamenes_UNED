package com.example.DepositoBack.business.impl;

import com.example.DepositoBack.business.FacultadServices;
import com.example.DepositoBack.integration.CarreraRepository;
import com.example.DepositoBack.integration.FacultadRepository;
import com.example.DepositoBack.model.Carrera;
import com.example.DepositoBack.model.Facultad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class FacultadServicesImpl implements FacultadServices {

    @Autowired
    private FacultadRepository facultadRepository;

    @Autowired
    private CarreraRepository carreraRepository;

    @Override
    public List<Facultad> getAllWithMasters() {
        List<Carrera> listadoMasteres = carreraRepository.findAllMasters();
        List<Facultad> listadoFacultades = facultadRepository.findAll();
        for (Carrera c : listadoMasteres) {
            for (Facultad f : listadoFacultades) {
                if (f.getIdFacultad() == c.getIdFacultad()) {
                    f.addMaster(c);
                }
            }
        }
        //Descarto las facultades que no tienen ningun master
        Iterator<Facultad> iterator = listadoFacultades.iterator();
        while (iterator.hasNext()) {
            Facultad f = iterator.next();
            if (f.noTieneNingunMaster()) {
                iterator.remove();
            }
        }
        return listadoFacultades;
    }
}
