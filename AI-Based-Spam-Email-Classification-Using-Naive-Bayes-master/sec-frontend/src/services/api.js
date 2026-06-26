import axios from "axios";

const API = axios.create({
  baseURL: "https://spamshield-ai-sg6y.onrender.com",
});

export const predictSpam = async (email) => {
  const response = await API.post("/predict/", {
    email_subject: email,
  });

  console.log("API Response:", response.data);

  return response.data;
};