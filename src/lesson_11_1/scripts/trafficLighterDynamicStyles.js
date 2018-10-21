const TRAFFIC_LIGHTER = 'traffic-lighter';
const TRAFFIC_LIGHTER_LAMP = 'traffic-lighter__lamp';
const TRAFFIC_LIGHTER_LAMP_COLOR = ['red', 'yellow', 'green'];

export function trafficLighterDynamicStyles(selector, options) {
    if (!options) {
        options = TRAFFIC_LIGHTER_LAMP_COLOR;
    }

    const trafficLighter = document.querySelector(selector);
    let activeLight;
    let btn;

    function render() {
        trafficLighter.classList.add(TRAFFIC_LIGHTER);

        for (let i = 0; i < options.length; i++) {
            btn = document.createElement('button');
            btn.classList.add(TRAFFIC_LIGHTER_LAMP);
            btn.setAttribute('data-color', options[i]);
            trafficLighter.appendChild(btn);
        }
    }

    function turnOnLight() {

        trafficLighter.addEventListener('click', function (event) {
            if (event.target.classList.contains(TRAFFIC_LIGHTER_LAMP)) {
                turnOffLight();
                activeLight = event.target;
                event.target.style.backgroundColor = event.target.getAttribute('data-color');
            }
        });
    }

    function turnOffLight() {
        if (activeLight) {
            activeLight.style.backgroundColor = 'inherit';
        }
    }

    render();
    turnOnLight();
}