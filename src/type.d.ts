export interface FloatingButtonType {
  onPress: (algo:any) => void;
  title: string;
  type: 'cloudUrlImage' | 'text';
  payload:string | boolean | StoreData
  styles:any
}

export interface TaskTypes {
  text: string;
  type: 'taskForMake' | 'comment';
}

export interface EntityTaskSaved {
  id:string
  person:string
  title:string
  subTask:TaskTypes[]
  numberOfTask:number
  date:any
}

export interface StoreData {
  tasks: TaskTypes[]
  title:string
}