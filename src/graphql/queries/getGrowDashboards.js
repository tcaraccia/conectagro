import { gql } from 'react-apollo'

export default gql`
    query growDashboards {
        allGrowDashboards(orderBy: date_DESC){
            id
            date
            location
            seller
            tero0
            tero160
            tero180
            tero200
            nov230
            nov260
            nov300
            tera0
            tera150
            tera190
            vaq210
            vaq250
            vaqpren
            vacnuepren
            vacusdpren
            vacnuecri
            vacusdcri
        }
  }`