package org.zhxie.quizplatform.problem;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProblemRepositoryTest {

    @Autowired
    private ProblemRepository repository ;

    @Test
    public void testSaveProblem() {
        Problem p = new Problem();
        p.setAnswer("xxx");
        p.setQuestion("what's your name?");
        p.setProblemType("test");
        Problem saved = repository.save(p);
        assertNotNull(saved);
    }


}
