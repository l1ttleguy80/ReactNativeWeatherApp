import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const WeatherForecast = () => {
  return (
    <View style={styles.container}>
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </View>
  )
}

const ForecastItem = () => {
  const img = {uri: 'https://openweathermap.org/img/wn/10d@2x.png'}
  return (
      <View style={styles.futureForecastItemContainer} >
        <View style={styles.headerContainer}>
          <Text style={styles.day}>Mon</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Image source={img} style={styles.image}/>
          <View style={styles.forecastDetails}>
            <Text style={styles.temp}>32&#176;C</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View> 
      </View>
  )
}

export default WeatherForecast

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
image: {
    width: 75,
    height: 75
},
futureForecastItemContainer: {  
  borderRadius: 10,
  borderColor: '#eee',
  borderWidth: 1,
  marginTop: 10,
  marginHorizontal: 15
},
headerContainer: {
  alignItems: 'center',
},
bodyContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
},
forecastDetails: {
  textAlign: 'left'
},
day: {
  fontSize: 30,
  color: 'white',
  textAlign: 'center',
  fontWeight: '500',
  marginBottom: 10
},
temp: {
  fontSize: 20,
  color: 'white',
  fontWeight: '300',
},
description: {
  fontSize: 16,
  color: 'white',
  fontWeight: '100',
}
})