const baseURL = "https://api.weatherapi.com/v1/current.json?key=ab2ecb352f074a0e82a194956241703";

export const getWeatherDataForCity = async (city) => {
    const res = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await res.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const res = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await res.json();
}