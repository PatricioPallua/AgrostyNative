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
import { logInUser } from "../Redux/actions/userActions";
import Axios from "axios";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Login = ({ navigation }) => {

  const userLog = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const LoginNow = () => {
    if(email === "" || password === ""){
      alert("Datos incompletos")
    } else {
      Axios.post("https://agrostyproject.glitch.me/users/login", {email, password})
        .then((res) => {
          console.log("La response es: ", res.data)
          dispatch(logInUser(res.data));
          navigation.navigate("Profile")
        })
        .catch(err => {
          console.log(err)
          alert("Usuario no valido")
        })
    }
  }

  const check = () => {
    console.log(userLog)
  }

  return (
      <ImageBackground
        style={styles.imageBack}
        source={{uri: "https://i.blogs.es/37ba66/trabajar-en-el-campo/1366_2000.jpg"}}>
        <Text style={styles.titulo} > Prueba React Native </Text>
        <Image  
          style={styles.picture}
          source={{
            uri: "http://www.agrosty.com/img/logo_agro.png"
          }}
        />
        <View style={styles.form}>
        <TextInput 
          onChangeText={(value) => setEmail(value)} 
          placeholder="Ingrese su email..." 
          style={styles.input}
          value={email}
        /> 
        <TextInput 
          secureTextEntry={true} 
          onChangeText={(value) => setPassword(value)} 
          placeholder="Ingrese su password..." 
          style={styles.input}
          value={password}
        /> 
        <TouchableOpacity
          onPress={LoginNow}
          style={styles.boton}> 
          <Text> Login </Text> 
        </TouchableOpacity>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({

  form:{
    padding: 20
  },

  imageBack: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    resizeMode: "cover",
    justifyContent: "center",
  },

  picture: {
    paddingTop: 50,
    width: 300,
    height:150,
    resizeMode: "contain"
  },

  titulo:{
    fontSize: 40
  },

  subtitulo:{
    fontSize: 30,
    color: "white"
  },

  container: {
    flex:1,
    justifyContent: "center",
    backgroundColor: "green",
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "white",
    width: 300,
    margin: 5
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

export default Login;
