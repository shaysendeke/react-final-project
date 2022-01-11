import {useEffect, useState} from 'react'
import axios from 'axios'
import './discover.css'

export default function Discover({setReadingList, setAllBooks,getReadingList}) {
    

    
    const [books, setBooks] = useState([])
    // const [readingList, setReadingList] = useState([])
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
        let data = response.data
        console.log(response);
        setBooks(response.data.Books)
        setAllBooks(response.data.Books)
        console.log(response.data.Books);
    }).catch(function (error) {
        console.error(error);
    });
    }
    // const url = 
    // axios.get()
    const addBookUrl = "https://cdn-icons-png.flaticon.com/128/2780/2780007.png"
   const elements =  books.map((book, id)=> 
    <div   key={id}>
    <p >Author: {book.author} </p>
    <p>Title: "{book.title}"</p>
    <p >Description:</p>
    <p>"{book.description}"</p>
    <img src={book.imgUrl}/><br/>
    <img src={addBookUrl} className='bookImg'
    title="add to reading list"
    onClick={()=>{
        let temp = [...getReadingList()]
        console.log(temp);
        temp.push(book)
        setReadingList(temp)}}
        />
    <hr></hr>
    </div>)
    
    return (
        <div>
        <div>
        <h1>* THE OFFICIAL BIBLIOTECH * </h1>
        <hr></hr>
        </div>
        <div className='books'>
            {elements}
            {/* <img src={addBookUrl}></img> */}
        </div>
        </div>
    )
}
