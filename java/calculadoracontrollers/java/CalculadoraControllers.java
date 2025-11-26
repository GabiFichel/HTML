package calculadoracontrollers.java;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calc")
@CrossOrigin("*")
public class CalculadoraControllers {

    private final CalculadoraService service;

    public CalculadoraControllers(CalculadoraService service) {
        this.service = service;
    }

    @GetMapping
    public double calcular(
            @RequestParam double a,
            @RequestParam double b,
            @RequestParam String op
    ) {
        return service.calcular(a, b, op);
    }
}