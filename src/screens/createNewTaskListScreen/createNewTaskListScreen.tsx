import {useState} from 'react';
import {styles} from './styles/styles';
import {Text, TextInput, View, Button} from 'react-native';
import TextInTask from '../../components/textInTask/textInTask';
import FloatingButton from '../../components/floatingButton/floatingButton';
import {
  createObjToSave,
  storeData,
} from '../../controllers/createNewTask/createNewTask';
import {StoreData, TaskTypes} from '../../type';

export default function CreateNewTaskList({navigation}: {navigation: any}) {
  const [taskList, setTaskList] = useState<TaskTypes[]>([]);
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleAddNewTask = (inputText: string) => {
    const typeInput = createObjToSave(inputText);
    const newTaskArray = [...taskList, typeInput];
    setTaskList(newTaskArray);
  };

  const handleSaveData = (data: StoreData) => {
    if (!taskList.length) return;
    storeData(data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Write a title</Text>
        <TextInput
          style={styles.inputTitle}
          onChangeText={txt => setTitle(txt)}
          value={title}
        />
        <Text>{title}</Text>
      </View>

      <Text style={styles.text}>{text}</Text>
      {taskList.map(taskForRender => (
        <TextInTask
          key={Math.random() * 0.012}
          text={taskForRender.text}
          type={taskForRender.type}
        />
      ))}
      <TextInput
        style={styles.inputTask}
        onSubmitEditing={inputText => {
          handleAddNewTask(inputText.nativeEvent.text);
          setText('');
        }}
        onChangeText={txt => setText(txt)}
        onPressOut={txt => setText('')}
        value={text}
      />
      <Text>{text}</Text>
      <FloatingButton
        onPress={handleSaveData}
        payload={{tasks: taskList, title: title}}
        title="Save new list"
        type="text"
        styles={styles.sendButton}
      />
    </View>
  );
}
