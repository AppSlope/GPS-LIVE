import React from 'react'

import createStore from './store'
import AppContainer from './AppContainer'

export class Root extends React.Component {
    renderApp(){
        const initialState = window.__INITIAL_STATE__
        const store = createStore(initialState)
        return(
            <AppContainer store={store}/>
        )
    }

    render(){
        return this.renderApp()
    }
}

export default Root