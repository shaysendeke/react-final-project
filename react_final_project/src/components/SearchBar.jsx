import { Axios } from "axios"
import { useState, useEffect } from "react"
import { apiKey } from "../logic/api"
import axios from "axios"
import BookSearch from "./BookSearch"
// import {useNavigate, useHistory} from 'react-router-dom';


export default function SearchBar({getReadingList, setReadingList, showSelectedBook }) {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const options = {
        method: 'GET',
        url: 'https://bookshelves.p.rapidapi.com/books',
        headers: {
          'x-rapidapi-host': 'bookshelves.p.rapidapi.com',
          'x-rapidapi-key': 'd85d1708e8msh524155d19f0af7ep130119jsnfc5c1006f1ee'
        }
      };
    useEffect(() => {
        // const API_URL = `https://bookshelves.p.rapidapi.com/books=${apiKey}`
        axios
            .request(options)
            .then(res => {
                const books = res.data.Books
                setBooks(books)
            })
            .catch(error => 
                {
                console.log(error)
                })
    }, [])

    const filteredBooks = search.length === 0 ? books : 
    books.filter(book => book.description.
    toLowerCase().includes(search.toLowerCase()))
    console.log(filteredBooks);

    return (
        <div>
            <h3>BOOKS LIST</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <BookSearch books={filteredBooks} getReadingList={getReadingList} setReadingList={setReadingList} showSelectedBook={showSelectedBook} />
        </div>
    )
}