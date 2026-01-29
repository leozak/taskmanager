import { useQuery, useMutation } from "@tanstack/react-query";
import type { AxiosPromise, AxiosError } from "axios";

import { api } from "../services/api";

import type { NewTaskData, NewTaskResponse } from "../interfaces/tasks";

export const useTasksQuery = () => {
  return "useTasksData";
};

const submitNewTask = async (
  task: NewTaskData,
): AxiosPromise<NewTaskResponse> => {
  const response = await api.post<NewTaskResponse>("/tasks/create", task);
  return response;
};

export const useNewTask = () => {
  const mutate = useMutation({
    mutationKey: ["newTask"],
    mutationFn: submitNewTask,
    retry: true,
  });
  return {
    ...mutate,
    data: mutate.data?.data,
  };
};
