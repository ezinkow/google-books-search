import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function SavedBooks() {
    const [books, setBooks] = useState()

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios('/api/books')
                console.log('response', response)
            } catch (e) {
                console.log(e)
            }
        }
        fetchBooks()
    }, [])

    return (<p>test</p>)
}
