/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styled from 'styled-components/native';
// import { AuthContext } from '../contexts/AuthContext';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;
const ErrorMessage = styled.Text`
  color: red;
  text-align: center;
`;

export default function LoginPage({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //   const [userExist, setUserExist] = useState(false);

  const handleSubmit = async () => {
    if (confirmPass !== pass) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }
    try {
      const value = await AsyncStorage.getItem(user);
      if (value !== null) {
        setErrorMessage('Este usuario existe');
      } else {
        setErrorMessage('Se ha registrado');
        await AsyncStorage.setItem(user, pass);
        navigation.goBack();
      }
    } catch (error) {
      console.log('error guardando');
    }
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Text h1>Register</Text>
      <Input
        placeholder="Nombre de Usuario"
        value={user}
        onChangeText={text => setUser(text)}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <Input
        placeholder="Confirmar Contraseña"
        secureTextEntry
        value={confirmPass}
        onChangeText={text => setConfirmPass(text)}
      />
      <Button
        title="Registrar"
        buttonStyle={{ width: '100%', marginTop: 16, marginBottom: 16 }}
        onPress={handleSubmit}
      />
      <Button
        title="Iniciar Sesión"
        type="clear"
        onPress={() => navigation.push('Login')}
      />
      {errorMessage ? <ErrorMessage h2>{errorMessage}</ErrorMessage> : null}
    </Container>
  );
}
