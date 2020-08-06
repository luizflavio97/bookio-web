import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'

import './styles.css'

function Home() {
    return (
        <div id="home">
            <PageHeader headerTitle="Catálogo de Livros"/>
            <div id="home-content">
                <div id="text-content">
                    <p>
                        O Book.io é um catálogo de livros que possui uma vasta quantidade de livros armazenados em seu sistema.
                        Ele tem como objetivo, incentivar pessoas com sede de leitura a procurar mais sobre os livros que desejam
                        ler ou estão lendo. A  a nossa base é constantemente atualizada com os livros mais recentes lançados do mercado
                        e com o melhor que a literatura nacional e internacional tem a oferecer.
                    </p>
                </div>
                <div className="button-container">
                    <Link to="/books" className="button-start">
                        Começar!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home