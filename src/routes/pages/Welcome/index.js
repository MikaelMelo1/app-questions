import React from "react";
import LottieView from "lottie-react-native";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerLogo}>
        {/* <LottieView
          source={require("../assents/animation_2.json")}
          autoPlay
          loop
          style={styles.logo}
        /> */}

        <Animatable.Image
          animation="flipInY"
          source={require("../assents/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Desafie seu conhecimento nas linguagens de programação Python e
          Javascript
        </Text>
        <Text style={styles.text}>
          Abaixo, selecione qual linguagem quer testar seu conhecimento
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signing")}
          >
            <Text style={styles.buttonText}>Javascript</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signing")}
          >
            <Text style={styles.buttonText}>Python</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#38a69d",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  logo: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: -30,
  },
  button: {
    flex: 1,
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
