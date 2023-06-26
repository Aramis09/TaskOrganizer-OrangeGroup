import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import FloatingButton from '../floatingButton/floatingButton';
import {styles} from './styles/emptyTask';

export default function EmptyTask({
  navigation = null,
}: {
  navigation: any | null;
}) {
  //!Necesito hacer un cambio de estilos de acuerdo a la bandera "flagToShow"

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Upps... it’s empty</Text>
      <FloatingButton
        onPress={() => navigation.navigate('NewTask')}
        title="https://res.cloudinary.com/dynnwv7md/image/upload/v1687138404/plus_wtnjg3.png"
        type="cloudUrlImage"
        payload="algo nose que"
        styles={styles.buttonImage}
      />

      <Text style={styles.text}>Please add a new task.</Text>
    </View>
  );
}
