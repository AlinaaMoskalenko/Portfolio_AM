const CLASS_CONTENT = '.next-lesson__conteiner-information';
const CLASS_TOGGLE_ARROW = '.slider__arrow';
const CLASS_INDECATOR = '.slider__round';
const ACTIVE_CONTENT = '.next-lesson__conteiner-information_opened';
const ACTIVE_INDECATOR = '.slider__round_active';

const CLASS_ACTIVE_CONTENT = 'next-lesson__conteiner-information_opened';
const CLASS_ACTIVE_INDECATOR = 'slider__round_active';

export function sliderMenu(targetContent, targetToggle) {
    const contents = targetContent.querySelectorAll(CLASS_CONTENT);
    const toggleArrows = targetToggle.querySelectorAll(CLASS_TOGGLE_ARROW);
    const toggles = targetToggle.querySelectorAll(CLASS_INDECATOR);

    let activeContent = targetContent.querySelector(ACTIVE_CONTENT);
    let activeToggle = targetToggle.querySelector(ACTIVE_INDECATOR);

    for (let i = 0; i < contents.length; i++) {
        contents[i].setAttribute('data-id-content', i);
        toggles[i].setAttribute('data-id-toggle', i);
    }

    changeArrow();
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

        if (activeContentID === 2) {
            toggleArrows[1].classList.remove('slider__arrow_active');
            toggleArrows[0].classList.add('slider__arrow_active');
        }

        if (activeContentID === 0) {
            toggleArrows[0].classList.remove('slider__arrow_active');
            toggleArrows[1].classList.add('slider__arrow_active');
        }

        if ((eventID === '0' && activeContentID === 0)
            || (eventID === '1' && activeContentID === 2)) {
            return;
        }

        hideContent(activeContent);
        if (eventID === '1') {
            let index = activeContentID + 1;
            contents[index].classList.add(CLASS_ACTIVE_CONTENT);
            toggles[index].classList.add(CLASS_ACTIVE_INDECATOR);
            activeToggle = toggles[index];
            activeContent = contents[index];
            changeArrow(index);
            return;
        }

        if (eventID === '0') {
            let index = activeContentID - 1;
            contents[index].classList.add(CLASS_ACTIVE_CONTENT);
            toggles[index].classList.add(CLASS_ACTIVE_INDECATOR);
            activeToggle = toggles[index];
            activeContent = contents[index];
            changeArrow(index);
            return;
        }
    }

    function hideContent(activeContent) {
        if (activeToggle) {
            activeToggle.classList.remove(CLASS_ACTIVE_INDECATOR);
            activeContent.classList.remove(CLASS_ACTIVE_CONTENT);
        }
    }

    function changeArrow(index) {
        if (index === 2) {
            toggleArrows[1].classList.remove('slider__arrow_active');
            toggleArrows[0].classList.add('slider__arrow_active');
        }

        if (index === 0) {
            toggleArrows[0].classList.remove('slider__arrow_active');
            toggleArrows[1].classList.add('slider__arrow_active');
        }
    }
}