package com.caseStudy.models;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CaseModelCreateDto {

    @NotBlank
    private String title;

    @NotBlank
    private String description;
}