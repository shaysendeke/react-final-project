import { Axios } from "axios"
import { useState } from "react"
import { apiKey } from "../logic/api"
import axios from "axios"

export default function SearchBar() {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const API_URL = `https://bookshelves.p.rapidapi.com/books=${apiKey}`
        axios
            .get(API_URL)
            .then(res => {
                const contacts = res.data
                setContacts(contacts)
            })
    }, [])

    const filteredContacts = search.length === 0 ? contacts : 
    contacts.filter(contact => contact.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h3>CONTACTS LIST</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <List contacts={filteredContacts}/>
        </div>
    )
}