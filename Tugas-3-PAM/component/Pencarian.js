import React, { useState } from "react";
import { StyleSheet,Text,SafeAreaView,ScrollView,TouchableOpacity,View} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import DataJadwalPenerbangan from "./data";

function HasilScreen({ route, navigation }) {
  const tampil = DataJadwalPenerbangan[2].map((date, index) => {
    if (
      route.params.date == date ||
      route.params.start == DataJadwalPenerbangan[0][index] ||
      route.params.end == DataJadwalPenerbangan[1][index]
    ) {
      return (
        
        <View style={styles.contentbox} key={index}>
          <View style={styles.contentbox1}>
            <Text style={styles.textcontentbox1}>{DataJadwalPenerbangan[0][index]}</Text>
            <View style={styles.iconcontentbox2}>
              <Text>{DataJadwalPenerbangan[4][index]}</Text>
              <Text style={styles.textBold}>{DataJadwalPenerbangan[3][index]}</Text>
            </View>
          </View> 
          <View style={styles.contentbox3}>
            <Text style={styles.textcontentbox1}>-</Text>
          </View>
          <View style={styles.contentbox2}>
            <Text style={styles.textcontentbox1}>{DataJadwalPenerbangan[1][index]}</Text>
            <Text style={styles.textBlue}>{DataJadwalPenerbangan[2][index]}</Text>
          </View>
        </View>
        
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="arrow-left" size={30} style={{ color: "white" }} />
        </TouchableOpacity>
        <Icon
          name="user"
          size={40}
          style={{ marginLeft: "auto", marginTop: -30, color: "white" }}
        />
        <Text style={styles.textHeader}>Hiling.id</Text>
        <Text style={styles.textHeader2}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.textHeader2}>({route.params.date})</Text>
      </View>
      <View style={styles.box2}>
        <SafeAreaView style={{ height: 530 }}>
          <ScrollView>{tampil}</ScrollView>
        </SafeAreaView>
        <Text style={{ textAlign: "center", paddingTop: 20 }}>
          Copyright Wella Amanda | 120140057
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1,
    padding: 20,
  },
  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  textHeader2: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  box2: {
    flex: 5,
  },
  contentbox: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 17,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  contentbox1: {
    flexDirection: "column",
    width: 130,
  },
  contentbox2: {
    flexDirection: "column",
  },
  contentbox3: {
    flexDirection: "column",

    width: 30,
  },
  textcontentbox1: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconcontentbox2: {
    flexDirection: "row",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 10,
    marginTop: 5,
  },
  textBlue: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    color: "blue",
  },
});

export default HasilScreen;
