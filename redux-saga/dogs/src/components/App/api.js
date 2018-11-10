// Dependencies
import axios from "axios";

export function fetchDog() {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random',
  });
}
