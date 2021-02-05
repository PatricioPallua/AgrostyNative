import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Redux/actions/userActions";
import ShowMap from "../components/showMap"

const Profile = ({ navigation }) => {

  	const userLog = useSelector((state) => state.user.userLog.userLog.user);
  	const dispatch = useDispatch();
	const check = () => {
		console.log(userLog)
	}

	const logOut = () => {
		dispatch(logOutUser())
		navigation.navigate("Login")
	}

	return (
		<View>
{/*			<Text> User PROFILE </Text>
			<Image  
	          style={styles.picture}
	          source={{
	            uri: "http://www.agrosty.com/img/logo_agro.png"
	          }}
	        />
        	<TouchableOpacity
        		style={styles.boton}
	          	onPress={logOut}
	          	>
	          	<Text> EXIT </Text> 
        	</TouchableOpacity>
	       	<TouchableOpacity
	          onPress={check}
	          style={styles.boton}> 
	          <Text> CHECK </Text> 
	        </TouchableOpacity> */}
	        <ShowMap>

	        </ShowMap>
		</View>
	)
}

const styles = StyleSheet.create({
	picture: {
	    paddingTop: 50,
	    width: 300,
	    height:150,
	    resizeMode: "contain"
	},

  	boton: {
    	borderWidth: 1,
    	borderColor: "black",
    	borderRadius: 50,
    	padding: 10,
    	backgroundColor: "red",
    	alignItems: "center"
  	}

})

export default Profile;