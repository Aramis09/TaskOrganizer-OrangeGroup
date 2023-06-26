import AsyncStorage from "@react-native-async-storage/async-storage";
import { EntityTaskSaved, StoreData, TaskTypes } from "../../type";

export const createObjToSave = (inputText: string): TaskTypes => {
  const arrayInputText = inputText.split(' ');
  let type = arrayInputText[0].toLowerCase();
  if (type !== 'c')
    return {
      text: inputText,
      type: 'taskForMake',
    };
  return {
    text: arrayInputText[1],
    type: 'comment',
  };
};

export const storeData = async ({tasks,title}:StoreData) => {
  try {
    const savedList = await getData() 
    const newId = idGenerate()
    const newEntityTask:EntityTaskSaved = {
      id:newId,
      person:"Aramis",
      title:title,
      subTask:tasks
    }
    const newList = [...savedList,newEntityTask]
    const jsonNewList = JSON.stringify(newList)
    await AsyncStorage.setItem('task-saved', jsonNewList);
    console.log("saved", jsonNewList);
    
  } catch (e) {
    // saving error
    console.error("Error on store data controller");
  }

};
export const getData = async ():Promise<EntityTaskSaved[] | []> => {
  try {
    const taskListJson = await AsyncStorage.getItem('task-saved');
    if(taskListJson) {
      const taskList:EntityTaskSaved[] = JSON.parse(taskListJson)  
      return taskList
    }
    return  []
  } catch (e) {
    console.error("Error on GetData controller");
    return  []

  }
};
 
const idGenerate = () => { 
  return Math.random().toString(30).substring(2);           
} 
// {
//   id: 1,
//   peopel: ['carlos', 'aramis', 'bigote', 'facundo'],
//   //! La c: es para marcar que es un comentario y no una subTask
//   subTask: [
//     {
//       text: 'algo',
//       type: 'taskForMake',
//     },
//     {
//       text: 'algo',
//       type: 'comment',
//     },
//     {
//       text: 'algo',
//       type: 'taskForMake',
//     },
//   ],
// }