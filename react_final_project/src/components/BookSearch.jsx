import {useEffect, useState} from 'react'

import "../pages/discover.css";

export default function BookSearch({ books, getReadingList, setReadingList }) {
  const addBookUrl = "https://cdn-icons-png.flaticon.com/128/2780/2780007.png"
    //   const [readingList, setReadingList] = useState([])

return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <p>
            Name: {" "}
            {book.title}
          </p>
          <br />
          <p>
            Author: {" "} 
            {book.author}
          </p>
          <br />
          <p title="click here for more information">
            Description: {" "}
            {book.description.slice(0, 250)}...
          </p>
          <br />
          <img src={book.imgUrl} />
          <br />
          <img
            src={addBookUrl}
            className="bookImg"
            title="add to reading list"
            onClick={() => {
              let temp = [...getReadingList()];
              console.log(temp);
              temp.push(book);
              setReadingList(temp);
              console.log(ReadingList);
            }}
          />
          <hr></hr>
          <hr />
        </div>
      ))}
    </div>
  );
}
