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
    grid: [
      {
        containLabel: true,
        top: '12%',
        left: '10',
        right: '10',
        bottom: '15%',
      },
    ],
    xAxis: {
      type: 'category',
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
      name: 'Precipitation',
      min: 0,
      max: 250,
      axisLabel: { formatter: '{value} ml', color: 'red' },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'red',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'green',
        },
      },
      // 间隔区域设置不同的颜色
      splitArea: {
        show: true,
        interval: 1,
        areaStyle: {
          color: ['#15f11d4a', 'rgba(200,200,200,0.8)'],
        },
      },
    },

    series: [
      {
        name: 'Evaporation',
        type: 'line',
        barGap: 0,
        data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.4],
        lineStyle: {
          color: 'green',
        },
        // symbol在这里是用来设置折线图上圆形Point的样式的
        symbol: 'circle',
        symbolSize: 10,
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
