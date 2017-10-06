import { gql } from 'react-apollo'

export default gql`
    query dashboardsByLocationName($locationName: String!) {
        allDashboards(filter: {location: { shortName_contains: $locationName}}){
            id
            date
            count
            dashboardEntries {
              priceDiff
              avgPrice
              name
            }
        }
    }`