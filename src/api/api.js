import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5079166b-0f68-4c7f-b979-92c9ccc1e74a',
  },
});

export const usersAPI = {
  getUsers(count, page) {
    return instance.get(`users?count=${count}&page=${page}`)
      .then((res) => res.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile) {
    console.log(profile);
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post('auth/login', {email, password, rememberMe, captcha});
  },
  logout() {
    return instance.delete('auth/login');
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};