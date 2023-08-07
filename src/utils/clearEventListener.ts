const asd = ([]) => {
  let asd = getEventListeners(window);
  console.log(asd);
  for (let i in asd) {
    if (asd[i].length > 0) {
      asd[i].map((item) => {
        window.removeEventListener(item.type, item.listener, true);
        window.removeEventListener(item.type, item.listener, false);
      });
    }
  }
  console.log(getEventListeners(window));
};
