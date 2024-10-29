import { SET_TODO } from "./Contants";

export const setTodo = (payload) => {
    return {
        type: SET_TODO,
        payload
    }
}