const fishCollection = [
    {
        image: "goldfish.jpg",
        name: "Tom",
        species: "Goldfish",
        length: "3",
        location: "Neighbor's backyard pond",
        diet: "Cheetos",
    },
    {
        image: "largemouth_bass.jpg",
        name: "Larry",
        species: "Largemouth Bass",
        length: "16",
        location: "Gladstone Lake",
        diet: "Candy Corn",
    },
    {
        image: "muskie.jpg",
        name: "Fred",
        species: "Muskie",
        length: "34",
        location: "Mississippi River",
        diet: "Gummy Worms",
    },
]

export const useFish = () => {
    return fishCollection.slice()
}