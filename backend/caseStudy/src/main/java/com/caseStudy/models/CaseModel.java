package com.caseStudy.models;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@Entity
@Table (name = "tb_casestudy")
@EntityListeners(AuditingEntityListener.class)
public class CaseModel {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 500)
    private String description;

    private String imageUri;

    @CreatedDate
    private LocalDateTime createdDate;

}
