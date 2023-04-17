import {API_SOCIAL_URL} from "../constants.mjs"

const action = "/auth/register"
const method = "post"

export async function register(profile) {
    const body = JSON.stringify(profile)
    const registerURL = API_SOCIAL_URL + action;

    const respons = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await respons.json();
    alert("You are now registerd")
};