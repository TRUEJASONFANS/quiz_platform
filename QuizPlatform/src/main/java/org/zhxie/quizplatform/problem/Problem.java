package org.zhxie.quizplatform.problem;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Data
@Entity
public class Problem {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String question;
    private String answer;
    private ProblemType type;
}
