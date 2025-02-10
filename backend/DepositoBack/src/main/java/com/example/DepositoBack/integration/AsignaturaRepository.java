package com.example.DepositoBack.integration;

import com.example.DepositoBack.model.Asignatura;
import com.example.DepositoBack.model.Examen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, String> {

    @Query(value = "SELECT a.ID_Asignatura, a.NombreAsignatura, a.ID_TipoAsignatura, arc.ID_Curso FROM Asignaturas_R_Carreras arc " +
            "INNER JOIN Asignaturas a ON arc.ID_Asignatura = a.ID_Asignatura " +
            "WHERE arc.ID_Carrera = :idCarrera ORDER BY arc.ID_Curso;", nativeQuery = true)
    List<Asignatura> getAsignaturasByCarrera(String idCarrera);

    @Query(value="SELECT * FROM ExamenesYSoluciones WHERE ID_Asignatura = :idAsignatura ORDER BY ID_CursoAcademico;", nativeQuery = true)
    List<Object[]> getCursosByAsignatura(String idAsignatura);
}