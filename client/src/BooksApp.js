import React, { useState, useEffect } from 'react'
import './App.css';
import SearchForm from './components/SearchForm'
import BookList from './components/BookList'

export default function BooksApp() {
  const [bookSearch, setBookSearch] = useState()
  const [apiResponse, setApiResponse] = useState()

  const handleSearch = event => {
    setBookSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const apiKey ='AIzaSyBiRAp_gwEMeGdVrexvBfEnvJYmBC0iUEk'
    const apiCall = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=20&printType=books&key=${apiKey}`
    
    try {
      const response = await fetch(apiCall)
      const results = await response.json()
      console.log('results', results.items)
      setApiResponse(results.items)
    } catch (err) {
      console.log(err)
    }
    //  await setBookSearch("")
  }
  useEffect(() => {
    console.log('apiresponse', apiResponse)
  })
    
    return (
      <div className="App">
      <SearchForm
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        bookSearch={bookSearch}
      />
      <BookList
      apiResponse={apiResponse} />
    </div>
  );
}
