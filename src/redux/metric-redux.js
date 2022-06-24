const GET_DATA_FROM_API = 'GET_DATA_FROM_API';
const DATA_FILTER = 'DATA_FILTER';

export const getDataFromApi = async (dispatch) => {
  try {
    const request = new Request('https://restcountries.com/v3.1/all');
    const response = await fetch(request);
    const res = await response.json();

    dispatch({
      type: GET_DATA_FROM_API,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA_FROM_API,
      payload: [],
    });
  }
};

export const countryFilter = (search) => ({ type: DATA_FILTER, payload: search });

const metricsReducer = (state = [], action) => {
  switch (action.type) {
    case DATA_FILTER: {
      const arr = state.filter((country) => {
        const newCountry = country.shortName.toLowerCase();
        return newCountry.includes(action.payload.toLowerCase());
      });
      return arr;
    }
    case GET_DATA_FROM_API: {
      const arr = [];
      let obj;
      let count = 1;
      for (let i = 0; i < action.payload.length; i += 1) {
        if (action.payload[i].continents[0] === 'Africa') {
          obj = {
            id: count,
            shortName: action.payload[i].name.common,
            fullName: action.payload[i].name.official,
            currencyName: Object.values(action.payload[i].currencies)[0].name,
            currencySymbol: Object.values(action.payload[i].currencies)[0]
              .symbol,
            capital: action.payload[i].capital[0],
            subregion: action.payload[i].subregion,
            languages: Object.values(action.payload[i].languages)[0],
            population: action.payload[i].population,
            fifa: action.payload[i].fifa,
            carSigns: Object.values(action.payload[i].car)[0],
            carSide: Object.values(action.payload[i].car)[1],
            timezones: action.payload[i].timezones[0],
            continents: action.payload[i].continents[0],
            flags: Object.values(action.payload[i].flags)[0],
            coatOfArms: Object.values(action.payload[i].coatOfArms)[0],
            startOfWeek: action.payload[i].startOfWeek,
          };
          arr.push(obj);
          count += 1;
        }
      }

      return arr;
    }
    default:
      return state;
  }
};

export default metricsReducer;
