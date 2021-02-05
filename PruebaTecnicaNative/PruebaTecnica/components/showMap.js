import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
	"pk.eyJ1IjoicGF0cmljaW9wYWxsdWEiLCJhIjoiY2trcTFxcGUwMDl3czJ3bnJwdHp4enZhbSJ9.9Atm5JxG_mMsl-AD_K2-AA"
);
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    width: 100,
    height: 100,
    flex: 1
  },
  map: {
    width:100,
    height: 100,
    flex: 1,
  }
});


//VERSION CON COMPONENTE
/*
export default class ShowMap extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
    MapboxGL.setConnected(true);
	  MapboxGL.setAccessToken("pk.eyJ1IjoicGF0cmljaW9wYWxsdWEiLCJhIjoiY2trcTFxcGUwMDl3czJ3bnJwdHp4enZhbSJ9.9Atm5JxG_mMsl-AD_K2-AA");
  }

  constructor(props) {
    super(props);
    this.state = {
      coordinates:[[-32.9575, -60.639444]],
      showUserLocation: true,
      location:[-32.9575, -60.639444]
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView 
            style={styles.container}
            zoomLevel={14}
            centerCoordinate={this.state.coordinates[0]}
            showUserLocation={true}

          >
            <MapboxGL.Camera
              zoomLevel={16}
              animationMode={"flyTo"}
              centerCoordinate={this.state.location}
            >

              <MapboxGL.UserLocation>

              </MapboxGL.UserLocation>

            </MapboxGL.Camera>
          
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}

*/

//VERSION FUNCIONAL
const ShowMap = () => {


  const [viewPort, setViewport] = useState({
    latitude: -32.9575,
    longitude: -60.639444,
    width: 1000,
    height: 1000,
    zoom: 10
  })



  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView 
          style={styles.map} 
          {...viewPort}
          onViewportChange={newViewport => {
            setViewport({ ...newViewport })
          }} 
          showUserLocation={true}/>
      </View>
    </View>
  );

}

export default ShowMap
