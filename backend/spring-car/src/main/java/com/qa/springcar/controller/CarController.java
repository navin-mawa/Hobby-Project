package com.qa.springcar.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.springcar.model.Car;
import com.qa.springcar.service.CarService;

@RestController
@CrossOrigin
public class CarController {
	
	private CarService service;

	public CarController(CarService service) {
		super();
		this.service = service;
	}
	@GetMapping("/hello")
	public String helloTest() {
		return "Hello World";
	}
	@PostMapping("/add")
	public ResponseEntity<String> createCar(@RequestBody Car car) {
		
		this.service.createCar(car);
		
		return new ResponseEntity<String>("Car name: " + car.getName() + " added to list :)", HttpStatus.CREATED);
	}
	@GetMapping("/getAll")
	public ResponseEntity<List<Car>> getAllCars(){
	List<Car> carList = this.service.getAllCars();
	return ResponseEntity.ok(carList);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteCar(@PathVariable Long id){
		this.service.deleteCar(id);
		return new ResponseEntity<String>("Object id: " + " has been deleted :p", HttpStatus.OK);
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateCar(@RequestBody Car car, @PathVariable Long id) {
		this.service.updateCar(car, id);
		return new ResponseEntity<String>("Car id:" + id + "has been updated!" , HttpStatus.ACCEPTED);
	}
	
	
	
	
	
	
	

}
