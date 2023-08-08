import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  padding-top: 400px;
  .outer {
    width: 100%;
    height: 50px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .operator-outer {
    margin-bottom: 20px;
    button {
      margin: 0 10px;
    }
    button:nth-child(1) {
      margin-left: 0;
    }
  }
  .line {
    width: 80%;
    cursor: pointer;
    height: 10px;
    background-color: #c3c3c3;
    border-radius: 10px;
    position: relative;
    .curr-circle {
      position: absolute;
      left: ${(props) => props.left + 'px'};
      top: -5px;
      z-index: 3;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #0078d4;
      cursor: pointer;
    }
    .curr-circle::after {
      content: ' ';
      position: absolute;
      left: ${(props) => -props.left + 'px'};
      border-radius: 10px;
      top: 5px;
      z-index: 3;
      width: ${(props) => props.left + 5 + 'px'};
      height: 10px;
      background-color: #0078d4;
    }
    .hover-pointer {
      min-width: 50px;
      padding: 0 10px;
      border-radius: 10px;
      height: 30px;
      color: #fff;
      background-color: #0078d495;
      text-align: center;
      line-height: 30px;
      position: absolute;
      top: -40px;
      left: ${(props) => props.cursorPointerLeft - 25 + 'px'};
    }
  }
`;
export { Wrapper };
