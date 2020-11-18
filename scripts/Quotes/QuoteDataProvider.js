const quoteCollection = [
    {
        text: "Just Keep Swimming!",
        author: "-Dory",
    },
    {
        text: "What did the fish say when he swam into the wall? Damn.",
        author: "-Unknown",
    }
]
export const useQuote = () => {
    return quoteCollection.slice()
}