package org.zhxie.quizplatform.problem;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProblemRepositoryTest {

    @Autowired
    private ProblemRepository repository ;

    @Test
    public void testSaveProblem() {

        //Save
        Problem p = new Problem();
        p.setAnswer("xxx");
        p.setQuestion("what's your name?");
        p.setProblemType("test");
        Problem saved = repository.save(p);
        assertNotNull(saved);

        //Query
        List<Problem> re = repository.findProblemByProblemType("test");
        final Problem problem = re.get(0);
        assertEquals(problem.getQuestion(), p.getQuestion());
        assertEquals(problem.getAnswer(), p.getAnswer());

        //Delete
        repository.delete(p);
        re = repository.findProblemByProblemType("test");
        assertTrue(re.isEmpty());

    }


}
