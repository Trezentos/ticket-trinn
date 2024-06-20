chrome.runtime.onInstalled.addListener(() => {
    // Cria um alarme que dispara a cada 3 minutos

    chrome.alarms.create('checkTickets', { periodInMinutes: 1 });

    
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'checkTickets') {
        checkTicketsPage();
    }
});

function checkTicketsPage() {
    chrome.tabs.query({ url: 'https://quaxx.com.br/app/q-admin/list/tickets.php' }, (tabs) => {

        if (tabs.length > 0) {

            const tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: checkIsActiveClass
            }).catch(err => console.error(err));
        }
    });
}

function checkIsActiveClass() {
    const div = document.querySelector('.is-active');



    alert('Inicie uma tarefa')
}
