package com.example.restful_web_service.helloworld;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    //Get
    // /hello-world -> (endPoint)

    @GetMapping("/hello-world")
    public String helloWorld(){
        return "Hello World";
    }


    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }

    @GetMapping("/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldBean(@PathVariable String name){

        //String.format
        return new HelloWorldBean(String.format("Hello World, %s ",name));
    }




}

