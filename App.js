import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from './service/google-sheet-api'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect'
// import { getData } from './scripts/google-sheet'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={onPress} title='fff'>werwr</Button>
      <BrowserView renderWithFragment>
        <Text> This is rendered only in browser </Text>
      </BrowserView>
      <MobileView renderWithFragment>
        <Text> This is rendered only on mobile </Text>
      </MobileView>
    </View>
  )
}

const onPress = () => {
  console.log('onPress!')
  console.log(navigator)
  console.log(isBrowser, isMobile)
  getData('1H84xQcELg_mL5_cF4AE--gguS3A1Za9GgGc9mxry6-M').then(data => {
    console.log('data', data)
  })
  // getData('1H84xQcELg_mL5_cF4AE--gguS3A1Za9GgGc9mxry6-M', ['ML!A2:B']).then(data => {
  //   console.log('success?')
  // })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
