import { ADD } from "./actiontype";

const init = {

    todo: []
}

const todoReducer = (state = init, action) => {

    switch (action.type) {
        case ADD: 
            return {
                ... state, 
                todo : [... state.todo, action.payload]


            }
     
        default:
            return state
    }

}

export default todoReducer