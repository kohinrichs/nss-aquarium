export const Location = (location) => {
        return `
        <section class="location card">
                    <div><img class="location__image" src="./images/${location.image}" alt="${location.image__alt}"></div>
                    <div class="location__url"><a href="${location.url}">${location.name}</a></div>
                    <div class="location__desc">${location.description}</div>
            </section>
        `
    }