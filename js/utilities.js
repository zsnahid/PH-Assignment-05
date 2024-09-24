function addAttributeById(id, attribute) {
    document.getElementById(id).classList.add(attribute);
}

function removeAttributeById(id, attribute) {
    document.getElementById(id).classList.remove(attribute);
}

function getInputValueById(id) {
    return Number(document.getElementById(id).value);
}

function getTextValueById(id) {
    return Number(document.getElementById(id).innerText);
}

function addToHistoryList(donationAmount, cause) {
    const historyList = document.getElementById('history-list');
    const donationCause = document.getElementById(cause).innerText;
    const date = new Date();

    const div = document.createElement('div');
    div.className = 'border-2 rounded-xl p-6 mb-4';
    div.innerHTML = `
        <p class="font-bold mb-4">
            ${donationAmount} Taka is donated for ${donationCause}
        </p>
        <p class="font-light text-gray-600">
            Date: ${new Date().toString()}
        </p>`;
    historyList.prepend(div);
}