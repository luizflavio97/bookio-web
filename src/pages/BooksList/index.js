import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'
import BookListItem from '../../components/BookListItem'

import api from '../../services/api'
import { formatData } from '../../utils/formatData'

import './styles.css'

function BooksList() {
    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState("");

    useEffect(() => {
        api.get('/books').then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
    }, []);

    function handleChangeBookName(value) {
        setBookName(value)
    }

    async function searchBookByName() {
        const response = await api.get('/books', {
            params: {
                name: bookName
            }
        }).catch(() => {
            alert('Nenhum livro coms os parâmetros foi encontrado')
        });

        if (response) {
            const newBooks = []
            newBooks.push(response.data)

            console.log(newBooks)
            setBooks(newBooks)
        }
    }

    return (
        <div id="list">
            <PageHeader headerTitle="Lista de Livros"/>
            <div id="list-content">
                <div id="search">
                    <input onChange={(e) => { handleChangeBookName(e.target.value) }} value={bookName} className="search-input" type="text" placeholder="Digite o nome do livro que você procura" />
                    <button onClick={searchBookByName} className="search-button">
                        Pesquisar
                    </button>
                </div>
                <div>
                <Link to="/create" className="create-button">
                    + Novo
                </Link>
                </div>
                <main>
                    <div className="books-list">
                        {books.map(book => {
                            return <BookListItem id={book.id} imageURL={book.imageURL} name={book.name} author={book.author} description={book.description} releaseDate={formatData(book.releaseDate)} />
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default BooksList;