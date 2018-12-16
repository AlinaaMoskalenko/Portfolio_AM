class FooterMenu {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.render();
    }

    toggleMenu(event) {
        this.rootElement.forEach((itemTitle) => {
            if (itemTitle.parentNode.getAttribute('data-title') === event.target.getAttribute('data-toggle'))
                itemTitle.parentNode.classList.toggle('ftr-item_opened');
        });
    }

    render() {
        let i = 0;
        for (let itemTitle of this.rootElement) {
            this.togglePlus = document.createElement('div');
            this.togglePlus.classList.add('burger-ftr');
            this.togglePlus.setAttribute('data-toggle', i);
            this.togglePlus.textContent = '+';
            this.togglePlus.addEventListener('click', (event) => this.toggleMenu(event));

            itemTitle.parentNode.setAttribute('data-title', i);
            itemTitle.appendChild(this.togglePlus);
            i++;
        }
    }
}

export default FooterMenu;