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

    public int getIdCarrera() {
        return idCarrera;
    }

    public void setIdCarrera(int idCarrera) {
        this.idCarrera = idCarrera;
    }

    public int getIdFacultad() {
        return idFacultad;
    }

    public void setIdFacultad(int idFacultad) {
        this.idFacultad = idFacultad;
    }

    public String getNombreCarrera() {
        return nombreCarrera;
    }

    public void setNombreCarrera(String nombreCarrera) {
        this.nombreCarrera = nombreCarrera;
    }

    public String getNombreCortoCarrera() {
        return nombreCortoCarrera;
    }

    public void setNombreCortoCarrera(String nombreCortoCarrera) {
        this.nombreCortoCarrera = nombreCortoCarrera;
    }

    public String getUrlCarrera() {
        return urlCarrera;
    }

    public void setUrlCarrera(String urlCarrera) {
        this.urlCarrera = urlCarrera;
    }

    public String getTelefonoNegociado() {
        return telefonoNegociado;
    }

    public void setTelefonoNegociado(String telefonoNegociado) {
        this.telefonoNegociado = telefonoNegociado;
    }

    public String getTelefonoSecretaria() {
        return telefonoSecretaria;
    }

    public void setTelefonoSecretaria(String telefonoSecretaria) {
        this.telefonoSecretaria = telefonoSecretaria;
    }

    public int getIdTipoCarrera() {
        return idTipoCarrera;
    }

    public void setIdTipoCarrera(int idTipoCarrera) {
        this.idTipoCarrera = idTipoCarrera;
    }

    public int getIdTipoEnsenanza() {
        return idTipoEnsenanza;
    }

    public void setIdTipoEnsenanza(int idTipoEnsenanza) {
        this.idTipoEnsenanza = idTipoEnsenanza;
    }

    public int getNoImpartida() {
        return noImpartida;
    }

    public void setNoImpartida(int noImpartida) {
        this.noImpartida = noImpartida;
    }

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
