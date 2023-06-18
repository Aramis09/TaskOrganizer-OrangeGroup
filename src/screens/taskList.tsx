import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function TaskList() {
  let a = [1, 2, 3, 4, 5];
  return (
    <View>
      {a.map(task => (
        <View>
          {
            //!Aqui tengo que utilizar el mismo componente de Task pero esconder cosas de acuerdo a la ubicacion
          }
          <Text>{task}</Text>
        </View>
      ))}
    </View>
  );
}

//{String(task)}
//Es parecido a las bases de datos no relacionles
let stored = [
  {
    id: 1,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: ['algo', 'c:algo', 'algo', 'c:algo', 'algo', 'c:algo'],
  },
  {
    id: 2,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: ['algo', 'c:algo', 'algo', 'c:algo', 'algo', 'c:algo'],
  },
  {
    id: 3,
    peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
    //! La c: es para marcar que es un comentario y no una subTask
    subTask: ['algo', 'c:algo', 'algo', 'c:algo', 'algo', 'c:algo'],
  },
];
