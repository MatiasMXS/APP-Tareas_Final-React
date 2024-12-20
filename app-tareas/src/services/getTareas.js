import axios from "axios";


export const getTareas = async (url) => {
  try {
    const respose = await axios.get(url);
    return respose.data;
  } catch (error) {
    console.error(error)
  }
};

export default getTareas;


