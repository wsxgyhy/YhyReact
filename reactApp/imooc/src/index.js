import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter, 
    Route, 
    Redirect,
    Switch
} from 'react-router-dom'
import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute';

const store = createStore(reducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():()=>{}
    )
)
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" exact component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>)
     ,document.getElementById('root')
)


