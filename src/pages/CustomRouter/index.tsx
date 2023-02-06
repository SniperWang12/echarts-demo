import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'menu1',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'menu2',
    icon: <AppstoreOutlined />,
  },
];

export default (props: any) => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    history.push(`/自定义Router/${e.key}`);
  };

  useEffect(() => {
    let pathName = location.pathname;
    pathName.indexOf('menu2') != -1 && setCurrent('menu2');
  }, []);

  return (
    <Wrapper>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {'current' + current}
      <div className="content-outer">{props.children}</div>
    </Wrapper>
  );
};

import styled from 'styled-components';
import { history } from 'umi';
const Wrapper = styled.div`
  .content-outer {
    width: 100%;
    height: 200px;
    border: 1px dashed #333;
    border-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
