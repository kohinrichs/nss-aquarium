import { useQuote } from './QuoteDataProvider.js'
import { Quote } from './Quote.js'

export const QuoteList = () => {
    const contentElement = document.querySelector(".quoteList")
    const allTheQuotes = useQuote()

    for (const quoteObject of allTheQuotes) {
        const quoteHTML = Quote(quoteObject)
        contentElement.innerHTML += quoteHTML
    }
}