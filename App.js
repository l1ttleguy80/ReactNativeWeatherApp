import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import Swiper from 'react-native-swiper'
import WeatherToday from './components/WeatherToday';
import WeatherForecast from './components/WeatherForecast';
import { API_KEY } from './utils/WeatherAPIKey';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
      console.log(data.daily)
      console.log(data.timezone)
      setData(data)
      })
    }
  }

  return (
    <View loop={false} style={styles.container}>
      <Swiper showsButtons>
        <WeatherToday current={data.current} timezone={data.timezone}/>
        <WeatherForecast data={data.daily}/>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#30a6c9'
  }
});