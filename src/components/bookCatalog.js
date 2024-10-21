
import React, { useState } from "react";

function BookCatalog({ books: initialBooks }){
    const [selectedCategory, setSelectedCategory] = useState("");
    const [books, setBooks] = useState(initialBooks)
    const [newBook, setNewBook] = useState({
        title: "",
        author: "", 
        category: "",
        description: ""
    })

    const handleChange = (e) => {
        setSelectedCategory(e.target.value)
    }
    const filteredBooks = books.filter(book => 
        selectedCategory === "" || book.category === selectedCategory
    )
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook(prevBook => ({ ...prevBook, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks(prevBooks => [...prevBooks, newBook])
        setNewBook({ title: "", author: "", category: "", description: "" })
    };


    return (
        <div className="books">
            <ul>
                {filteredBooks.map((book, i) => (
                    <li key={i} data-category={book.category}>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Description: {book.description}</p>
                    </li>
                ))}
            </ul>
            <select className="filter" onChange={handleChange}>
                <option value="">All books</option>
                {[...new Set(books.map(book => book.category))].map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={handleInputChange} 
                    required   
                />
                <input 
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={handleInputChange} 
                    required   
                />
                <input 
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newBook.category} 
                    onChange={handleInputChange} 
                    required   
                />
                <textarea 
                    name="description" 
                    placeholder="Description"
                    value={newBook.description} 
                    onChange={handleInputChange} 
                    required 
                />
                <button type="submit">Add Book</button>
            </form>

        </div>
    )
}

export default BookCatalog