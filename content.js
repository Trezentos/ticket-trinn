chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('show notifi: ')


    if (request.action === 'showNotification') {
        showNotification();
    }
});

function showNotification() {
    const notification = document.createElement('div');
    notification.innerText = 'Inicie a sua tarefa da página de ticket';
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = 'yellow';
    notification.style.padding = '10px';
    notification.style.zIndex = '10000';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000); // Remove a notificação após 5 segundos
}
