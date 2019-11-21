import React from 'react';
import styles from './index.css';
import { Input } from 'antd';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const { Search } = Input;

export default function () {
  return (
    <div className={styles.normal}>
      <div style={{ width: "800px", margin: "auto" }}>
        <div>
          <Search
            placeholder="input the question"
            enterButton="Question"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>
        <div>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
          </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </div>
      </div>
    </div>
  );
}
