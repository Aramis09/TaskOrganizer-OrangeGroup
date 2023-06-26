import {useState} from 'react';
import {styles} from './styles/styles';
import {TextInput, View, ScrollView} from 'react-native';
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
    <View style={styles.container}>
      {type === 'taskForMake' ? <CheckBox /> : <></>}
      <TextInput
        style={styles.inputText}
        onChangeText={inputText => setTextShow(inputText)}
        multiline={true}
        value={textShow}
      />
    </View>
  );
}
