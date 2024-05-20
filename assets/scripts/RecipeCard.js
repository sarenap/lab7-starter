class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.shadowEl = this.attachShadow({ mode: 'open' });
        let article = document.createElement('article');
        let style = document.createElement('style');		
        style.innerHTML = ` /* Your styles here */ `;
        this.shadowEl.append(style);
        this.shadowEl.append(article);
    }

    set data(data) {
        if (!data) return;
        let article = this.shadowEl.querySelector('article');
        article.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.imgAlt}">
            <p class="title"><a href="${data.titleLnk}">${data.titleTxt}</a></p>
            <p class="organization">${data.organization}</p>
            <div class="rating">
                <span>${data.rating}</span>
                <img src="/assets/images/icons/5-star.svg" alt="${data.rating} stars">
                <span>(${data.numRatings})</span>
            </div>
            <time>${data.lengthTime}</time>
            <p class="ingredients">${data.ingredients}</p>
        `;
    }
}

customElements.define('recipe-card', RecipeCard);
