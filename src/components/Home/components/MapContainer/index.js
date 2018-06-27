import React from "react";
import { View } from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

const MapContainer = ({ region }) => {
  return (
    <View>
      <MapView provider={PROVIDER_GOOGLE} region={region} style={styles.map}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    //...StyleSheet.absoluteFillObject
    height: "100%"
  }
};

export default MapContainer;
