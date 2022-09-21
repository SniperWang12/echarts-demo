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
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      bottom: 10,
    },
    grid: {
      containLabel: true,
      top: '12%',
      left: '10',
      right: '10',
      bottom: '15%',
    },
    xAxis: [
      {
        type: 'category',
        // boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'max',
        type: 'scatter',
        symbol: 'line',
        symbolSize: [30, 20],
        lineStyle: {
          color: 'red',
        },
        data: [130, 142, 111, 144, 100, 240, 220],
      },
      {
        name: 'min',
        type: 'scatter',
        symbol: 'line',
        symbolSize: 30,
        data: [110, 122, 91, 124, 80, 220, 200],
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
