# 纵坐标轴
## 轴名称位置： 
``` javascript
xAxis: {
    name: '个数', // 坐标轴名称 
    nameGap: 40, // 名称与坐标轴的距离
    nameRotate: 0, // 名称旋转
    nameLocation: 'start' | 'center' | 'end' // 名称所在位置
}
```
## 箭头
``` javascript
yAxis:{
    type: 'line',
    axisLine: {
        symbol: ['none' , 'arrow'],
        show: true,
        lineStyle: {
            color: 'red'
        }
    },
    axisTick: {
        alignWithLabel: true
    }
}
```
## 坐标轴反转
> 正常情况下坐标轴是从底部向上数值变大，但是有时候要求反着来 👇🏻
```javascript
"yAxis":[
    {
        ...
        "inverse":true,
        ...
    }
]
```
- 左右两个Y轴使用的不是同一个单位或者不在同一个数量级就可以使用这个
- 左轴对应的是柱状图，右轴对应的是折线图。
## 轴的颜色和样式
``` javascript
yAxis: {
    axisLine: {
        show: true, // 展示轴线
        lineStyle: {
            // type: [solid , dashed, dotted]
            // 
            //  color , width , type , dashOffset , cap , join , miterLimit , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity 
        }
    }
}

```