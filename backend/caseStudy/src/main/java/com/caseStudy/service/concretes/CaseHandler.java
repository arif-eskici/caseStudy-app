package com.caseStudy.service.concretes;

import com.caseStudy.models.CaseModel;
import com.caseStudy.models.CaseModelResponseDto;
import com.caseStudy.repository.CaseRepository;
import com.caseStudy.service.abstracts.CaseService;
import com.caseStudy.service.abstracts.FileService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@AllArgsConstructor
public class CaseHandler implements CaseService {

    private final CaseRepository caseRepository;
    private final ModelMapper modelMapper;
    private final FileService fileService;

    @Override
    public CaseModelResponseDto createModel(String title, String description, MultipartFile file) {
        CaseModel caseModel = new CaseModel();
        caseModel.setTitle(title);
        caseModel.setDescription(description);
        caseModel.setImageUri(fileService.upload(file));

        caseModel = caseRepository.save(caseModel);
        return modelMapper.map(caseModel, CaseModelResponseDto.class);
    }
}
