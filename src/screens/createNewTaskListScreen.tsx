import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import TextInTask from '../components/textInTask/textInTask';
import FloatingButton from '../components/floatingButton/floatingButton';
interface TaskTypes {
  text: string;
  type: 'taskForMake' | 'comment';
}

export default function CreateNewTaskList() {
  const [taskList, setTaskList] = useState<TaskTypes[]>([]);
  const [text, setText] = useState<string>();

  const handleAddNewTask = (inputText: string) => {
    const typeInput = createObjToSave(inputText);
    const newTaskArray = [...taskList, typeInput];
    setTaskList(newTaskArray);
  };

  return (
    <View>
      <TextInput
        style={{width: 500, height: 10, backgroundColor: 'blue'}}
        onSubmitEditing={inputText =>
          handleAddNewTask(inputText.nativeEvent.text)
        }
        onChangeText={txt => setText(txt)}
        onPressOut={txt => setText('')}
        value={text}
      />
      {taskList.map(taskForRender => (
        <TextInTask
          key={Math.random() * 0.012}
          text={taskForRender.text}
          type={taskForRender.type}
        />
      ))}
      <Text>{text}</Text>
      <FloatingButton
        onPress={() => {
          //!Function to save taskList array
        }}
        payload=""
        title="Save task list"
        type="text"
        styles={{}}
      />
    </View>
  );
}

const createObjToSave = (inputText: string): TaskTypes => {
  const arrayInputText = inputText.split(' ');
  let type = arrayInputText[0].toLowerCase();
  if (type !== 'c')
    return {
      text: inputText,
      type: 'taskForMake',
    };
  return {
    text: arrayInputText[1],
    type: 'comment',
  };
};
