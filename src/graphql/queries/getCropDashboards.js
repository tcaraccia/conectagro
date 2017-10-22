import { gql } from 'react-apollo'

export default gql`
    query cropDashboardsByMarket($locationName:CropLocation!){
        allCropDashboards(filter:{location:$locationName},orderBy: date_DESC){
        id
        date
        location
        girasol
        maiz
        soja
        sorgo
        trigo
        trigoart12
        }
  }`