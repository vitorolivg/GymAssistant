// @flow
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import reactNativeInterface from 'react-with-styles-interface-react-native'
import { css, withStyles, ThemeProvider } from 'react-with-styles'

import DefaultTheme from './DefaultTheme'

ThemedStyleSheet.registerTheme(DefaultTheme)
ThemedStyleSheet.registerInterface(reactNativeInterface)

export {
  css, withStyles, ThemeProvider, ThemedStyleSheet,
}
