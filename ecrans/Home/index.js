import { View, Text, ScrollView,Image,TextInput } from 'react-native';
import React from 'react';
import dashboardStyles from './style.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  // const [text, onChangeText] = React.useState('Recherche un médecin');
  const [text, setText] = React.useState('');

  const onChangeText = (value) => {
    setText(value);
    // Add your logic for handling the text change here if needed
  };
  return (
    <ScrollView>
      {/* start header */}
     <View style={dashboardStyles.header}>
     <View style={dashboardStyles.imgtext}>
      <Image source={require('./../../assets/pexels-pixabay-220453.jpg')} style={dashboardStyles.userImg}/>
        <View>
           <Text style={dashboardStyles.userwelcome}>Bonjour, Bienvenue </Text>
           <Text style={dashboardStyles.userName}>XXXXXXXXX</Text>
        </View>
      </View> 
      <View style={dashboardStyles.inputContainer}>
      <MaterialCommunityIcons name="clipboard-search-outline" color="white" size={23} style={dashboardStyles.iconsearch} />
        <TextInput
        style={dashboardStyles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Rechercher un médecin"
        placeholderTextColor="white"
      />
      </View>
     </View>

    {/* end header */}
    </ScrollView>
  )
}

export default Home;