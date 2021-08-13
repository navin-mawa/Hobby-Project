package com.qa.springcar.databse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.springcar.model.Car;

@Repository
public interface CarDatabase extends JpaRepository<Car, Long> {

}
