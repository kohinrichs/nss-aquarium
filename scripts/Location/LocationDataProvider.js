const locationCollection = [
    {
        image: "Barrier Reef.jpg",
        image__alt: "Great Barrier Reef",
        name: "Great Barrier Reef",
        url: "https://www.australia.com/en-us/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html",
        description: "Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, both in luxury and on a budget. Whether you explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard, a day on the reef is all about the unforgettable nature that surrounds you. Adopt Australia's easygoing attitude when you island-hop, or stay in one of the many coastal getaways such as Cairns, Airlie Beach, Hervey Bay, Mission Beach and Port Douglas.",
    },
    {
        image: "gladstone lake.jpg",
        image__alt: "Gladstone Lake",
        name: "Gladstone Lake",
        url: "https://lakeplace.com/lakefinder/mn/crow-wing/gladstone/18033800",
        description: "Gladstone is located in Crow Wing County, Minnesota. This lake is 437 acres in size. It is approximately 36 feet deep at its deepest point. When fishing, anglers can expect to catch a variety of fish including Black Bullhead, Bluegill, Brown Bullhead, Green Sunfish, Largemouth Bass, Northern Pike, Rock Bass, Walleye, Yellow Bullhead, Yellow Perch, and Pumpkinseed.",
    },
    {
        image: "Mississippi River.jpg",
        image__alt: "Mississippi River",
        name: "The Mississippi River",
        url: "https://www.exploreminnesota.com/iconic-destinations/mississippi-river",
        description: "he second-longest river in the U.S. and the fourth longest in the world, the Mississippi River gets its start at Lake Itasca and flows through nine other states, all the way to the Gulf of Mexico. For its first 650 miles, it meanders through Minnesota's stately pine forests, iron ranges and a deep valley, as well as through the heart of the Twin Cities.",
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}


          
