package com.example.DepositoBack.model;

import java.util.ArrayList;
import java.util.List;


public class Curso {
    private String num;
    private List<Examen> examenes = new ArrayList<>();

    public Curso(String num) {
        this.num = num;
    }

    public void addExamen(Examen e) {
        examenes.add(e);
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public List<Examen> getExamenes() {
        return examenes;
    }

    public void setExamenes(List<Examen> examenes) {
        this.examenes = examenes;
    }

    @Override
    public String toString() {
        return "Curso{" +
                "num=" + num +
                ", examenes=" + examenes +
                '}';
    }
}
