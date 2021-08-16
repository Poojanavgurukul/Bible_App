import React, { useEffect, useState, createContext } from "react";
export const BibleContext = createContext();
export default function BibleContextProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://stagingapi.autographamt.com/v1/bibles/12/books/gen/chapter/1"
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, ["https://stagingapi.autographamt.com/v1/bibles/12/books/gen/chapter/1"]);
  return (
    <BibleContext.Provider value={{ data }}>{children}</BibleContext.Provider>
  );
}
