import {View, Text} from 'react-native';
import {EntityTaskSaved} from '../../type';

export default function TaskListRender({
  taskSaved,
}: {
  taskSaved: EntityTaskSaved[];
}) {
  return (
    <View>
      {taskSaved.map(task => (
        <View key={Math.random() * 0.012}>
          <Text style={{color: 'white'}}>{task.title}</Text>
        </View>
      ))}
    </View>
  );
}
