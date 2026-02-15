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


Another Important Example
import { useEffect, useState } from "react";
export default function Debouncing() {
  const mockData = [
    "school",
    "school bag",
    "school tool",
    "laptop",
    "latop lenovo",
    "laptop dell",
    "laptop mac",
    "Watermelon",
  ];
  const [result, setResult] = useState(mockData);
  const [searchText, setSearchText] = useState("");
  const [debouncequery, setDebounceQuery] = useState(searchText);

  //   implement debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(searchText);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  //   to filter data at every key stroke
  useEffect(() => {
    const data = mockData.filter((ele) => {
      return ele.toLowerCase().includes(searchText.toLowerCase());
    });

    setResult(data);
  }, [debouncequery]);

  return (
    <>
      <div>
        <div>Search Box</div>
        <input
          type="text"
          placeholder="Search Here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
          {result.map((ele, key) => {
            return <p key={key}>{ele}</p>;
          })}
        </div>
      </div>
    </>
  );
}



