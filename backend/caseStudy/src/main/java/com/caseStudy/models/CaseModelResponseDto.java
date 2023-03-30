package com.caseStudy.models;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CaseModelResponseDto {

    private Long id;

    private String title;

    private String description;

    private String imageUri;

    private LocalDateTime createdDate;

}
