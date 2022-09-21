import { ChartWrapper } from './style';
// import { Row } from 'react-flexbox-grid';
import { ContentCard } from '@/components/card';
import { Charts1 } from '@/components/charts/Chart1';
import Charts2 from '@/components/charts/Chart2';
import { Collapse, Row } from 'antd';
import {
  chart1_option,
  chart2_option,
  chart3_option,
  chart4_option,
  chart5_option,
  chart6_option,
  chart7_option,
  chart8_option,
} from './tempData';
import Chart3 from '@/components/charts/Chart3';
import Chart4 from '@/components/charts/Chart4';
import Chart5 from '@/components/charts/Chart5';
import Chart6 from '@/components/charts/Chart6';
import Chart8 from '@/components/charts/Chart8';
import Chart7 from '@/components/charts/Chart7';

const { Panel } = Collapse;
export default () => {
  return (
    <ChartWrapper>
      <h1>图表库👇🏻</h1>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Introduction" key="1">
          <p>
            👉🏻
            鉴于BizCharts对于数据量超过2k的图形展示异常问题，在此调研eCharts插件，下面将会列举两者的对比以及优缺点，以及建议使用哪个。👇🏻👇🏻👇🏻
          </p>
        </Panel>
        <Panel header="Comparison" key="2">
          there will be a table which is used to show the difference between
          <strong>
            <i> BizCharts </i>
          </strong>
          and
          <strong>
            <i> eCharts </i>
          </strong>
          .
        </Panel>
        <Panel header="TodoList" key="3">
          <strong>list the common charts</strong>
        </Panel>
      </Collapse>
      <Row>
        <ContentCard
          content={
            <Charts1 width="100%" height={'100%'} option={chart1_option} />
          }
          title={'双Y轴-柱状图&折线图 ↓'}
          code={chart1_option}
        />
        <ContentCard
          content={
            <Charts2 width="100%" height="100%" option={chart2_option} />
          }
          title="瀑布流柱形图↓"
          code={'the data of code'}
        />
        <ContentCard
          content={
            <Chart3 width="100%" height={'100%'} option={chart3_option} />
          }
          title={'双Y轴-分组折线图'}
          code={'the data of code'}
        />
        <ContentCard
          content={<Chart4 width="100%" height="100%" option={chart4_option} />}
          title="坐标轴/grid/label/axisTicks/高亮数据 ↓"
          code={'the data of code'}
        />
        <ContentCard
          content={
            <Chart5 width="100%" height={'100%'} option={chart5_option} />
          }
          title={'分组折线图 & 自定义tooltip内容 ↓'}
          code={'the data of code'}
        />
        <ContentCard
          // chart7_option
          content={<Chart7 width="100%" height={'100%'} option={undefined} />}
          title={'柱状图+上下限 ↓'}
          code={'the data of code'}
        />
        <ContentCard
          content={
            <Chart8 width="100%" height={'100%'} option={chart8_option} />
          }
          title={'基础面积图 ↓'}
          code={'the data of code'}
        />
        <ContentCard
          content={
            <Chart6 width="100%" height={'100%'} option={chart6_option} />
          }
          title={'面积堆叠图 ↓'}
          code={'the data of code'}
        />
      </Row>
    </ChartWrapper>
  );
};
