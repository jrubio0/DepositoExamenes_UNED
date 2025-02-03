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
    @Column(name="id_curso")
    private String curso;
    @Column(name="id_tipoasignatura")
    private String idTipoasignatura;

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

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String getIdTipoasignatura() {
        return idTipoasignatura;
    }

    public void setIdTipoasignatura(String idTipoasignatura) {
        this.idTipoasignatura = idTipoasignatura;
    }

    @Override
    public String toString() {
        return "Asignatura{" +
                "idAsignatura='" + idAsignatura + '\'' +
                ", nombreAsignatura='" + nombreAsignatura + '\'' +
                ", curso='" + curso + '\'' +
                ", idTipoasignatura='" + idTipoasignatura + '\'' +
                '}';
    }
}
