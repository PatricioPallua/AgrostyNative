import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import configureStore from "./Redux/store/index"
import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";

/*
MapboxGl.setAccessToken(
	"pk.eyJ1IjoicGF0cmljaW9wYWxsdWEiLCJhIjoiY2trcTFxcGUwMDl3czJ3bnJwdHp4enZhbSJ9.9Atm5JxG_mMsl-AD_K2-AA"
);
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);
*/
const Agrosty = () => {
	return (
	<Provider store={configureStore}>
		<App />
	</Provider>
	);
}

AppRegistry.registerComponent(appName, () => Agrosty);
