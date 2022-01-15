import {React, useState} from 'react'

export default function FullBook({selectedBook}) {
    const [books, setBooks] = useState([])
    return (
        <div key={selectedBook.id}>
          <p>
            Name: {" "}
            {selectedBook.title}
          </p>
          <br />
          <p>
            Author: {" "} 
            {selectedBook.author}
          </p>
          <br />
          <p title="click here for more information">
            Description: {" "}
            {selectedBook.description}
          </p>
          <br />
          <img src={selectedBook.imgUrl} />
          <br />

        </div>
    )
}
