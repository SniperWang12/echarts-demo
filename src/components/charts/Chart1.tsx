import { CHART_GRID } from '@/constants';
import ReactECharts from 'echarts-for-react';

interface IProps {
  width: string;
  height: string;
  option: any;
}

export const Charts1 = (props: IProps) => {
  // -----------这里定义一个图形img对象，img用来对柱状图样式进行贴图展示----------
  const piePatternSrc =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAApBJREFUOE+dlEtPE1EYht+xLYXoQhNNjAq1QFuqYEDx8iPcuDBC4pVEIpqIl0SJmIC3AEYTEE2MrjSu0JWXlbpD4qWUgkKl11CkDQVs6cWhUhi/QXuYKR1qOKvJm5kvZ85z3ofrtLmEKmM+2m0upJaa49C8z4ymj3bMCQLLz5YX4blzDIH4DMuqjFtg/xlF/+T0QsYF4rxwv9/DXshVrUJDpQnNn+wsEx8u7jTgqd2HCT7B8sMlBeibCGNwKsIyrrFnkG1hjUaNcxXFuPn5u2zY5UojHn31IpSYZfmJbTr0BKYwHIqxbL9+I9jAtVoNTpXp0WpxyIY17jahw+ZGbDbJ8pOlW/F+dAKe6TjLDhRtgj/O/x24Pi8Hx8w63LU6ZcOa9prRZhnGzNw8y+t2FOKNNwBflGfZQcPmheG9wTC4TptbOEQH2yGBovoH5RqdY3JeDuUFQfFLoFSb8hfOcCAFxR/jhQcDi1C0BOUK/aZIWLouEJRnBCUogXLUXADLeAhDRDm1ZFBWa1Q4X2FYAuXSLiMef5NDqdmuQ/fYFBzhFUC5R1CiEii1pXq89Y3DG/mlACU3B8fpGtzJAOV2rwN8co59eIagvPQEMBpThLK0KSko1wnKrARKfXkxupw/ZE0RoQwRFMWmKEERm/LEPoJJ/jfbbXYoahVEmjfSmtJATXlITQlLmlJDR9TtzwKlrqwQLXSRpevqnhK097lkTRGhvPMF4YkoNUUBimicli/DSEiaIkJ5tXxT/l9f9aSvrjR9VVPLxIu9Qn2NkL4WoRwhfVmDIQwqNUXUl7iLW/Sb0qWkrw/LQVlH+qolfbWl6SsTlKz62pCnhXin0vXVTPpqTdPXaYLyOgMUN+nLSvr6AxhntVxPxq6mAAAAAElFTkSuQmCC';
  const piePatternImg = new Image();
  piePatternImg.src = piePatternSrc;
  // ------------------

  const option = {
    // 鼠标浮动数据弹窗展示区域
    tooltip: {
      trigger: 'axis', // https://echarts.apache.org/zh/option.html#tooltip.trigger 设置弹窗展示的内容类似于shared
      //
      axisPointer: {
        type: 'cross', // 展示十字交叉还是什么内容
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: false, readOnly: false }, // 是否展示数据列表
        magicType: { show: false, type: ['line', 'bar'] }, // 是否展示切换不同的展示类型
        restore: { show: false }, // 重置展示操作的内容
        saveAsImage: { show: false }, // 是否展示下载按钮
      },
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature'],
      bottom: 10, // 使用 bottom || top 来决定图例的位置
      // show: true 默认是true，会根据图形的表现形式，甚至在用户改变图形表现形式之后仍然会更新的喔
    },
    grid: CHART_GRID,
    xAxis: [
      {
        type: 'category', //
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        min: 0,
        max: 250,
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        barGap: 0,
        tooltip: {
          valueFormatter: function (value: number) {
            return value + ' ml';
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
        showSymbol: false,
        animationEasing: 'quadraticInOut',
        itemStyle: {
          opacity: 0.7,
          color: {
            image: piePatternImg,
            repeat: 'repeat',
          },
        },
      },
      {
        name: 'Precipitation',
        type: 'bar',
        barGap: 0,
        tooltip: {
          valueFormatter: function (value: number) {
            return value + ' ml';
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
        showSymbol: false,
        animationEasing: 'quadraticInOut',
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: number) {
            return value + ' °C';
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
        showSymbol: false,
        animationEasing: 'quadraticInOut',
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
      theme="dark"
      option={props.option || option}
    />
  );
};
