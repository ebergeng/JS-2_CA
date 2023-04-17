
import { autoFetch } from "../autoFetch.mjs";
import {API_SOCIAL_URL} from "../constants.mjs";

const action = "/posts"
const method = "post"

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action

     
    const respons = await autoFetch(createPostURL, {
        method: method,
        body: JSON.stringify(postData)
    })

    return await respons.json()
}