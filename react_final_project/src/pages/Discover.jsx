import {useEffect, useState} from 'react'
import axios from 'axios'
import './discover.css'

export default function Discover() {
    const [books, setBooks] = useState([])
    useEffect(getData,[])

    function getData(){

        const options = {
          method: 'GET',
          url: 'https://bookshelves.p.rapidapi.com/books',
          headers: {
            'x-rapidapi-host': 'bookshelves.p.rapidapi.com',
            'x-rapidapi-key': 'd85d1708e8msh524155d19f0af7ep130119jsnfc5c1006f1ee'
          }
        };
        
    axios.request(options)
    .then(function (response) {
        setBooks(response.data.Books)
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    }
    // const url = 
    // axios.get()
   const elements =  books.map((book, id)=> 
    <div><p key={id}>
    <p>Author: {book.author}
    </p>Title: "{book.title}"</p>
    <p>Description:</p>
    <p>"{book.description}"</p>
    <img src={book.imgUrl}/>
    <p></p>
    <hr></hr>
    </div>)
    return (
        <div className='books'>
            <p>{elements}</p>
        </div>
    )
}
