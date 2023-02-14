import { useEffect, useState } from 'react';
import styled from 'styled-components';
/**
 * @param radius 圆的半径
 * @param progressNum 进度不是百分比小数;
 * @param color 样式 - 进度条颜色
 */
interface Iprops {
  radius: number;
  progressNum: number;
  color?: {
    progress: string;
    dashed: string;
  };
}
/**
 * 自定义圆环进度条;科技版本
 */
export default (props: Iprops) => {
  const [rotateLeft, setRotateLeft] = useState(-45);
  const [rotateRight, setRotateRight] = useState(-45);
  const [progressNum, setProgressNum] = useState(0);
  useEffect(() => {
    let rotate = (props.progressNum / 100) * 360;
    let tempRotateRight = 0;
    if (rotate < 180) {
      setRotateLeft(-45);
      tempRotateRight = rotate + -45;
      setProgressNum(props.progressNum);
      setTimeout(() => {
        props.progressNum > 0 && setRotateRight(tempRotateRight);
      }, 350);
    } else {
      setRotateRight(135);
      setProgressNum(props.progressNum);
      setTimeout(() => {
        props.progressNum > 0 && setRotateLeft(rotate - 180 - 45);
      }, 350);
    }
  }, [props.progressNum]);

  return (
    <Wrapper
      rotateLeft={rotateLeft}
      rotateRight={rotateRight}
      radius={props.radius}
    >
      <div className="loop-pie flex">
        <div className="loop-pie-line loop-pie-r">
          <div className="loop-pie-c loop-pie-rm" id="loop-rc"></div>
        </div>
        <div className="loop-pie-line loop-pie-l">
          <div className="loop-pie-c loop-pie-lm" id="loop-lc"></div>
        </div>
        <div className="dashline flex">
          <div className="yuan41-outer flex">
            <div className="yuan41"></div>
            <div className="yuan41_chang"></div>
          </div>
        </div>
        <div className="data-outer flex">
          <div className="sanjiaoxing sanjiaoxing_left"></div>
          <div className="data">{progressNum.toFixed(2)}%</div>
          <div className="sanjiaoxing sanjiaoxing_right"></div>
        </div>
      </div>
    </Wrapper>
  );
};
interface IWrapper {
  rotateLeft: number;
  rotateRight: number;
  radius: number;
}

const Wrapper = styled.div<IWrapper>`
  * {
    margin: 0px;
    padding: 0px;
  }
  #loop-lc {
    transform: rotate(
      ${(props: IWrapper) => {
        return props.rotateLeft + 'deg';
      }}
    );
    transition: 0.4s;
    /* transition: 0.3s ease-in, color 1s ease-out; */
  }
  #loop-rc {
    transform: rotate(
      ${(props: IWrapper) => {
        return props.rotateRight + 'deg';
      }}
    );
    transition: 0.4s;
    /* transition: 0.4s ease-in, color 0.5s ease-out; */
  }
  .loop-pie {
    position: relative;
    width: ${(props: IWrapper) => {
      return props.radius + 'px';
    }};
    height: ${(props: IWrapper) => {
      return props.radius + 'px';
    }};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loop-pie-line {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    overflow: hidden;
    border: 0;
  }
  .loop-pie-l {
    top: 0;
    left: 1px;
    transform: rotate(360deg);
  }
  .loop-pie-r {
    top: 0;
    transform: rotate(180deg);
    right: 1px;
  }
  .loop-pie-c {
    width: 200%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    transform: rotate(-45deg);
  }
  .loop-pie-rm {
    border-top: 10px solid #323841;
    border-left: 10px solid #323841;
    border-bottom: 10px solid #b3dbf9;
    border-right: 10px solid #b3dbf9;
  }
  .loop-pie-lm {
    border-top: 10px solid #323841;
    border-left: 10px solid #323841;
    border-bottom: 10px solid #b3dbf9;
    border-right: 10px solid #b3dbf9;
  }
  .jindu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props: IWrapper) => {
      return props.radius + 'px';
    }};
    height: ${(props: IWrapper) => {
      return props.radius + 'px';
    }};
    border-radius: 50%;
    border-top: 20px solid #323841;
    border-left: 20px solid #323841;
    border-bottom: 20px solid #b3dbf9;
    border-right: 20px solid #b3dbf9;
    transform: rotate(-45deg);
  }
  .dashline {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 3px dotted #a8b5c2;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spins 13s linear infinite;
  }
  .yuan41-outer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
    height: 75%;
    animation: spinn 1s linear infinite;
  }
  .yuan41 {
    width: 50%;
    height: 50%;
    border-top: 2px solid #f3330d;
    border-left: 2px solid #f3330d;
    border-top-left-radius: 100%;
    margin-right: 50%;
  }
  .yuan41_chang {
    width: 50%;
    height: 50%;
    margin-left: 50%;
    border-bottom: 2px solid #f3330d;
    border-right: 2px solid #f3330d;
    border-bottom-right-radius: 100%;
  }
  .sanjiaoxing {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid #d4e3f3;
    border-radius: 2px;
  }
  .sanjiaoxing_left {
    transform: rotate(-90deg);
  }
  .sanjiaoxing_right {
    transform: rotate(90deg);
  }
  .data-outer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    text-align: center;
  }
  .data {
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
    /* font-size: 27px; */
  }
  @keyframes spinn {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes spins {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
