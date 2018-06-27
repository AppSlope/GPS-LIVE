import React from "react";
import PropTypes from "prop-types";

// TODO: scence or navigation
import { Provider } from "react-redux";
import { Router } from "react-native-router-flux";
import scenes from "../components/scene";

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

export default AppContainer;
