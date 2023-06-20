package team.project.mriya.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InjectData {
    @GetMapping("/api/inject-data/hello")
    public String hello() {
        return "hello world!!!";
    }
}
