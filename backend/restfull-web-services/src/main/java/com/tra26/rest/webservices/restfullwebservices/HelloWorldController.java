package com.tra26.rest.webservices.restfullwebservices;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
public class HelloWorldController {
	//GET
	//URL - /hello-world
	//method - "Hello World"
	
	@RequestMapping(method = RequestMethod.GET, path = "hello-world")
	public String helloWorld() {
		return "Hello World";
	}
}
