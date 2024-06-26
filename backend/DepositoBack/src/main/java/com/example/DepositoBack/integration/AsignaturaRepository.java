package com.example.DepositoBack.integration;

import com.example.DepositoBack.model.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, String> {

    @Query(value = "SELECT ID_Asignatura FROM Asignaturas_R_Carreras WHERE ID_Carrera = :idCarrera", nativeQuery = true)
    List<String> getAsignaturasByCarrera(String idCarrera);

    @Query(value = "SELECT * FROM Asignaturas WHERE ID_Asignatura = :idAsignatura", nativeQuery = true)
    Asignatura getNameById(String idAsignatura);
}
