window.onload = () => {
    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * 100) + 1;
        new GalleryItem(n)
    }
}

class GalleryItem {
    constructor(num) {
        fetch(`https://jsonplaceholder.typicode.com/photos/${num}/`)
            .then(r => r.json())
            .then(r => {
                this.albumId = r.albumId,
                    this.id = r.id,
                    this.title = r.title,
                    this.url = r.url,
                    this.thumbnailUrl = r.thumbnailUrl
            })
            .then(r => this.render(r))
            .catch(r => console.error(r))
    }

    render() {
        let container = document.querySelector(`#galeryContainer`);
        let div = document.createElement(`div`);
        div.classList.add(`item`);

        let img = document.createElement(`img`);
        img.src = this.thumbnailUrl;

        let title = document.createElement(`span`);
        title.innerText = this.title;

        div.append(img);
        div.append(title);

        container.append(div);

        img.addEventListener(`click`, () => {
            let focused = document.querySelector(`#focusedItem`);
            focused.src = this.url;
        })
    }
}
