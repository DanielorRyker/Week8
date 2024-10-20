import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function FirstScreen({ navigation }) {
  const data = [
    { email: "ngotandat1@gmail.com", password: "123" },
    { email: "ngotandat2@gmail.com", password: "123" },
    { email: "ngotandat3@gmail.com", password: "123" },
    { email: "ngotandat4@gmail.com", password: "123" },
    { email: "ngotandat5@gmail.com", password: "123" },
  ];
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dangnhap = () => {
    if (data.find((user) => user.email === emailValue && user.password === passwordValue))
      navigation.navigate("Second Screen");
    else
      alert("Email or password is incorrect");
  }
  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.column_center_flex]}>
      <Image source={require('../assets/images/logo.png')} />
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Hello Again!</Text>
      <Text style={{ fontSize: 16, color: 'grey' }}>Log into your account</Text>
      <View style={{ width: '100%', alignItems: 'center', gap: 10, marginTop: 40 }}>
        <View style={[styles.row_center_flex, styles.input_card]}>
          <Image source={require('../assets/images/mail.png')} width={20} height={20} />
          <TextInput
            placeholder="Enter your email"
            style={styles.text_input}
            onChangeText={(value) => setEmailValue(value)}
          />
        </View>
        <View style={[styles.row_center_flex, styles.input_card]}>
          <Image source={require('../assets/images/lock.png')} width={20} height={20} />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            style={styles.text_input}
            onChangeText={(value) => setPasswordValue(value)}
          />
          <Image source={require('../assets/images/eye.png')} />
        </View>
      </View>
      <View style={[styles.row_right_flex, { width: "80%" }]}>
        <Text style={{ color: '#63a5af', textAlign: 'right' }}>Forgot password?</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.input_card,
          { color: 'white', backgroundColor: '#00bdd6' },
          styles.row_center_flex,
        ]}
        onPress={() => dangnhap()}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
      <View style={styles.row_center_flex}>
        <View style={{ width: 130, height: 1, backgroundColor: 'grey', marginRight: 5 }} />
        <Text>or</Text>
        <View style={{ width: 130, height: 1, backgroundColor: 'grey', marginLeft: 5 }} />
      </View>
      <View style={styles.row_center_flex}>
        <TouchableOpacity onPress={() => navigation.navigate('Second Screen')} style={{ marginRight: 10 }}>
          <Image source={require('../assets/images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Second Screen')}>
          <Image source={require('../assets/images/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Second Screen')} style={{ marginLeft: 10 }}>
          <Image source={require('../assets/images/apple.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input_card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    gap: 5,
    width: '80%',
    borderColor: 'grey',
  },
  text_input: {
    width: '100%',
    borderWidth: 0,
    padding: 5,
    fontSize: 16,
    color: 'grey',
  },
  container: {
    backgroundColor: 'white',
    width: '95%',
    gap: 10,
    height: '100vh',
  },
  row_center_flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  row_left_flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row_right_flex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row_space_between_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column_center_flex: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});