import { useRequest, useUpdateEffect } from 'ahooks';
import { Button } from 'antd';
import { observer, useLocalStore } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Wrapper } from './style';

export default observer(() => {
  const store = useLocalStore(() => ({
    left: 0,
    setLeft(e: number) {
      this.left = e;
    },
    canMove: false,
    setCanMove(e: boolean) {
      this.canMove = e;
    },
    circleInitLeft: 0,
    setCircleInitLeft(e: number) {
      this.circleInitLeft = e;
    },
    lineWidth: 0,
    setLineWidth(e: number) {
      this.lineWidth = e;
    },
    currPercent: 0,
    setCurrPercent(e: number) {
      if (e > 1) {
        e = 1;
      }
      if (e < 0) {
        e = 0;
      }
      this.currPercent = e;
    },
    isShowHoverPointer: false,
    setIsShowHoverPointer(e: boolean) {
      this.isShowHoverPointer = e;
    },
    cursorPointerPercent: 0,
    setCursorPointerPercent(e: number) {
      this.cursorPointerPercent = e;
    },
    cursorPointerLeft: 0,
    setCursorPointerLeft(e: number) {
      this.cursorPointerLeft = e;
    },
  }));

  /**
   * 鼠标点下去
   */
  const mouseDown = () => {
    store.setCanMove(true);
  };
  /**
   * 鼠标松开
   */
  const mouseUp = () => {
    if (store.canMove) {
      store.setCanMove(false);
    }
  };
  const mouseMove = (e: any) => {
    if (store.canMove) {
      var mouseMoveX = e.pageX - store.circleInitLeft;
      handleCircleMove(mouseMoveX);
    }
  };

  const handleCircleMove = (mouseMoveX: number) => {
    let tempData = 0;
    if (mouseMoveX > store.lineWidth) {
      tempData = store.lineWidth;
    } else if (mouseMoveX < 0) {
      tempData = 0;
    } else {
      tempData = mouseMoveX;
    }
    store.setCurrPercent(tempData / store.lineWidth);
  };

  const handleClickLine = (e: any) => {
    var mouseMoveX = e.pageX - store.circleInitLeft;
    handleCircleMove(mouseMoveX);
  };
  useEffect(() => {
    document.body.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseup', mouseUp);
    let tempVal = document.getElementById('line')!.getBoundingClientRect();
    store.setCircleInitLeft(tempVal.left);
    store.setLineWidth(tempVal.width - 10);
  }, []);

  useUpdateEffect(() => {
    store.left = store.currPercent * store.lineWidth;
  }, [store.currPercent]);

  let valid: boolean = true;
  /**
   * 鼠标浮动在line-outer上的处理事件。
   * @param e
   * @returns
   */
  const lineHover = (e: any) => {
    if (!valid) {
      //休息时间 暂不接客
      return false;
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false;
    setTimeout(() => {
      store.setIsShowHoverPointer(true);
      var mouseMoveX = e.pageX - store.circleInitLeft;
      let tempPercent = mouseMoveX / store.lineWidth;
      let percent = tempPercent > 1 ? 1 : tempPercent < 0 ? 0 : tempPercent;
      store.setCursorPointerPercent(percent);
      store.setCursorPointerLeft(percent * store.lineWidth);
      valid = true;
    }, 30);
  };

  /**
   * 前进事件
   */
  const handleForward = () => {
    store.setCurrPercent(store.currPercent + 0.01);
  };
  /**
   * 后退事件
   */
  const handleGoBack = () => {
    store.setCurrPercent(store.currPercent - 0.01);
  };

  return (
    <Wrapper left={store.left} cursorPointerLeft={store.cursorPointerLeft}>
      <div className="operator-outer">
        <Button type="primary" onClick={handleGoBack}>
          退后
        </Button>
        <Button type="primary" onClick={handleForward}>
          前进
        </Button>
        百分比：
        {(store.currPercent * 100).toFixed(2) + '%'}
      </div>
      <div
        className="outer"
        onClick={handleClickLine}
        onMouseMove={lineHover}
        onMouseLeave={() => {
          setTimeout(() => {
            store.setIsShowHoverPointer(false);
          }, 100);
        }}
      >
        <div className="line" id="line">
          <div id="asd" className="curr-circle" onMouseDown={mouseDown}></div>
          {store.isShowHoverPointer && (
            <div className="hover-pointer">
              {(store.cursorPointerPercent * 100).toFixed(2)}%
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
});

const debounce = (fn: Function, wait: number) => {
  let timeout: any = null;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
};
