import {Button, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {EntityTaskSaved, TaskTypes} from '../type';
import {getData} from '../controllers/createNewTask/createNewTask';
import EmptyTask from '../components/emptyTaskScreen/emptyTaskScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskListRender from '../components/taskListRender/taskListRender';

const useCheckStatus = () => {
  const [taskSaved, setTaskSaved] = useState<EntityTaskSaved[]>([]);
  useEffect(() => {
    getData().then(taskSaved => setTaskSaved(taskSaved));
  }, []);
  return {taskSaved};
};
export default function TaskList({navigation}: {navigation: any}) {
  const {taskSaved} = useCheckStatus();

  return (
    <View style={{flex: 1, backgroundColor: '#0E1820'}}>
      {taskSaved.length ? (
        <TaskListRender taskSaved={taskSaved} />
      ) : (
        <EmptyTask navigation={navigation} />
      )}
      <Button
        title="Create new taks list"
        onPress={() => navigation.navigate('NewTask')}
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
