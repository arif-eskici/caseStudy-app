package com.caseStudy.controller;

import com.caseStudy.models.CaseModelResponseDto;
import com.caseStudy.service.abstracts.CaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
public class CaseController {

    private final CaseService caseService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public CaseModelResponseDto createModel(@Valid @NotNull @RequestPart MultipartFile file,
                                            @Valid @NotBlank @RequestParam String title,
                                            @Valid @NotBlank @RequestParam String description) {

        return caseService.createModel(title, description, file);

    }
}
