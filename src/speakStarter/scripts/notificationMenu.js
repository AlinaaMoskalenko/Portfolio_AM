export function notificationMenu(notificationBtn) {
    // console.log(notificationBtn);
    const notification = notificationBtn.querySelector('.notification__conteiner');
    notificationBtn.addEventListener('click', () => {
        notification.classList.toggle('notification__conteiner_opened');
    });

}