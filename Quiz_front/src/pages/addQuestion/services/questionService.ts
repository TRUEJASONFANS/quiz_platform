import axois from 'axios';
import {severUrl} from '../../../constant';
interface Problem {
    question: string,
    answer: string,
}
export function addQuesion(p: Problem) {
    axois.post(`${severUrl}/questions`, {p}).then(res=>{

    }).catch(e=>{

    });
}