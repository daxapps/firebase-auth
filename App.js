import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCqVyvLfGBkWZSzuXJ2DiywVoXYjySiPP4",
      authDomain: "one-time-password-10b1e.firebaseapp.com",
      databaseURL: "https://one-time-password-10b1e.firebaseio.com",
      projectId: "one-time-password-10b1e",
      storageBucket: "one-time-password-10b1e.appspot.com",
      messagingSenderId: "718516661008"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
