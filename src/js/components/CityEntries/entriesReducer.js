const defaultState = {
    city: '',
    name: 'City',
    temp: '0',
    pressure: '0',
    humidity: '0',
    temp_min: '0',
    temp_max: '0',
    speed: '0',
    lon: '0',
    lat: '0',
    searchHistory: []
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
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                name: payload.data.name,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                temp_min: payload.data.main.temp_min,
                temp_max: payload.data.main.temp_max,
                speed: payload.data.wind.speed,
                lon: payload.data.coord.lon,
                lat: payload.data.coord.lat,

                searchHistory: [
                    ...state.searchHistory,

                    { 
                        name: payload.data.name,
                        date: new Date().toLocaleString()
                    }
                ]
            };
        }
        default: {
            return state;
        }
    }
}
