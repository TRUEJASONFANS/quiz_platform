package org.zhxie.quizplatform.problem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
    Problem findProblemByProblemType(String py);
}
