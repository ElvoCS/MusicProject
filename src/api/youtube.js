// import axios from "axios";
// const KEY = "AIzaSyCGfrAHXk8YHxl9FKaB8FTof1bgIvnFvFw";

// axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     maxResults: 1,
//     key: KEY,
//   },
//   headers: {},
// });

// export default youtube = async (term) => {
//   await axios(`https://www.googleapis.com/youtube/v3/search` + term, {
//     method: "GET",
//     params: {
//       part: "snippet",
//       maxResults: 1,
//       key: KEY,
//     },
//     headers: {},
//   })
//     .then((tracksResponse) => {
//       console.log(tracksResponse);
//     })
//     .catch((error) => {
//       console.log("AudioDB API call problem", error);
//     });
// };
