import { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items = [
  {
    label: 'Navigation One',
    key: 'menu1', // 子路由
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'menu2',
    icon: <AppstoreOutlined />,
  },
];

export default (props: any) => {
  const [current, setCurrent] = useState<string>('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    history.push(`/customRouter/${e.key}`);
  };

  useEffect(() => {
    let path = location.pathname;
    items.map((item) => {
      path.indexOf(item.key) != -1 && setCurrent(item.key);
    });
  }, [location.pathname]);

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
import { ItemType, MenuItemGroupType } from 'antd/lib/menu/hooks/useItems';
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
