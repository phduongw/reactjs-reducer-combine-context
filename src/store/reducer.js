import { SET_TODO } from "./Contants";


const initState = {
    todo: [],
    todoInput: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
    }
}

export { initState }
export default reducer;
