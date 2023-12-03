import users from "./users.json";

export default defineEventHandler((event) => {
  return {
    users,
  };
});

// import axios from "axios";

// export default defineEventHandler((event) => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       return {
//         hello: response.data,
//       };
//     })
//     .catch((error) => {
//       return error.message;
//       // res.status(error.response?.status || 500).send(error.message);
//     });
// });
