import { load } from "../storage/index.mjs";

export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}}`
    }
}

export async function autoFetch(url, options) {
    console.log(options)

    return fetch(url, {
        ...options,
        headers: headers()
    })
}