

import { StyleSheet,Dimensions} from 'react-native'
import { colors } from '../constants'

  export default StyleSheet.create({
    card: {
        flex:1,
        justifyContent:'space-between'
    },
    cardHeader: {
        backgroundColor: colors.PRIMARY,
        paddingBottom:10,
        paddingTop:10,
        justifyContent:'space-around',
        paddingLeft:20
    },
    cardColumns: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 0,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent:'space-around'
    },
    rowSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: 'grey'
    }
  })