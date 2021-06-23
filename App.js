import React from 'react'
import{ LogBox } from 'react-native'

import Navigation from './navigations/Navigations'

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <Navigation/>
  );
}