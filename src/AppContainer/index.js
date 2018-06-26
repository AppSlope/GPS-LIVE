import React from 'react'
import PropTypes from 'prop-types'
import {Router} from 'react-native-router-flux'
import {Text} from 'react-native'

// TODO: scence or navigation
import {Provider} from 'react-redux'

class AppContainer extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render(){
        return(
            <Provider store = {this.props.store} >
                <Text> Hello AppContainer PP </Text>
            </Provider>
        )
    }
}

export default AppContainer