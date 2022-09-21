import { CHART_GRID } from '@/constants';
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
        type: 'shadow',
      },
      formatter: function (params: any) {
        let tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    legend: {
      data: ['支出', '收入'],
      bottom: 10,
    },
    xAxis: {
      type: 'category',
      data: (function () {
        let list = [];
        for (let i = 1; i <= 11; i++) {
          list.push('Nov ' + i);
        }
        return list;
      })(),
    },
    yAxis: {
      type: 'value',
    },
    grid: CHART_GRID,
    series: [
      // 透明柱子，占位置
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent',
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
      },
      //
      {
        name: '收入',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
      },
      {
        name: '支出',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'bottom',
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
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
