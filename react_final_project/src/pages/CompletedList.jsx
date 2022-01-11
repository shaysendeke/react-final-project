import { React, useEffect } from "react";
import StarRating from "../components/Stars";

export default function CompletedList({
  readingList,
  AllBooks,
  completedList,
  removeFromCompletedlist,
  
}) 


{
  const removeUrl = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
  const elements = completedList.map((book, id) => (
    <div key={id}>
      <p>Author: {book.author}</p>
      <p>Title: "{book.title}"</p>
      <p>Description:</p>
      <p>"{book.description}"</p>
      <img src={book.imgUrl} />
      <br/>
      <img
        src={removeUrl}
        title="Remove from List"
        className="readingList"
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
