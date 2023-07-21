import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const WeatherToday = ({current, timezone}) => {
  const icon = current.weather[0].icon
  const img = {uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Image source={img} style={styles.image} />
        <Text style={styles.tempText}>{current.temp}&#176;C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{current.weather[0].description}</Text>
        <Text style={styles.subtitle}>{timezone}</Text>
      </View>
    </View>
  )
}

export default WeatherToday

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  image: {
    height: 150,
    width: 150
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 60,
    color: '#fff',
    paddingRight: 10
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 50
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});