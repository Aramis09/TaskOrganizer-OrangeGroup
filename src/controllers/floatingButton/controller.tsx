import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, Text, View} from 'react-native';
interface TypeRenderViewOnButton {
  cloudUrlImage: (url: string) => JSX.Element;
  text: (text: string) => JSX.Element;
}

//!This is a hash to select the correct View
//! i need to improve how change styles
const cloudImage = (url: string) => (
  <Image style={{width: 100, height: 100}} source={{uri: url}} />
);

const planeText = (text: string) => <Text>{text}</Text>;

export let typeRenderViewOnButton: TypeRenderViewOnButton = {
  cloudUrlImage: cloudImage,
  text: planeText,
};

const checkSavedTask = async () => {
  //Esto no anda, tengo que ver como guardar cosas
  const taskSaved = await AsyncStorage.getItem('taskSaved');
};
