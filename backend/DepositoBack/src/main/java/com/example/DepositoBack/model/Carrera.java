package com.example.DepositoBack.model;

import jakarta.persistence.*;

@Entity
@Table(name="Carreras")
public class Carrera {

    @Id
    private int idCarrera;
    private int idFacultad;
    @Column(name = "nombrecarrera")
    private String nombreCarrera;
    @Column(name = "nombrecortocarrera")
    private String nombreCortoCarrera;
    @Column(name = "urlcarrera")
    private String urlCarrera;
    @Column(name = "telefononegociado")
    private String telefonoNegociado;
    @Column(name = "telefonosecretaria")
    private String telefonoSecretaria;
    @Column(name = "id_tipocarrera")
    private int idTipoCarrera;
    @Column(name = "id_tipoensenanza")
    private int idTipoEnsenanza;
    @Column(name = "noimpartida")
    private int noImpartida;

    @Override
    public String toString() {
        return "Carrera{" +
                "idCarrera=" + idCarrera +
                ", idFacultad=" + idFacultad +
                ", nombreCarrera='" + nombreCarrera + '\'' +
                ", nombreCortoCarrera='" + nombreCortoCarrera + '\'' +
                ", urlCarrera='" + urlCarrera + '\'' +
                ", telefonoNegociado='" + telefonoNegociado + '\'' +
                ", telefonoSecretaria='" + telefonoSecretaria + '\'' +
                ", idTipoCarrera=" + idTipoCarrera +
                ", idTipoEnsenanza=" + idTipoEnsenanza +
                ", noImpartida=" + noImpartida +
                '}';
    }
}
