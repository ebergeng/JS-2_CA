import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";
import { updatePost } from "./api/posts/update.mjs";
import { removePost } from "./api/posts/delete.mjs";

const path = location.pathname;

if(path === "/profile/register/"){
    setRegisterFormListener();
}
else if(path === "/profile/login/"){
    setLoginFormListener();
}
