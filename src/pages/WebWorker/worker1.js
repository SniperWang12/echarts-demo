'use strict';
self.addEventListener('message', ({ data }) => {
  console.log(data);
  data();
});
