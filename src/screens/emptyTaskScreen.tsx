import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FloatingButton from '../components/floatingButton/floatingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateNewTaskList from './createNewTaskListScreen';

export default function EmptyTask() {
  //!Necesito hacer un cambio de estilos de acuerdo a la bandera "flagToShow"
  const [texto, setTexto] = useState<string>();
  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      console.log('algo');

      if (value !== null) {
        console.log(value);
        setTexto(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View>
      <Text>Upps... it’s empty</Text>
      <FloatingButton
        onPress={storeData}
        title="https://res.cloudinary.com/dynnwv7md/image/upload/v1687138404/plus_wtnjg3.png"
        type="cloudUrlImage"
        payload="algo nose que"
        styles={{}}
      />
      {
        //!Esto de abajo debe estar en otra ruta
      }

      <CreateNewTaskList />

      <Text>Please add a new task.</Text>
    </View>
  );
}
