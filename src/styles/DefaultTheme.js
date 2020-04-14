// @flow
import { Dimensions } from 'react-native'
import colors from './colors'

export default {
  wWidth: Dimensions.get('window').width,
  wHeight: Dimensions.get('window').height,
  color: {
    ...colors,
  },
  fontSize: {
    f0: 10,
    f1: 12,
    f2: 14,
    f3: 16,
    f4: 18,
    f5: 20,
    f6: 22,
    f7: 24,
  },
  padding: {
    pa16: 16,
    pa36: 36,
    pa40: 40,
  },
}
