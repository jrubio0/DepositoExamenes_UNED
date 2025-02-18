package com.example.DepositoBack.presentation;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/pdf")
public class PdfController {

    @GetMapping()
    public ResponseEntity<byte[]> getPdf(@RequestParam String url) {
        RestTemplate restTemplate = new RestTemplate();
        byte[] pdfBytes = restTemplate.getForObject(url, byte[].class);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/pdf");
        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }

}
