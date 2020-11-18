import { useTip } from './TipsDataProvider.js'
import { Tips } from './Tips.js'

export const TipsList = () => {
    
    const contentElement = document.querySelector(".tankTips")
    const allTheTips = useTip()

    for (const tipObject of allTheTips) {
        const tipHTML = Tips(tipObject)
        contentElement.innerHTML += tipHTML
    }
}