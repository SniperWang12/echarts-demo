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
      axisPointer: { type: 'cross', crossStyle: { color: '#999' } },
    },
    toolbox: {
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ['line', 'bar'] },
        restore: { show: false },
        saveAsImage: { show: false },
      },
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature'],
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        min: 0,
        max: 250,
        axisLabel: { formatter: '{value} ml' },
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        inverse: true,
        axisLabel: { formatter: '{value} °C' },
        nameLocation: 'start',
      },
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'line',
        barGap: 0,
        tooltip: {},
        data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3],
      },
      {
        name: 'Temperature',
        type: 'bar',
        yAxisIndex: 1,
        tooltip: {},
        data: [2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23, 16.5, 12, 6.2],
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
