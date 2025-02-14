package com.example.DepositoBack.business.impl;

import com.example.DepositoBack.business.AsignaturaServices;
import com.example.DepositoBack.integration.AsignaturaRepository;
import com.example.DepositoBack.model.Asignatura;
import com.example.DepositoBack.model.Curso;
import com.example.DepositoBack.model.Examen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AsignaturaServicesImpl implements AsignaturaServices {

    @Autowired
    private AsignaturaRepository asignaturaRepository;

    @Override
    public List<Asignatura> getAsignaturasByCarrera(String idCarrera) {
        return asignaturaRepository.getAsignaturasByCarrera(idCarrera);
    }

    @Override
    public List<Curso> getCursosByAsignatura(String idAsignatura) {
        List<Object[]> objetos = asignaturaRepository.getCursosByAsignatura(idAsignatura);
        List<Curso> cursos = new ArrayList<>();
        List<Examen> examenes = new ArrayList<>();
        for (Object[] row : objetos) {
            Examen e = new Examen();
            e.setTipoExamen(row[2].toString());
            e.setIdCursoAcademico(row[3].toString());
            e.setIdConvocatoriaExamen(row[4].toString());
            e.setIdTipoArchivo(row[5].toString());
            e.setNombreFichero(row[8].toString());
            e.setRutaFichero(row[9].toString());
            examenes.add(e);

            boolean cursoExiste = false;
            for (Curso c : cursos) {
                if (c.getNum().equals(e.getIdCursoAcademico())) {
                    c.addExamen(e);
                    cursoExiste = true;
                    break;
                }
            }

            if (!cursoExiste) {
                Curso nuevoCurso = new Curso(e.getIdCursoAcademico());
                nuevoCurso.addExamen(e);
                cursos.add(nuevoCurso);
            }
        }
        Collections.reverse(cursos); //Por esta linea se imprimen los cursos en el frontend mostrando primero los más recientes (a lo mejor seria mas optimo añadir DESC al final de la query)
        return cursos;
    }
}
