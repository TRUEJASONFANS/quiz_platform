import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import styles from "./index.css"
import { connect } from 'dva';
const { TextArea } = Input;

@connect(({problemModel, loading, dispatch }) => ({
    problemModel,
    loading,
    dispatch
  }))
class AddQuestionBoard extends React.Component {

    render() {
        const { problemModel, loading , dispatch} = this.props

        return (<>
            <div>

                <div style={{ height: "100px" }}>

                </div>

                <div className={styles.question}>
                    <Row>
                        <Col span={3}><label>Questions</label></Col>
                        <Col>
                            <Input
                                placeholder="input the question"
                                size="large"
                            />
                        </Col>
                    </Row>
                </div>
                <div className={styles.answer}>
                    <Row>
                        <Col>Answer</Col>
                        <TextArea rows={4} />
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col offset={21}>
                            <Button onClick={()=>dispatch({
                                type:"problemModel/addQuestion",
                                payload: {}
                            })}>Add</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>)
    }
}
export default AddQuestionBoard
