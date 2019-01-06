import './pop-up-reschedule-main.scss';

const checkbox = document.querySelectorAll('.content__checkbox');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
        const element = event.target;
        if (element.checked) {
            element.checked = true;
            if (element.id === "check1")
                check2.checked = false;
            else
                check1.checked = false;
        }
    });
}