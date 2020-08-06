import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import api from '../../services/api'

import './styles.css'


function BookCreate() {
    const history = useHistory();

    const [bookImage, setBookImage] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookReleaseDate, setBookReleaseDate] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    function onCreateHandler(e) {
        e.preventDefault();

        api.post("/books", {
            name: bookName,
            author: bookAuthor,
            description: bookDescription,
            releaseDate: bookReleaseDate,
            imageURL: bookName,
        }).then(() => {
            alert('Livro Cadastrado!');
            history.push('/books')
        })
    }

    function onChangeName(value) {
        setBookName(value);
        console.log(bookName)
    }

    function onChangeImage(value) {
        setBookImage(value);
    }

    function onChangeAuthor(value) {
        setBookAuthor(value);
    }

    function onChangeDescription(value) {
        setBookDescription(value);
    }

    function onChangeDate(value) {
        setBookReleaseDate(value);
    }

    return (
        <div id="list">
            <PageHeader headerTitle="Novo Livro" />
            <div id="list-content">
                <form onSubmit={onCreateHandler}> 
                    <Input onChange={(e) => onChangeName(e.target.value)} label="Nome" type="text" name="name" value={bookName} />
                    <Input onChange={(e) => onChangeDate(e.target.value)} label="Data de Lançamento (yyyy-mm-dd)" type="text" name="date" value={bookReleaseDate} />
                    <Input onChange={(e) => onChangeAuthor(e.target.value)} label="Autor" type="textarea" name="author" value={bookAuthor} />
                    <Input onChange={(e) => onChangeDescription(e.target.value)} label="Descrição" type="text" name="description" value={bookDescription} />
                    <Input onChange={(e) => onChangeImage(e.target.value)} label="Imagem" type="text" name="image" value={bookImage} />         
                    <div className="button-container">
                        <button type="submit" className="create-button">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookCreate;