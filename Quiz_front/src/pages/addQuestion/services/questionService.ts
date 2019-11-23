import axois from 'axios';
interface Problem {
    question: string,
    answer: string,
}
export function addQuesion(p: Problem) {
    axois.post(`quiz/api/questions`, {p}).then(res=>{

    }).catch(e=>{

    });
}
