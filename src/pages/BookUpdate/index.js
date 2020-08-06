import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import api from '../../services/api'

import './styles.css'

function BookUpdate(props) {
    const history = useHistory();

    const [bookImage, setBookImage] = useState(props.location.bookProps.imageURL);
    const [bookName, setBookName] = useState(props.location.bookProps.name);
    const [bookReleaseDate, setBookReleaseDate] = useState(props.location.bookProps.releaseDate);
    const [bookAuthor, setBookAuthor] = useState(props.location.bookProps.author);
    const [bookDescription, setBookDescription] = useState(props.location.bookProps.description);

    const book = props.location.bookProps

    function onUpdateHandler(e) {
        e.preventDefault();

        api.put(`/books/${book.id}`, {
            name: bookName,
            author: bookAuthor,
            description: bookDescription,
            imageURL: bookImage,
            releaseDate: bookReleaseDate
        }).then(() => {
            alert('Livro Atualizado')

            history.push('/books')
        })
    }

    function onChangeName(value) {
        setBookName(value);
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
            <PageHeader headerTitle="Atualizar" />
            <div id="list-content">
                <form onSubmit={onUpdateHandler}> 
                    <Input onChange={(e) => onChangeName(e.target.value)} label="Nome" type="text" name="name" value={bookName} />
                    <Input onChange={(e) => onChangeDate(e.target.value)} label="Data de Lançamento (yyyy-mm-dd)" type="text" name="date" value={bookReleaseDate} />
                    <Input onChange={(e) => onChangeAuthor(e.target.value)} label="Autor" type="textarea" name="author" value={bookAuthor} />
                    <Input onChange={(e) => onChangeDescription(e.target.value)} label="Descrição" type="text" name="description" value={bookDescription} />
                    <Input onChange={(e) => onChangeImage(e.target.value)} label="Imagem" type="text" name="image" value={bookImage} />         
                    <div className="button-container">
                        <button type="submit" className="update-button">
                            Atualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookUpdate;