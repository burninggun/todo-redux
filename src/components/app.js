import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import List from './list'
import AddForm from './addForm'
import { Route } from 'react-router-dom'
import ItemView from './itemView'

const App = () => (
    <div className="container">
        {/* <AddForm/> */}
        <h1 className="text-center">to do list</h1>
        <Route exact path='/' component={List}/>
        <Route path='/add-item' component={AddForm}/>
        <Route path="/item/:id" component={ItemView} />
    </div>
);

export default App;
