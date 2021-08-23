import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();
export default function BookContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [bookNames, setBookNames] = useState([]);
  useEffect(() => {
    fetch("https://stagingapi.autographamt.com/v1/booknames")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        data.map((item) => setBookNames(item.bookNames));
      });
  }, ["https://stagingapi.autographamt.com/v1/booknames"]);
  return (
    <BookContext.Provider value={{ books, bookNames }}>
      {children}
    </BookContext.Provider>
  );
}
