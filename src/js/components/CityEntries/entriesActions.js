const axios = require('axios');

export function updateSearchBar(city) {
    return {
      type: 'UPDATE_SEARCH_BAR',
      payload: { city }
    };
}

export const getWeather = city => ({
    type: 'GET_WEATHER',
    payload: axios.get(`/jesus/${city}`)
});
