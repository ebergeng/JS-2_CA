import { autoFetch } from "../autoFetch.mjs";
import {API_SOCIAL_URL} from "../constants.mjs";

const action = "/posts"
const method = "put"

export async function updatePost(postData) {
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`

     
    const respons = await autoFetch(updatePostURL, {
        method: method,
        body: JSON.stringify(postData)
    })

    return await respons.json()
}