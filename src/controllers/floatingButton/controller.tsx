import {Image, Text} from 'react-native';
interface TypeRenderViewOnButton {
  cloudUrlImage: (url: string) => JSX.Element;
  text: (text: string) => JSX.Element;
}

//!This is a hash to select the correct View
//! i need to improve how change styles
const cloudImage = (url: string) => (
  <Image style={{width: 100, height: 100}} source={{uri: url}} />
);

const planeText = (text: string) => <Text>{text}</Text>;

export let typeRenderViewOnButton: TypeRenderViewOnButton = {
  cloudUrlImage: cloudImage,
  text: planeText,
};
