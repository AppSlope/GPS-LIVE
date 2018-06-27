import React from "react";
import { View, Text } from "react-native";
import { Container } from "native-base";

import MapContainer from "./MapContainer";

class Home extends React.Component {
  render() {
    initialRegion = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    return (
      <Container>
        <View style={{ flex: 1 }}>
          <MapContainer region={initialRegion} />
        </View>
      </Container>
    );
  }
}

export default Home;
