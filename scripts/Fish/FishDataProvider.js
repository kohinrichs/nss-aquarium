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
        length: "35",
        location: "Mississippi River",
        diet: "Gummy Worms",
    },
]

// // Old Collection Slice 
// export const useFish = () => {
//     return fishCollection.slice()
// }


// Fish divisible by 3
export const mostHolyFish = () => {
    
    const holyFish = []
    
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
        holyFish.push(fish)
     }
    }

     return holyFish
}


// Fish divisible by 5
export const soldierFish = () => {
    
    const soldiers = []
    
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
        soldiers.push(fish)
     }
    }

     return soldiers
}

// All the other fish
export const nonHolyFish = () => {
    
    const regularFish = []
    
    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
        regularFish.push(fish)
     }
    }

     return regularFish
}