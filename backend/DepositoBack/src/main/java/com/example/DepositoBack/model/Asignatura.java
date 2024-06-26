package com.example.DepositoBack.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Asignaturas")
public class Asignatura {

    @Id
    private String idAsignatura;
    @Column(name="nombreasignatura")
    private String nombreAsignatura;
    @Column(name="urlasignatura")
    private String urlAsignatura;
    @Column(name="creditos")
    private int creditos;
    private int cuatrimestre;
    @Column(name="id_tipoasignatura")
    private int idTipoAsignatura;
    @Column(name="variosprofesores")
    private int variosProfesores;
    @Column(name="sinexamen")
    private int sinExamen;

    public String getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(String idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getNombreAsignatura() {
        return nombreAsignatura;
    }

    public void setNombreAsignatura(String nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }

    public String getUrlAsignatura() {
        return urlAsignatura;
    }

    public void setUrlAsignatura(String urlAsignatura) {
        this.urlAsignatura = urlAsignatura;
    }

    public int getCreditos() {
        return creditos;
    }

    public void setCreditos(int creditos) {
        this.creditos = creditos;
    }

    public int getCuatrimestre() {
        return cuatrimestre;
    }

    public void setCuatrimestre(int cuatrimestre) {
        this.cuatrimestre = cuatrimestre;
    }

    public int getIdTipoAsignatura() {
        return idTipoAsignatura;
    }

    public void setIdTipoAsignatura(int idTipoAsignatura) {
        this.idTipoAsignatura = idTipoAsignatura;
    }

    public int getVariosProfesores() {
        return variosProfesores;
    }

    public void setVariosProfesores(int variosProfesores) {
        this.variosProfesores = variosProfesores;
    }

    public int getSinExamen() {
        return sinExamen;
    }

    public void setSinExamen(int sinExamen) {
        this.sinExamen = sinExamen;
    }

    @Override
    public String toString() {
        return "Asignatura{" +
                "idAsignatura='" + idAsignatura + '\'' +
                ", nombreAsignatura='" + nombreAsignatura + '\'' +
                ", urlAsignatura='" + urlAsignatura + '\'' +
                ", creditos=" + creditos +
                ", cuatrimestre=" + cuatrimestre +
                ", idTipoAsignatura=" + idTipoAsignatura +
                ", variosProfesores=" + variosProfesores +
                ", sinExamen=" + sinExamen +
                '}';
    }
}
