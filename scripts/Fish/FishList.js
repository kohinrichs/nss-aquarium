// TODO: Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const allTheFishes = useFish()

    for (const fishObject of allTheFishes) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }
}