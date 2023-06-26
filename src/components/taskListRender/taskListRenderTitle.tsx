import {View, Text, TouchableOpacity} from 'react-native';
import {EntityTaskSaved} from '../../type';
import {styles} from './styles/styles';
import TaskCard from '../taskCard/taskCard';

interface TaskListRenderTitleParams {
  taskSaved: EntityTaskSaved[];
  navigation: any;
}

export default function TaskListRenderTitle({
  taskSaved,
  navigation,
}: TaskListRenderTitleParams) {
  return (
    <View style={styles.container}>
      {taskSaved.map(task => (
        <TaskCard key={Math.random()} task={task} navigation={navigation} />
      ))}
    </View>
  );
}
