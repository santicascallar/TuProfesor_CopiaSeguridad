import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
//import { useNavigation } from "@react-navigation/native";

const CustomLogo = (props) => {
    const { onPress } = props;
    return (
        <View style = {styles.container}>
            <Pressable onPress={onPress}>
            <Image 
                style = {styles.logo}
                source={require("../src/imgs/logo3.png")}
            />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
      width: 105,
      height: 125,
      marginTop: 30,
      marginBottom: 20,
    },
  });

export default CustomLogo;