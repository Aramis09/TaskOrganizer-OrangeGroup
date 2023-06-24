import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {typeRenderViewOnButton} from '../../controllers/floatingButton/controller';
import {FloatingButtonType} from '../../type';

//!This is a button, this takes care of creating diferents buttons
export default function FloatingButton({
  title,
  onPress,
  type,
  payload,
  styles,
}: FloatingButtonType) {
  return (
    <TouchableOpacity onPress={() => onPress(payload)}>
      <View style={styles}>{typeRenderViewOnButton[type](title)}</View>
    </TouchableOpacity>
  );
}
