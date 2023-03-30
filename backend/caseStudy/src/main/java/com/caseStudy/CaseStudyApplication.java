package com.caseStudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(scanBasePackages = { "com.caseStudy.*" })
@EnableJpaAuditing(modifyOnCreate = false)
@ComponentScan(basePackages = { "com.caseStudy.*" })
@EntityScan("com.caseStudy.*")
public class CaseStudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(CaseStudyApplication.class, args);
	}

}
