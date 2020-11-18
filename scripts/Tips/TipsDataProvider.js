const tipsCollection = [
    {
        text: "Clean your tank when it gets dirty."
    },
    {
        text: "Keep your cats out of the tank."
    },
]

export const useTip = () => {
    return tipsCollection.slice()
}