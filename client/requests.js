import {API_URL} from '../API_URL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export async function login(data) {
  const payload = {
    email: data.email.value,
    password: data.password.value,
  };
  return await fetch(`${API_URL}/api/v1/login_user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(async res => {
    console.log(JSON.stringify(res));
    const jsonRes = await res.json();
    if (res.status !== 200) {
      return {error: jsonRes.status};
    } else if (res.status == 200) {
      console.log(jsonRes);
      const session = {
        user_id: jsonRes.user_id,
        token: jsonRes.token,
      };
      setLocalStorageSession(session);
      return {data: jsonRes};
    }
  });
}

export async function Register(data) {
  const payload = {
    email: data.email.value,
    password: data.password.value,
    last_name: data.lastName.value,
    first_name: data.firstName.value,
  };
  return await fetch(`${API_URL}/api/v1/register_user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(async res => {
    console.log(JSON.stringify(res));
    const jsonRes = await res.json();
    if (res.status !== 200) {
      return {error: jsonRes.status};
    } else if (res.status == 200) {
      console.log(jsonRes);
      return {data: jsonRes};
    }
  });
}

export async function getUserInformation(id) {
  return await fetch(`${API_URL}/api/v1/userinformation?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async res => {
    const jsonRes = await res.json();
    if (res.status !== 200) {
      return {error: jsonRes.status};
    } else if (res.status == 200) {
      console.log(jsonRes);
      return {data: jsonRes};
    }
  });
}

//following functions deals with local storage

export async function setLocalStorageSession(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('Lively-go-access-token', jsonValue);
  } catch (e) {
    return e;
  }
}

export async function getLocalStorageSession() {
  try {
    const jsonValue = await AsyncStorage.getItem('Lively-go-access-token');
    const data = jsonValue != null ? JSON.parse(jsonValue) : false;
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
}
export async function clearLocalStorageSession() {
  try {
    const jsonValue = await AsyncStorage.removeItem('Lively-go-access-token');
    return jsonValue;
  } catch (e) {
    return e;
  }
}

//search users

export async function serachUsers(username) {
  var config = {
    method: 'get',
    url: `${API_URL}/api/v1/search_users?user=${username}`,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return {error: error.data};
    });
}
