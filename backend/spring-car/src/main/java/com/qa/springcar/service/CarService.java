package com.qa.springcar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.qa.springcar.databse.CarDatabase;
import com.qa.springcar.model.Car;



@Service
public class CarService {
	
	private CarDatabase database;

	

	public CarService(CarDatabase datbase) {
		super();
		this.database = datbase;
	}
	
	
	public Car createCar(Car car) {
		return this.database.save(car);
		
	}

	public List<Car> getAllCars() {
		return this.database.findAll();
	}

	public void deleteCar(Long id) {
		this.database.deleteById(id);
		
	}
	
	public void updateCar(Car car, Long id) {
		Optional<Car> optionalcar = this.database.findById(id);
		Car oldCar = optionalcar.get();
		
		oldCar.setName(car.getName());
		oldCar.setColour(car.getColour());
		oldCar.setSize(car.getSize());
		oldCar.setModel_id(car.getModel_id());
		
		this.database.save(oldCar);
		
	}

	
}
