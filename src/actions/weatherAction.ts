import {apiKey, baseUrl} from "../utils/constants";
import {Action, Dispatch, ThunkAction, WeatherData} from "../types";

export const PUT_WEATHER = 'PUT_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

const putWeatherAction = (data: WeatherData): Action => (
    {
        type: PUT_WEATHER,
        payload: {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        }
    }
)

export const errorWeatherAction = (): Action => {
    return {
        type: ERROR_WEATHER,
        payload: 'Enter correct city name'
    }
}

export const fetchWeatherAction = (city: string): ThunkAction => {
    return (dispatch: Dispatch) => {
        fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => dispatch(putWeatherAction(data)))
            .catch(e => {
                console.log(e);
                dispatch(errorWeatherAction());
            })
    }
}