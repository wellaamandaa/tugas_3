import React, { useState } from "react";
import {StyleSheet,Text,TextInput,Button,SafeAreaView,View,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [start, setAwal] = useState("");
  const [end, setTujuan] = useState("");
  const [date, setTgl] = useState("01 Januari 2020");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20 }} />
        <Icon
          name="user" 
          size={40}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -53,
          }}
        />
        <Text style={styles.headerText}>Hiling.id</Text>
      </View>
      <View style={styles.box2} />
      <View style={styles.boxInput}>
        <SafeAreaView>
          <Text style={styles.textInput}>Lokasi Keberangkatan</Text>
          <View style={styles.border}>
            <FontAwesome5 name="plane-departure" size={25} color="green" style={{marginTop:5}} />
            <TextInput
              placeholder="Masukkan lokasi keberangkatan"
              style={styles.input}
              onChangeText={(val) => setAwal(val)}
            />
          </View>
          <Text style={styles.textInput}>Lokasi Tujuan</Text>
          <View style={styles.border}>
            <FontAwesome5 name="plane-arrival" size={25} color="green" style={{marginTop:5}}/>
            <TextInput
              placeholder="Masukkan Lokasi Tujuan"
              style={styles.input}
              onChangeText={(val) => setTujuan(val)}
            />
          </View>

          <Text style={styles.textInput}>Tanggal Keberangkatan</Text>
          <View style={styles.border}>
            <FontAwesome5 name="calendar-check" size={30} color="green" style={{marginTop:5}} />
            <TextInput
              placeholder="Masukkan Tanggal Keberangkatan"
              style={styles.input}
              onChangeText={(val) => setTgl(val)}
            />
          </View>

        </SafeAreaView>
        <Button
          title="Cari"
          color="#FF7F10"
          onPress={() =>
            navigation.navigate("Hasil Pencarian", {
              start: start,
              end: end,
              date: date,
            })
          }
        />
      </View>
      <Text style={{ textAlign: "center", marginTop: 800,marginLeft:50,position:'absolute'}}>
        Copyright Wella Amanda | 120140057
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "green",
    flex: 1.3,
    marginTop:30,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30,
  },
  box2: {
    backgroundColor: "#fff",
    flex: 1,
  },
  boxInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 50,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  border:{
    display:"flex",
    flexDirection:"row",
    borderWidth:1,
    borderRadius:8,
    marginBottom:30,
    paddingLeft:2,
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom:15,
  },
  input: {
    height: 40,
    marginLeft: 5,
    borderWidth: 1,
    borderColor:"transparent",
    borderRadius: 3,
    padding: 5,
    // marginTop:20,
    // marginBottom: 20,
    display:'flex',
    textAlign:'left',
    width:230,
  },
});

export default HomeScreen;
