const workerDemo = () => {
  self.onmessage = (e) => {
    console.log('onmessage', e);
  };
};
export default workerDemo;
