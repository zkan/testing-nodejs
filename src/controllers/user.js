//import axios from 'axios';

const getUsers = async url => {
  //const result = await axios.get(url);
  const result = {
    data: {
      id: 1
    }
  }
  return result.data
}

const getUserById = async (url, userId) => {
  //const result = await axios.get(`${url}${userId}`);
  const result = {
    data: {
      id: 1
    }
  }
  return result.data
}

module.exports = { getUsers, getUserById }
