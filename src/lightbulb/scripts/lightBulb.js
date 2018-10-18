export function lightBulb(targetElement) {
    const ACTIVE_LIGHTER_BULB_CLASS_NAME = 'lightbulb-object_active';
    const ACTIVE_SWITCH_CLASS_NAME = 'lightbulb-switch_active';
    const lightBulb = targetElement.querySelector('.lightbulb-object');
    const lightBulbSwitch = targetElement.querySelector('.lightbulb-switch');
    let activeElement = false;

    function turnOnLightBulb() {
        lightBulb.classList.toggle(ACTIVE_LIGHTER_BULB_CLASS_NAME);
        lightBulbSwitch.classList.toggle(ACTIVE_SWITCH_CLASS_NAME);
    }

    lightBulbSwitch.onclick = function () {
        if (activeElement !== false) {
            activeElement = false;
            lightBulbSwitch.textContent = 'on';
        } else {
            activeElement = true;
            lightBulbSwitch.textContent = 'off';
        }
        turnOnLightBulb();
    }
}