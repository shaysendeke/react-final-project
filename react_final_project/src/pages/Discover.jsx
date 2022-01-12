import {useEffect, useState} from 'react'
import axios from 'axios'
import './discover.css'
import SearchBar from '../components/SearchBar'

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
        //   const API_URL = "./books.json"

    axios.request(options)
    .then(function (response) {
        let data = response.data.Books
        console.log(data);
        setBooks(data)
        setAllBooks(data)
        console.log(data);
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
    <p>"{book.description.slice(0, 100)}..."</p>
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
        <SearchBar></SearchBar>
        </div>
        <div className='books'>
            {elements}
            {/* <img src={addBookUrl}></img> */}
        </div>
        </div>
    )
}
