import { useState, useEffect } from 'react';
import { EntityTaskSaved } from "../type";
import { getData } from '../controllers/createNewTask/createNewTask';

export const useCheckStatus = () => {
  const [taskSaved, setTaskSaved] = useState<EntityTaskSaved[]>([]);
  useEffect(() => {
    getData().then(taskSaved => setTaskSaved(taskSaved));
  }, []);
  return {taskSaved};
};