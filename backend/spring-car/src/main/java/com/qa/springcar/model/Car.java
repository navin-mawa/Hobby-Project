package com.qa.springcar.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long car_id;
	
	private String name;
	private String colour;
	private int size;
	private int model_id;
	
	public Car(Long car_id, String name, String colour, int size, int model_id) {
		super();
		this.car_id = car_id;
		this.name = name;
		this.colour = colour;
		this.size = size;
		this.model_id = model_id;
	}
	public Car() {
		super();
	
	}
	
	
	public Long getCar_id() {
		return car_id;
	}
	public void setCar_id(Long car_id) {
		this.car_id = car_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public int getModel_id() {
		return model_id;
	}
	public void setModel_id(int model_id) {
		this.model_id = model_id;
	}

}
	
	
	
	
	


