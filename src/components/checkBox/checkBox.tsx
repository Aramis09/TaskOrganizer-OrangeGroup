import React, {useState} from 'react';
import {View} from 'react-native';
import FloatingButton from '../floatingButton/floatingButton';

export default function CheckBox() {
  const [statusCheck, setStatusCheck] = useState(false);

  //!TENGO QUE MEJORAR ESTO, ESTA HORRIBLE
  let changeStyles = statusCheck
    ? {
        width: 25,
        height: 25,
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 100,
      }
    : {
        width: 25,
        height: 25,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 100,
      };
  return (
    <View>
      <FloatingButton
        onPress={setStatusCheck}
        payload={!statusCheck}
        title={statusCheck ? '✔' : '✖'}
        type="text"
        styles={changeStyles}
      />
    </View>
  );
}
