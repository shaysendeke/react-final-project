import { React, useEffect } from "react";
import "./readingList.css";

export default function ReadingList({ readingList, AllBooks,insertToComplete, removeFromReadingList}) {
  const removeUrl = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
  const completeUrl = "https://cdn-icons-png.flaticon.com/128/54/54795.png";
  const elements = readingList.map((book, id) => (
    <div>
      <p key={id}>
        <p>Author: {book.author}</p>Title: "{book.title}"
      </p>
      <p>Description:</p>
      <p>"{book.description}"</p>
      <img src={book.imgUrl} />
      <br></br>
      <img
        src={completeUrl}
        title="Add to Complete List"
        className="readingList"
        onClick={()=>{
            insertToComplete(id)
        }}
          />
      <img
        src={removeUrl}
        title="Remove from Reading List"
        className="readingList"
        onClick={()=>{
          removeFromReadingList(id)
      }}

      ></img>
      <hr></hr>
    </div>
  ));
  return (
    <div>
      <br></br>
      These Are The Books You Are Currently Reading:<hr></hr>
      {elements}
    </div>
  );
}
