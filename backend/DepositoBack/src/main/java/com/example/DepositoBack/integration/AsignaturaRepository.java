package com.example.DepositoBack.integration;

import com.example.DepositoBack.model.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, String> { //TODO Juntar las dos querys en una y pasarlo a JPQL

    @Query(value = "SELECT a.ID_Asignatura, a.NombreAsignatura, a.ID_TipoAsignatura, c.curso FROM Asignaturas_R_Carreras arc INNER JOIN Asignaturas a ON arc.ID_Asignatura = a.ID_Asignatura INNER JOIN Cursos c ON arc.ID_Curso = c.ID_Curso WHERE arc.ID_Carrera = :idCarrera ORDER BY c.curso;", nativeQuery = true)
    List<Asignatura> getAsignaturasByCarrera(String idCarrera);
}