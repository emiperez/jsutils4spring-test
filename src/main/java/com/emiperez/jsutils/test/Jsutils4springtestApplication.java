package com.emiperez.jsutils.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackageClasses = {com.emiperez.springframework.jsutils.Ajaxl10nController.class})
@SpringBootApplication
public class Jsutils4springtestApplication {

	public static void main(String[] args) {
		SpringApplication.run(Jsutils4springtestApplication.class, args);
	}

}
