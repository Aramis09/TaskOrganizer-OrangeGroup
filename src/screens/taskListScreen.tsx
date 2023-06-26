import {Button, Text, View} from 'react-native';
import EmptyTask from '../components/emptyTaskScreen/emptyTaskScreen';
import TaskListRenderTitle from '../components/taskListRender/taskListRenderTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCheckStatus} from '../customHook/customHook';

export default function TaskList({navigation}: {navigation: any}) {
  const {taskSaved} = useCheckStatus();

  return (
    <View style={{flex: 1, backgroundColor: '#0E1820'}}>
      {taskSaved.length ? (
        <TaskListRenderTitle taskSaved={taskSaved} navigation={navigation} />
      ) : (
        <EmptyTask navigation={navigation} />
      )}
      <Button
        title="Create new taks list"
        onPress={() => navigation.navigate('NewTask')}
      />
      <Button
        title="clear"
        onPress={() => AsyncStorage.setItem('task-saved', '[]')}
      />
    </View>
  );
}

//{String(task)}
//Es parecido a las bases de datos no relacionles, de esta forma guardare las listas

let storage = [
  {
    id: 1,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: [
      {
        text: 'algo',
        type: 'taskForMake',
      },
      {
        text: 'algo',
        type: 'comment',
      },
      {
        text: 'algo',
        type: 'taskForMake',
      },
    ],
  },
  {
    id: 2,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: [
      {
        text: 'algo',
        type: 'taskForMake',
      },
      {
        text: 'algo',
        type: 'comment',
      },
      {
        text: 'algo',
        type: 'taskForMake',
      },
    ],
  },
  {
    id: 3,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: [
      {
        text: 'algo',
        type: 'taskForMake',
      },
      {
        text: 'algo',
        type: 'comment',
      },
      {
        text: 'algo',
        type: 'taskForMake',
      },
    ],
  },
];
