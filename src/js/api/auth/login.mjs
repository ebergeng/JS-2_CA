import {API_SOCIAL_URL} from "../constants.mjs";
import * as stoage from "../../storage/index.mjs";

const action = "/auth/login"
const method = "post"

export async function login(profile) {

    const body = JSON.stringify(profile)
    const loginURL = API_SOCIAL_URL + action;

    const respons = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const {accessToken, ...user} = await respons.json();
    stoage.save("token", accessToken);
    stoage.save("profile", user);
    alert("You are now Logged in");

};


