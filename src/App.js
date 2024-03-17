import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import './App.css';
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData()
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input></Input>
      <Button value="Search" onClick={weather.fetchData}></Button>
      <Card></Card>
      <Button value="Refresh"></Button>
    </div>
  );
}

export default App;
