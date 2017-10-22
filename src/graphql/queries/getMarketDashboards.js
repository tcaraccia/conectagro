import { gql } from 'react-apollo'

export default gql`
    query dashboardsByMarket($locationName:MarketLocation!){
        allMarketDashboards(filter:{location:$locationName},orderBy: date_DESC){
        id
        date
        count
        nvlavg
        nvlcount
        nvlmax
        nvltavg
        nvltcount
        nvltmax
        vaqavg
        vaqcount
        vaqmax
        teravg
        tercount
        termax
        vacavg
        vaccount
        vacmax
        conavg
        concount
        conmax
        toravg
        torcount
        tormax
        location
        }
  }`