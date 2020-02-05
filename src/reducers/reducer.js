const initialState = []; 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complected: false,
                }
            ]
        default:
            break;
    }
}

export default reducer;