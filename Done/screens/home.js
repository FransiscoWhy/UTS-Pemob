import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Separator from "../components/separator";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.centerContent}>
      {/* Logo Prodi Informatika */}
      <Image source={require("../assets/prodi.png")} style={styles.logo} />

      <Separator height={15} />

      {/* Foto Avatar */}
      <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />

      <Separator height={15} />

      {/* Biodata Mahasiswa */}
      <View style={styles.biodataContainer}>
        <Text style={styles.biodataText}>Nama: Fransisco Wahyu S</Text>
        <Text style={styles.biodataText}>NIM: 1203210045</Text>
        <Text style={styles.biodataText}>Program Studi: Informatika</Text>
      </View>

      <Separator height={30} />

      <Separator height={30} />

      {/* Functional Component */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("FunctionalComponent")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Functional Component</Text>
        </View>
      </TouchableOpacity>

      <Separator height={30} /> */}

      {/* Class Component */}
      {/* <TouchableOpacity onPress={() => navigation.navigate("ClassComponent")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Class Component</Text>
        </View>
      </TouchableOpacity>

      <Separator height={30} /> */}

      {/* News */}
      <TouchableOpacity onPress={() => navigation.navigate("News")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>List News</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  avatar: {
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  biodataContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  biodataText: {
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1877f2",
    borderRadius: 7,
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
