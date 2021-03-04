export default function SearchForm({handleSearch, handleSubmit, search}){
    return (
      <div>
        <h2>Search a Book or Author</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleSearch} value={search}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }