import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://the-trivia-api.com/api/', //dev
    headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
    },
});

export default fetcher;