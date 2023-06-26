import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../taskListRender/styles/styles';
import {EntityTaskSaved} from '../../type';
interface TaskCardProps {
  navigation: any;
  task: EntityTaskSaved;
}

export default function TaskCard({navigation, task}: TaskCardProps) {
  const handleRedirect = (item: EntityTaskSaved) => {
    navigation.navigate('Details', {
      itemId: item.id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.touchable}
      key={Math.random() * 0.012}
      onPress={() => handleRedirect(task)}>
      <View style={styles.conatinerData}>
        <View>
          <Text style={{color: 'white'}}>{task.title}</Text>
          <Text style={{color: 'white'}}>Task number: {task.numberOfTask}</Text>
        </View>
        <Text style={{color: 'white'}}>{task.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
