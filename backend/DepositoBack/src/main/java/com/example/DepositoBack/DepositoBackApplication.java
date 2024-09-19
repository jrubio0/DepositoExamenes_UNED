package com.example.DepositoBack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DepositoBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepositoBackApplication.class, args);
	}

	//Importante: cuando la página pase a un entorno de producción hay que ajustar la configuracion de CORS para reflejar el nuevo entorno.


}
