/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import CustomHeader from '../components/Header';

export default function CompaniesPage({ navigation }) {
  const companies = [
    {
      name: 'Altice',
      companyLogo: 'https://www.rcrwireless.com/wp-content/uploads/2018/01/Altice_Logo.jpg',
    },
    {
      name: 'Claro',
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/LogoClaro2017.png',
    },
    {
      name: 'Viva',
      companyLogo: 'https://viva.com.do/wp-content/themes/viva/img/logo-base.png',
    },
  ];

  return (
    <View>
      <CustomHeader navigation={navigation} />
      {
          companies.map((company) => (
            <ListItem
              key={company.name}
              leftAvatar={{ source: { uri: company.companyLogo } }}
              title={company.name}
              subtitle={company.name}
              bottomDivider
            />
          ))
      }

    </View>
  );
}
