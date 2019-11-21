import * as QustionSerivce from '../services/questionService';
export default {
    namespace: 'problemModel',
    state: {
        
    },
    reducers: {

    },
    effects: {
        * addQuestion({payload: p}, { call}) {
            yield call(QustionSerivce.addQuesion, p);
        }
    }
}