import { Collapse } from 'antd';
import { Fragment } from 'react';
import Part1 from './Part1';
import { Part2 } from './Part2';
import Part3 from './Part3';

export default () => {
  return (
    <Fragment>
      <Collapse>
        <Collapse.Panel header="the part1" key="part1">
          <Part1 />
        </Collapse.Panel>
        <Collapse.Panel header="接口" key="接口">
          <Part2 />
        </Collapse.Panel>
        <Collapse.Panel header="封装和信息隐藏" key="封装和信息隐藏">
          <Part3 />
        </Collapse.Panel>
      </Collapse>
    </Fragment>
  );
};
