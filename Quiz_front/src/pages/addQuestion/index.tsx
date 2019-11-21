import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import moment from 'moment';
import styles from "./index.css"
import { connect } from 'dva';
const { TextArea } = Input;

@connect(({ problemModel, loading, dispatch }) => ({
    problemModel,
    loading,
  }))
export default class AddQuestion extends React.Component {

    dispatch:Function = ()=>{};
    constructor() {
        super({});
        this.dispatch = this.props.dispatch;
    }

    render() {
        return <>
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
                        <Col offset = {21}>
                            <Button onClick={this.dispatch({
                                type:"problemModel/addQuestion",
                                payload: {}
                            })}>Add</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    }
}