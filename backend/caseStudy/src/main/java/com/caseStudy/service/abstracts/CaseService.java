package com.caseStudy.service.abstracts;

import com.caseStudy.models.CaseModelResponseDto;
import org.springframework.web.multipart.MultipartFile;

public interface CaseService {
    CaseModelResponseDto createModel(String title, String description, MultipartFile file);
}
