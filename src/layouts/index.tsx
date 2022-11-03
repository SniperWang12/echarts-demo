import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useSafeState } from 'ahooks';
import { Layout, Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Wrapper } from './style';
const { Header, Sider, Content } = Layout;

interface IProps {
  children: React.FC;
}
const App: React.FC<IProps> = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isHideMenu, setIsHideMenu] = useSafeState(false);
  const [selectedKeys, setSelectedKeys] = useSafeState<Array<string>>([]);
  const logoSrc = {
    noText: require('/public/images/logo.png'),
    withText: require('/public/images/text-logo.png'),
  };
  useEffect(() => {
    setSelectedKeys([history.location.pathname]);
  }, []);

  /**
   * 点击菜单响应事件
   * @param param0
   */
  const handleRouteChange = ({ key }: any) => {
    history.push(key);
    setSelectedKeys([key]);
  };

  return (
    <Wrapper id="root">
      <Layout className="page-layout-outer" hasSider>
        <Sider
          onBreakpoint={(broken) => {
            setIsHideMenu(broken);
          }}
          collapsedWidth={isHideMenu ? '0' : '50'}
          trigger={null}
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <img src={logoSrc.noText} draggable={false} />
            ) : (
              <>
                <img src={logoSrc.withText} alt="" draggable={false} />
                UI Library
              </>
            )}
          </div>
          <Menu
            theme="dark"
            selectedKeys={selectedKeys}
            onClick={handleRouteChange}
            items={[
              {
                key: '/charts',
                icon: <UserOutlined />,
                label: 'ECharts',
              },
              {
                key: '/process',
                icon: <VideoCameraOutlined />,
                label: 'Process',
              },
              {
                key: '/progress',
                icon: <VideoCameraOutlined />,
                label: '播放进度条',
              },
              // {
              //   key: '3',
              //   icon: <UploadOutlined />,
              //   label: 'nav 3',
              // },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              color: '#fff',
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              },
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280,
              overflowY: 'scroll',
              background: '#f4f1f1',
              padding: 20,
              border: '1px solid red',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default App;
