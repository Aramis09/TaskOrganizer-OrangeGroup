import React, {useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import CheckBox from '../checkBox/checkBox';

export default function TextInTask({
  text,
  type,
}: {
  text: string;
  type: 'taskForMake' | 'comment';
}) {
  const [textShow, setTextShow] = useState(text);
  return (
    <View>
      <TextInput
        style={{
          width: 500,
          height: 100,
          backgroundColor: 'violet',
          borderColor: 'red',
          margin: 10,
        }}
        onChangeText={inputText => setTextShow(inputText)}
        value={textShow}
      />
      {type === 'taskForMake' ? <CheckBox /> : <></>}
    </View>
  );
}
