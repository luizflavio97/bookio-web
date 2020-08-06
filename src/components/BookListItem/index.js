import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
import api from '../../services/api';

function BookListItem(props) {
    function deleteHandler(){
        if (window.confirm("Deseja mesmo deletar este livro?")){
            api.delete(`/books/${props.id}`)
                .then(() => {
                    alert('Livro deletado.');
                    window.location.reload(true);
                });
        } else {
            
        }
    }

    return (
        <article className="list-item">
            <header>
                <img src={props.imageURL} alt={props.name} />
                <div>
                    <strong>{props.name}</strong>
                    <strong className="author">{props.author}</strong>
                    <span>{props.releaseDate}</span>
                </div>
            </header>
            <p>
                {props.description}
            </p>
            <footer>
                <Link to={{
                        pathname:'/update',
                        bookProps: {
                            id: props.id,
                            imageURL: props.imageURL,
                            name: props.name,
                            author: props.author,
                            releaseDate: props.releaseDate,
                            description: props.description
                        }
                    }} className="update-button">
                    Atualizar
                </Link>
                <button onClick={deleteHandler} className="delete-button" type="submit">
                    Deletar
                </button>
            </footer>
        </article>
    );
}

export default BookListItem;