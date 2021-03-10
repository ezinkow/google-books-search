import React, { useState, useEffect } from 'react'
import './App.css';
import SearchForm from './components/SearchForm'
import BookList from './components/BookList'
import SavedBooks from './components/SavedBooks'
import axios from 'axios'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function BooksApp() {
  const [bookSearch, setBookSearch] = useState()
  const [apiResponse, setApiResponse] = useState()
  const [books, setBooks] = useState([])

  const handleSearch = event => {
    setBookSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const apiKey = 'AIzaSyBiRAp_gwEMeGdVrexvBfEnvJYmBC0iUEk'
    const apiCall = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=20&printType=books&key=${apiKey}`

    try {
      const response = await fetch(apiCall)
      const results = await response.json()
      console.log('results', results.items)
      setApiResponse(results.items)
    } catch (err) {
      console.log(err)
    }
     setBookSearch("")
  }
  useEffect(() => {
    console.log('apiresponse', apiResponse)
  })


  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios('/api/books')
        console.log('response', response.data)
        setBooks(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchBooks()
  }, [])
  // console.log('booksss', books)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/savedbooks">
            <Header />
            <SavedBooks
              books={books} />
          </Route>
          <Route path="/">
            <Header />
            <SearchForm
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              bookSearch={bookSearch}
            />
            <BookList
              apiResponse={apiResponse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
