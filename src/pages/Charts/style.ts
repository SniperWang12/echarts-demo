import styled from 'styled-components';
const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    width: inherit;
    text-align: center;
  }
  .card {
    margin: 20px 0;
    max-width: 500px;
  }
  .card .card-content {
    min-height: 200px;
    padding: 0;
  }
  .ant-card-body {
    padding: 0 !important;
  }
`;
export { ChartWrapper };
