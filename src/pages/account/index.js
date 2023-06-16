import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  
  const handleLoginLagi = () => {
    // Lakukan navigasi ke halaman lupa password di sini
  };
  
  const handleLogin = () => {
    // Lakukan validasi login di sini (misalnya: panggil API)
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    // Lakukan validasi register di sini (misalnya: panggil API)
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmPassword);
    setCurrentPage('login');
  };

  const handleForgetPassword = () => {
    setCurrentPage('forgotPassword');
  };
  
  const handleConfirmPasswordReset = () => {
    // Lakukan logika untuk mengirim email pengaturan ulang kata sandi
    console.log('Email:', email);
    setCurrentPage('login');
  };
  
  const handleRegisterLagi = () => {
    // Lakukan navigasi ke halaman lupa password di sini
  };
  
  const handleForgotLagi = () => {
    // Lakukan navigasi ke halaman lupa password di sini
  };
  
  const handleToggleView = () => {
    if (currentPage === 'login'){
      setCurrentPage('register');
    } else {
      setCurrentPage('login');
    }
  };

  if (currentPage === 'home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.subtitle}>Makanan</Text>
        {/* Tampilkan daftar makanan */}
        <Text style={styles.subtitle}>Minuman</Text>
        {/* Tampilkan daftar minuman */}
      </View>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/37b2/d0c8/3c4b4694d35a98c08b5d3b3b5276e7ad?Expires=1687132800&Signature=a4arm6GJlw1lboeNQubhE3PgA7ONHQfb8SHXf70aRMHqE3cOd~lIaGsKxlbHQ4JFht~FOmX4ezN7c1NEK3GvXTl1RfPrigenEvmXMfaIsusVdCBrici2XoJKeNIyvujFFj-jYnSE6tXZWjwf1Lgk7cFnCRlhOhvvw0piD8uLEbUS9PFEsORW9E7zUd4kJZE8VRtQP8DUNZnU1y23b82zcy1kq8EkUcNpZscHuC25pELI8BjWeUiCvN1n3J5GRjBHogjUP8z2jeAYK~z6EESAPaWQmDqkADLRMgIQZHHw5uiHeKVDuu8zwZl45z6zoZljFbNRuPt3CkQJBIZU0UTc4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
          style={styles.logo}
        />
        {currentPage === 'login' && (
          <View>
            <TouchableOpacity onPress={handleLoginLagi}>
              <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity onPress={handleForgetPassword}>
              <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText}>Register Here!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleToggleView}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {currentPage === 'register' && (
          <View>
            <TouchableOpacity onPress={handleRegisterLagi}>
              <Text style={styles.RegisterText}>Register</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              secureTextEntry
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleView}>
            </TouchableOpacity>
          </View>
        )}
        
         {currentPage === 'forgotPassword' && (
          <View>
            <TouchableOpacity onPress={handleLoginLagi}>
              <Text style={styles.ForgotText}>Forgot Password</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TouchableOpacity style={styles.button} onPress={handleConfirmPasswordReset}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleView}>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  }
}



export default Account

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  input: {
    height: 40,
    borderColor: '#887E7E',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgetPasswordText: {
    height: 35,
    textAlign: 'right',
  },
  LoginText: {
    height: 35,
    textAlign: 'left',
  },
  RegisterText: {
    height: 35,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#C51313',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerText: {
    height: 30,
    textAlign: 'center',
  },
  ForgotText: {
    height: 35,
    textAlign: 'left',
  },
  logo: {
    width: 400,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})