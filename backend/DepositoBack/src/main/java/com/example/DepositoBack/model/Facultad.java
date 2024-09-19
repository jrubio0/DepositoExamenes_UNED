package com.example.DepositoBack.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Facultades")
public class Facultad {

    @Id
    private int idFacultad;
    @Column(name = "nombrefacultad")
    private String nombreFacultad;

    @Transient
    private List<Carrera> listadoMasteres = new ArrayList<>();

    public int getIdFacultad() {
        return idFacultad;
    }

    public void setIdFacultad(int idFacultad) {
        this.idFacultad = idFacultad;
    }

    public String getNombreFacultad() {
        return nombreFacultad;
    }

    public void setNombreFacultad(String nombreFacultad) {
        this.nombreFacultad = nombreFacultad;
    }

    public void addMaster(Carrera c) {
        listadoMasteres.add(c);
    }

    public List<Carrera> getListadoMasteres() {
        return listadoMasteres;
    }

    public void setListadoMasteres(List<Carrera> listadoMasteres) {
        this.listadoMasteres = listadoMasteres;
    }

    public boolean noTieneNingunMaster() {
        return this.listadoMasteres.isEmpty();
    }

    @Override
    public String toString() {
        return "Facultad{" +
                "idFacultad=" + idFacultad +
                ", nombreFacultad='" + nombreFacultad + '\'' +
                ", listadoMasteres=" + listadoMasteres +
                '}';
    }
}
