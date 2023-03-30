package com.caseStudy.repository;

import com.caseStudy.models.CaseModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaseRepository extends JpaRepository <CaseModel, Long> {

}
