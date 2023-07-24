import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment-timezone'

const WeatherForecast = ({data}) => {
  if(data)
  {
    console.log(data.length);
    return (
      <View style={styles.container}>
        {
          data && data.length > 0 ? 
  
          data.map((data, idx) => (
            idx !== 0 &&  <ForecastItem key={idx} forecastItem={data}/>
          ))
          :
          <View/>
        }
      </View>
    )}else{
      <Text>Nah</Text>
    }
  }

const ForecastItem = ({forecastItem}) => {
  if(forecastItem)
  {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
    return (
      <View style={styles.futureForecastItemContainer} >
        <View style={styles.headerContainer}>
          <Text style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Image source={img} style={styles.image}/>
          <View style={styles.forecastDetails}>
            <Text style={styles.temp}>{forecastItem.temp.day}&#176;C</Text>
            <Text style={styles.description}>{forecastItem.weather[0].description}</Text>
          </View>
        </View> 
      </View>
    )
  }
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