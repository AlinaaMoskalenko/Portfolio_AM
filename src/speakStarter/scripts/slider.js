export function slider(targetContent, targetToggle) {
    const contents = targetContent.querySelectorAll('.next-lesson__conteiner-information');
    const toggleArrows = targetToggle.querySelectorAll('.slider__arrow');
    const toggles = targetToggle.querySelectorAll('.slider__round');

    let activeContent = targetContent.querySelector('.next-lesson__conteiner-information_opened');
    let activeToggle = targetToggle.querySelector('.slider__round_active');

    for (let i = 0; i < contents.length; i++) {
        contents[i].setAttribute('data-id-content', i);
        toggles[i].setAttribute('data-id-toggle', i);
    }

    for (let i = 0; i < toggleArrows.length; i++) {
        toggleArrows[i].setAttribute('data-id-arrow', i);
        toggleArrows[i].addEventListener('click', (event) => {
            toggleSlider(event);
        });
    }

    function toggleSlider(event) {
        event.preventDefault();
        const eventID = event.target.getAttribute('data-id-arrow');
        const activeContentID = +activeContent.getAttribute('data-id-content');
        const activeToggleID = +activeToggle.getAttribute('data-id-toggle');

        if ((eventID === '0' && activeContentID === 0)
            || (eventID === '1' && activeContentID === 2)) {
            return;
        }

        hideContent(activeContent);
        if (eventID === '1') {
            let index = activeContentID + 1;
            contents[index].classList.add('next-lesson__conteiner-information_opened');
            toggles[index].classList.add('slider__round_active');
            activeToggle = toggles[index];
            activeContent = contents[index];
            return;
        }

        if (eventID === '0') {
            let index = activeContentID - 1;
            contents[index].classList.add('next-lesson__conteiner-information_opened');
            toggles[index].classList.add('slider__round_active');
            activeToggle = toggles[index];
            activeContent = contents[index];
            return;
        }
    }

    function hideContent(activeContent) {
        if (activeToggle) {
            activeToggle.classList.remove('slider__round_active');
            activeContent.classList.remove('next-lesson__conteiner-information_opened');
        }
    }

}