import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
//=============================================//
import App from './components/App';
import reducers from './reducers'; 



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>, 
    document.querySelector('#root')
)

/*
Providers Component is the top most component
in the component hierarchy and is used to provide 
data from the reducer store to the components wrapped around by the 
connect component
 */

