

import { StyleSheet,Dimensions} from 'react-native'
import { colors } from '../constants'

  export default StyleSheet.create({
    card: {
        padding:0
    },
    cardHeader: {
        backgroundColor: colors.PRIMARY,
        padding:10,
        alignItems: 'center'
    },
    cardColumnsHeader: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        backgroundColor: colors.LIGHT_GRAY,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:7
    },
    cardColumnsText: {
        fontSize:10
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 10,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent:'space-around',
    },
    rowSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: 'grey'
    }
  })