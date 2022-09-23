const chart1_option = {
  // 鼠标浮动数据弹窗展示区域
  tooltip: {
    trigger: 'axis', // https://echarts.apache.org/zh/option.html#tooltip.trigger 设置弹窗展示的内容类似于shared
    // 自定义设置tooltip
    formatter(params) {
      const imagePath = '/images/slash_AllPower.png';
      let val0 = params[0]['value'];
      let val1 = params[1]['value'];
      let val2 = params[2]['value'];
      let circle = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background:`;
      // 针对图表中的纹理图片设置相应的tooltip
      let circleTexture = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-image:`;
      let data0 =
        circleTexture +
        `url('${imagePath}')"></span> ${params[0]['seriesName']}: ${val1}ml`;
      let data1 =
        circle +
        `rgba(67, 113, 251, 1)"></span> ${params[1]['seriesName']}: ${val1}ml`;
      let data2 =
        circle + `rgba(0,0,0,1)"></span> ${params[2]['seriesName']}: ${val2}°C`;
      return `${params[0].axisValueLabel}<br/>${data0}<br/>${data1}<br/>${data2}`;
    },
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
  grid: {
    containLabel: true,
    top: '12%',
    left: '10',
    right: '10',
    bottom: '15%',
  },
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
          image: (new Image().src =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAApBJREFUOE+dlEtPE1EYht+xLYXoQhNNjAq1QFuqYEDx8iPcuDBC4pVEIpqIl0SJmIC3AEYTEE2MrjSu0JWXlbpD4qWUgkKl11CkDQVs6cWhUhi/QXuYKR1qOKvJm5kvZ85z3ofrtLmEKmM+2m0upJaa49C8z4ymj3bMCQLLz5YX4blzDIH4DMuqjFtg/xlF/+T0QsYF4rxwv9/DXshVrUJDpQnNn+wsEx8u7jTgqd2HCT7B8sMlBeibCGNwKsIyrrFnkG1hjUaNcxXFuPn5u2zY5UojHn31IpSYZfmJbTr0BKYwHIqxbL9+I9jAtVoNTpXp0WpxyIY17jahw+ZGbDbJ8pOlW/F+dAKe6TjLDhRtgj/O/x24Pi8Hx8w63LU6ZcOa9prRZhnGzNw8y+t2FOKNNwBflGfZQcPmheG9wTC4TptbOEQH2yGBovoH5RqdY3JeDuUFQfFLoFSb8hfOcCAFxR/jhQcDi1C0BOUK/aZIWLouEJRnBCUogXLUXADLeAhDRDm1ZFBWa1Q4X2FYAuXSLiMef5NDqdmuQ/fYFBzhFUC5R1CiEii1pXq89Y3DG/mlACU3B8fpGtzJAOV2rwN8co59eIagvPQEMBpThLK0KSko1wnKrARKfXkxupw/ZE0RoQwRFMWmKEERm/LEPoJJ/jfbbXYoahVEmjfSmtJATXlITQlLmlJDR9TtzwKlrqwQLXSRpevqnhK097lkTRGhvPMF4YkoNUUBimicli/DSEiaIkJ5tXxT/l9f9aSvrjR9VVPLxIu9Qn2NkL4WoRwhfVmDIQwqNUXUl7iLW/Sb0qWkrw/LQVlH+qolfbWl6SsTlKz62pCnhXin0vXVTPpqTdPXaYLyOgMUN+nLSvr6AxhntVxPxq6mAAAAAElFTkSuQmCC'),
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
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      showSymbol: false,
      animationEasing: 'quadraticInOut',
    },
  ],
};
const chart2_option = {
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
  grid: {
    containLabel: true,
    top: '12%',
    left: '10',
    right: '10',
    bottom: '15%',
  },
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
const chart3_option = {
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
const chart4_option = {
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
const chart5_option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: { color: '#999' },
      snap: true,
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisPointer: {},
  },
  yAxis: {
    type: 'value',
    tooltip: {
      valueFormatter: (value: number) => '个数：' + value.toFixed(2),
    },
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
const chart6_option = {
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
      boundaryGap: false,
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
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

const chart7_option = {};
const chart8_option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  grid: {
    containLabel: true,
    top: '12%',
    left: '10',
    right: '10',
    bottom: '15%',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {
        color: 'red',
      },
      lineStyle: {
        color: 'rgba(1,1,1,0)',
      },
    },
  ],
};
export {
  chart1_option,
  chart2_option,
  chart3_option,
  chart4_option,
  chart5_option,
  chart6_option,
  chart7_option,
  chart8_option,
};
