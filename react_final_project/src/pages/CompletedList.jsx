import { React, useEffect } from "react";
import StarRating from "../components/Stars";
import "./completedList.css";

export default function CompletedList({
  readingList,
  AllBooks,
  completedList,
  removeFromCompletedlist,
  updateCompletedBook

}) 
{
  function onNoteChange(event, id){
  updateCompletedBook(event.target.value, id)
  }
  const removeUrl = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
  const elements = completedList.map((book, id) => (
    <div key={id}>
      <p>Author: {book.author}</p>
      <p>Title: "{book.title}"</p>
      <p>Description:</p>
      <p>"{book.description}"</p>
      <img src={book.imgUrl} />
      <br/>
      <div>
        {book.notes}
      </div>
      <textarea onChange={()=>onNoteChange(event, id)} value={book.notes} rows="25" cols="50"></textarea><br />
      <img
        src={removeUrl}
        title="Remove from List"
        className="readingList  icon-elements"
        onClick={()=>
          removeFromCompletedlist(id)
        }
        
      />
            <StarRating/>

      <hr></hr>
    </div>
  ));

  return (
    <div>
      <br></br>
      These are the Book You've Finished Reading:<hr></hr>
      {elements}
    </div>
  );
}
