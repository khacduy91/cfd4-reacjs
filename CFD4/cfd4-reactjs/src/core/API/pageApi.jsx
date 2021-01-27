import { domain } from "../API/api";

const pageApi = {
  home: () => {
    return fetch(`${domain}/elearning/v4/home`).then((res) => res.json());
  },
  course: () => {
    return fetch(`${domain}/elearning/v4/courses/`).then((res) => res.json());
  },
  courseDetail: (slug) => {
    return fetch(`${domain}/elearning/v4/course/${slug}`).then((res) =>
      res.json()
    );
  },
  courseReLate: (slug) => {
    return fetch(`${domain}/elearning/v4/course-related/${slug}`).then((res) =>
      res.json()
    );
  },
  contact: (data) => {
    return fetch(`${domain}/elearning/v4/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};
export default pageApi;
