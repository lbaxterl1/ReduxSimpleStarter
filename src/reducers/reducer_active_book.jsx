// all reducers get two args state and the action.
// State argument is NOT application state, but the state passed to this reducer.
// ES6 is state=null is when it is undefined
export default function(state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}