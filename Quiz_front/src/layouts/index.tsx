import React from 'react';
import styles from './index.css';
import { Menu, Icon, Layout } from 'antd';
import Link from "umi/link";
const { Footer, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <div style={{ height: "100%", background: "#ffffff" }}>
      <Layout style={{ height: "100%" }}>
        <h2 className={styles.welcome}>Quiz Online</h2>
        <Layout >
          <Sider style={{ background: "#ffffff" }}>
            <Menu>
              <Menu.Item key="1">
                <Link to="/addQuestion">
                  <Icon type="pie-chart" />
                  Add Questions
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/randomQuiz">
                  <Icon type="appstore" />
                  Random Quiz
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ background: "#ffffff" }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
