import React from "react"
import BookCatalog from "./components/bookCatalog";
import { createRoot } from "react-dom/client"
import data from "../books.json"
import './css.css'

const root =createRoot(document.getElementById('root'))
root.render(<BookCatalog books={data}/>)