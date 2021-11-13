package controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerHello {

    @GetMapping(path="/hola")
    public ResponseEntity<String> hola () {
        return new ResponseEntity<>("hola mundo", HttpStatus.OK);
    }

}
