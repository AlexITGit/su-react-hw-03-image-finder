import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getImages = async (query, pageNumber, perPage) => {
  try {
    let res = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(`Произошла ошибка`);
    }
  } catch (e) {
    throw new console.error(`Ошибка: ${e}`);
  }
};
