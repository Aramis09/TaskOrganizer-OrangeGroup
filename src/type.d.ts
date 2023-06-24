export interface FloatingButtonType {
  onPress: (algo:any) => void;
  title: string;
  type: 'cloudUrlImage' | 'text';
  payload:string | boolean
  styles:any
}