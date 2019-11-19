package org.zhxie.quizplatform.problem;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "problem")
public class Problem {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String question;
    private String answer;
    private String problemType;
}
