import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".locationList")
    const allTheLocations = useLocation()

    for (const locationObject of allTheLocations) {
        const locationHTML = Location(locationObject)
        contentElement.innerHTML += locationHTML
    }
}