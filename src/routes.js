import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import BookUpdate from './pages/BookUpdate'
import BookCreate from './pages/BookCreate'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/books" component={BooksList}/>
            <Route path="/update" component={BookUpdate} />
            <Route path="/create" component={BookCreate} />
        </BrowserRouter>
    )
}

export default Routes;