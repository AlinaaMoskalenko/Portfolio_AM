const TRAFFIC_LIGHTER = 'traffic-lighter';
const TRAFFIC_LIGHTER_LAMP = 'traffic-lighter__lamp';
const TRAFFIC_LIGHTER_LAMP_COLOR = ['red', 'yellow', 'green'];
const ACTIVE_TRAFFIC_LIGHTER = 'traffic-lighter__lamp_active';

export function trafficLighterDynamic(selector, options) {
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
            btn.classList.add(TRAFFIC_LIGHTER_LAMP + '_' + options[i]);
            trafficLighter.appendChild(btn);
        }
    }

    function turnOnLight() {

        trafficLighter.addEventListener('click', function (event) {
            if (event.target.classList.contains(TRAFFIC_LIGHTER_LAMP)) {
                turnOffLight();
                activeLight = event.target;
                event.target.classList.toggle(ACTIVE_TRAFFIC_LIGHTER);
            }
        });
    }

    function turnOffLight() {
        if (activeLight) {
            activeLight.classList.remove(ACTIVE_TRAFFIC_LIGHTER);
        }
    }

    render();
    turnOnLight();
}