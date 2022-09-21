/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */
import styled from 'styled-components';
const Wrapper = styled.div`
  .page-layout-outer {
    width: 100vw;
    height: 100vh;
  }
  .logo {
    height: 60px;
    color: #fff;
    border-right: 1px dashed #fff;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    img {
      height: 28px;
      margin-right: 10px;
    }
    user-select: none;
  }
  .trigger {
    color: #fff;
    margin-left: 20px;
    font-size: 20px;
  }
`;

export { Wrapper };
