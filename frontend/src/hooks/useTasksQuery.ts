import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";

import { API_URL } from "../services/config";

const useTasksQuery = () => {
  return "useTasksData";
};

export default useTasksQuery;
