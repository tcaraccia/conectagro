

import { StyleSheet } from 'react-native'
import { colors } from '../constants'

  export default StyleSheet.create({
    dashboardEntry: {
        display:'flex',
        justifyContent: 'space-between'        
    },
    entryRow: {
        flex: 1

    },
    entryHalfRow: {
        flex: 2
    },
    cardheader: {
        backgroundColor:colors.PRIMARY
    }
  })