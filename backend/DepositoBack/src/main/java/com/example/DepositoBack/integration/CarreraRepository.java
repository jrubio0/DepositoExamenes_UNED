package com.example.DepositoBack.integration;

import com.example.DepositoBack.model.Carrera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarreraRepository extends JpaRepository<Carrera, Integer> {

    //Consulta original de la antigua web:

    //SELECT * FROM Carreras c INNER JOIN TiposCarreras t ON c.ID_TipoCarrera = t.ID_TipoCarrera
    // WHERE ID_TipoEnsenanza = 6 and c.ID_TipoCarrera >= 1
    // ORDER BY c.ID_Facultad ASC, c.ID_Carrera;

    @Query(value = "SELECT NombreFacultad FROM Facultades WHERE ID_Facultad = :id", nativeQuery = true)
    String getFacultadNameById(Long id);

    @Query(value = "SELECT NombreCarrera FROM Carreras WHERE ID_Carrera = :id", nativeQuery = true)
    String getCarreraNameById(Long id);

    @Query(value = "SELECT * FROM Carreras WHERE ID_TipoEnsenanza = 6  AND ID_TipoCarrera = 1 ORDER BY ID_Facultad ASC, ID_Carrera", nativeQuery = true)
    List<Carrera> findAllMasters();

    @Query(value = """
                SELECT f.NombreFacultad, c.*
                FROM Facultades f
                JOIN Carreras c ON f.ID_Facultad = c.ID_Facultad
                WHERE f.ID_Facultad = :id
                  AND c.ID_TipoEnsenanza = 6
                  AND c.ID_TipoCarrera = 1
                ORDER BY c.ID_Facultad ASC, c.ID_Carrera
            """, nativeQuery = true)
    List<Object[]> findFacultyAndMastersById(@Param("id") Long id);


    @Query(value = "SELECT COUNT(*) FROM ExamenesYSoluciones;", nativeQuery = true)
    int getCantidadSoluciones();


}
