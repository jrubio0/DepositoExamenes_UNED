package com.example.DepositoBack.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ExamenesYSoluciones")
public class Examen {
    @Id
    private String fechaPublicacion;
    @Column(name = "tipoexamen")
    private String tipoExamen;
    @Column(name = "id_cursoacademico")
    private String idCursoAcademico;
    @Column(name = "id_convocatoriaexamen")
    private String idConvocatoriaExamen;
    @Column(name = "id_tipoarchivo")
    private String idTipoArchivo;
    @Column(name = "nombrefichero")
    private String nombreFichero;
    @Column(name = "rutafichero")
    private String rutaFichero;

    public String getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(String fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public String getTipoExamen() {
        return tipoExamen;
    }

    public void setTipoExamen(String tipoExamen) {
        this.tipoExamen = tipoExamen;
    }

    public String getIdCursoAcademico() {
        return idCursoAcademico;
    }

    public void setIdCursoAcademico(String idCursoAcademico) {
        this.idCursoAcademico = idCursoAcademico;
    }

    public String getIdConvocatoriaExamen() {
        return idConvocatoriaExamen;
    }

    public void setIdConvocatoriaExamen(String idConvocatoriaExamen) {
        this.idConvocatoriaExamen = idConvocatoriaExamen;
    }

    public String getIdTipoArchivo() {
        return idTipoArchivo;
    }

    public void setIdTipoArchivo(String idTipoArchivo) {
        this.idTipoArchivo = idTipoArchivo;
    }

    public String getNombreFichero() {
        return nombreFichero;
    }

    public void setNombreFichero(String nombreFichero) {
        this.nombreFichero = nombreFichero;
    }

    public String getRutaFichero() {
        return rutaFichero;
    }

    public void setRutaFichero(String rutaFichero) {
        this.rutaFichero = rutaFichero;
    }

    @Override
    public String toString() {
        return "Curso{" +
                "tipoExamen='" + tipoExamen + '\'' +
                ", idCursoAcademico='" + idCursoAcademico + '\'' +
                ", idConvocatoriaExamen='" + idConvocatoriaExamen + '\'' +
                ", idTipoArchivo='" + idTipoArchivo + '\'' +
                ", nombreFichero='" + nombreFichero + '\'' +
                ", rutaFichero='" + rutaFichero + '\'' +
                '}';
    }
}
