https://www.youtube.com/watch?v=Zo-6_qx8uxg

Debounce executes a function only after a fixed delay once the events stop firing.
  
Use Cases
Search input typing
Auto-save
Form validation
Resize after user stops resizing

function debounce(fn, delay, immediate = false) {
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(this, args);
    }, delay);

    if (callNow) fn.apply(this, args);
  };
}


