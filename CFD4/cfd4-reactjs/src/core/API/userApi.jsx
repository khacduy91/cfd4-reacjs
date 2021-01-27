import { domain } from "../API/api";

const userApi = {
  login: (data) => {
    return fetch(`${domain}/elearning/v4/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  profile: () => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },

  register: (data, slug) => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${user.token.accessToken}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  updateProfile: (data) => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/profile/update`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },

  getDataProfile: () => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },
  getDataCourse: () => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/profile/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },

  payment: () => {},
};

export default userApi;
