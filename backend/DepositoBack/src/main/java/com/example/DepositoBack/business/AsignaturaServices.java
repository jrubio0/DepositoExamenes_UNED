package com.example.DepositoBack.business;

import com.example.DepositoBack.integration.AsignaturaRepository;
import com.example.DepositoBack.model.Asignatura;
import com.example.DepositoBack.model.Curso;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface AsignaturaServices {

    List<Asignatura> getAsignaturasByCarrera(String idCarrera);
    List<Curso> getCursosByAsignatura(String idAsignatura);
}
