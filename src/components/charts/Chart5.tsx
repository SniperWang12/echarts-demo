/**
 * @Author Bin_wang
 */
import ReactECharts from 'echarts-for-react';
interface IProps {
  width: string;
  height: string;
  option: any;
}
export default (props: IProps) => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: { color: '#999' },
        snap: true,
        label: {
          formatter: '自定义tooltip {value}单位',
        },
      },
    },
    legend: {
      data: ['邮件', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      bottom: 10,
    },
    grid: {
      containLabel: true,
      top: '12%',
      left: '10',
      right: '10',
      bottom: '15%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
      data: [
        {
          value: 'Mon',
          // 突出周一
          textStyle: {
            fontSize: 20,
            color: 'red',
          },
        },
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '邮件',
        type: 'line',
        tooltip: {
          valueFormatter: (val: number) => {
            return val.toFixed(2);
          },
        },
        // color: 'red',
        // stack: 'Total', // 此属性用来定义是否是堆叠图
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        // stack: 'Total', // 此属性用来定义是否是堆叠图
        data: [220, 182, 191, 234, 290, 330, 310],
        tooltip: {
          valueFormatter: (val: number) => {
            return val.toFixed(2);
          },
        },
      },
      {
        name: 'Video Ads',
        type: 'line',
        // stack: 'Total', // 此属性用来定义是否是堆叠图
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        // stack: 'Total', // 此属性用来定义是否是堆叠图
        data: [320, 332, 301, 334, 390, 330, 320],
        tooltip: {
          valueFormatter: (val: number) => {
            return val.toFixed(2);
          },
        },
      },
      {
        name: 'Search Engine',
        type: 'line',
        // stack: 'Total', // 此属性用来定义是否是堆叠图
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        tooltip: {
          valueFormatter: (val: number) => {
            return val.toFixed(2);
          },
        },
      },
    ],
  };
  return (
    <ReactECharts
      style={{
        width: props.width,
        height: props.height,
        minHeight: '300px',
      }}
      option={props.option || option}
    />
  );
};
