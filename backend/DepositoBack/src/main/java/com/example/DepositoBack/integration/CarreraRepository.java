package com.example.DepositoBack.integration;

import com.example.DepositoBack.model.Carrera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarreraRepository extends JpaRepository<Carrera, Integer> {

    @Query(value = "SELECT * FROM Carreras WHERE ID_TipoEnsenanza = 6;", nativeQuery = true)
    List<Carrera> findAllMasters();
}
