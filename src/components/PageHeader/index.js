import React from 'react'

import logoImg from '../../assets/images/bookio-logo.svg'

import './styles.css'
import { Link } from 'react-router-dom';

function PageHeader(props) {
    return (
        <div>
            <div id="logo-container">
                <Link to="/">
                    <img src={logoImg} alt="Book.io" />
                </Link>
            </div>
            <h2>{props.headerTitle}</h2>
        </div>
    );
}

export default PageHeader;