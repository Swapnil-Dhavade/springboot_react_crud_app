package com.app.springbootrestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springbootrestapi.entity.Employee;
import com.app.springbootrestapi.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository eRepository;

	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployees(){
		return ResponseEntity.ok(eRepository.findAll());
		
	}
	
	@PostMapping("/employees")
	public ResponseEntity<Employee> saveEmployeeDetails(@RequestBody Employee e1){
		return ResponseEntity.ok(eRepository.save(e1));
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getSingleEmployee(@PathVariable Long id){
		return ResponseEntity.ok(eRepository.findById(id).get());
	}
	
	@PutMapping("/employees")
	public ResponseEntity<Employee> updateEmployeeDetails(@RequestBody Employee employee){
		return ResponseEntity.ok(eRepository.save(employee));
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<HttpStatus> deleteEmployeebyId(@PathVariable Long id){
		eRepository.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
}
