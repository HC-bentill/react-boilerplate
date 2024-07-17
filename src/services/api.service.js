import axios from "axios";

export const GetUsers = async () => await axios.get('https://randomuser.me/api/?results=50');
