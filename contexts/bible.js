import React, { useEffect, useState, createContext } from "react";
export const BibleContext = createContext();
export default function BibleContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [bookCode, setBookCode] = useState(null);
  useEffect(() => {
    console.log(
      `https://stagingapi.autographamt.com/v1/bibles/4/books/${bookCode}/chapter/1`
    );
    fetch(
      `https://stagingapi.autographamt.com/v1/bibles/4/books/${bookCode}/chapter/1`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, [
    "https://stagingapi.autographamt.com/v1/bibles/4/books/gen/chapter/1",
    bookCode,
  ]);
  return (
    <BibleContext.Provider value={{ data, bookCode, setBookCode }}>
      {children}
    </BibleContext.Provider>
  );
}
