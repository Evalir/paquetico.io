/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { AuthContext } from '../contexts/AuthContext';
import { StackActions, NavigationActions } from 'react-navigation';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export default function LoginPage({ navigation }) {
  const { setValues } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit() {
    setValues(user, pass);
    navigation.push('Drawer');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Text h1>Login</Text>
      <Input
        placeholder="Nombre de Usuario"
        value={user}
        onChangeText={text => setUser(text)}
      />
      <Input
        placeholder="Contraseña"
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <Button
        title="Ingresar"
        buttonStyle={{ width: '100%', marginTop: 16, marginBottom: 16 }}
        onPress={handleSubmit}
      />
      <Button
        title="Registrarse"
        type="clear"
        onPress={() => navigation.push('Register')}
      />
    </Container>
  );
}
