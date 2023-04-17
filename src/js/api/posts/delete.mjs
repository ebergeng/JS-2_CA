import { autoFetch } from "../autoFetch.mjs";
import {API_SOCIAL_URL} from "../constants.mjs";

const action = "/posts"
const method = "delete"

export async function removePost(id) {
    const removePostURL = `${API_SOCIAL_URL}${action}/${id}`

     
    const respons = await autoFetch(removePostURL, {
        method
    })

    return await respons.json()
}