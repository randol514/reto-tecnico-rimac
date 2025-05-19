import useFetch from "../hooks/useFecth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useUsers = ()=>{
  const url = `${BASE_URL}/user.json`
  return useFetch(url)
}

export const usePlans = () =>{
  const url = `${BASE_URL}/plans.json`
  return useFetch(url)
}