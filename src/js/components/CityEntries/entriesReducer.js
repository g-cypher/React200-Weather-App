const defaultState = {
    city: ''
};

export default function EntriesReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_SEARCH_BAR': {
            return {
                ...state,
                city: payload.city
            };
        }
        default: {
            return state;
        }
    }
}
