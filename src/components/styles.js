

import { StyleSheet } from 'react-native'
import { colors } from '../constants'

  export default StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
          height: 1,
          width: 0.3,
        },
        margin:5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.PRIMARY,
        justifyContent:'space-between'
    },
    cardColumns: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent:'space-around'
    },
    rowSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: '#E9E9E9'
    }
  })