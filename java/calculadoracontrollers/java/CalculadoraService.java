package calculadoracontrollers.java;

import org.springframework.stereotype.Service;

@Service
public class CalculadoraService {
	public double calcular(double a, double b, String op) {

        return switch (op) {
            case "+" -> a + b;
            case "-" -> a - b;
            case "*" -> a * b;
            case "/" -> b != 0 ? a / b : Double.NaN;
            default -> throw new IllegalArgumentException("Operação inválida");
        };
    }
}

