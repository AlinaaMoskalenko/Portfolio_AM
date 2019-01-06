import './pop-up-reschedule.scss';

const checkbox = document.querySelectorAll('.content__checkbox');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
        const element = event.target;
        if (element.checked) {
            element.checked = true;
            if (element.id === "check1")
                check2.checked = false;
            else
                check1.checked = false;

            if (element.id === "check3")
                check4.checked = false;
            else
                check3.checked = false;
        }
    });
}