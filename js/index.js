//hide donation and show history
document.getElementById('history-btn').addEventListener('click', function () {
    addAttributeById('donation', 'hidden');
    removeAttributeById('history', 'hidden');
    addAttributeById('history-btn', 'bg-lime');
    removeAttributeById('donation-btn', 'bg-lime');
})

//hide history and show donation
document.getElementById('donation-btn').addEventListener('click', function () {
    removeAttributeById('donation', 'hidden');
    addAttributeById('history', 'hidden');
    removeAttributeById('history-btn', 'bg-lime');
    addAttributeById('donation-btn', 'bg-lime');
})

// process noakhali donation
document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const noakhaliDonationInput = getInputValueById('noakhali-donation-input');

    if (noakhaliDonationInput <= 0 || isNaN(noakhaliDonationInput)) {
        alert('Invalid Amount!');
        return;
    }

    const noakhaliCurrentAmount = getTextValueById('noakhali-current-amount');

    const totalDonationAmount = noakhaliDonationInput + noakhaliCurrentAmount;

    const currentBalance = getTextValueById('current-balance');

    if (currentBalance === 0) {
        alert('Insufficient balance!')
        return;
    }

    const newBalance = currentBalance - noakhaliDonationInput;

    if (newBalance < 0) {
        alert('Insufficient balance!');
        return;
    }

    addToHistoryList(noakhaliDonationInput, 'noakhali-cause');

    document.getElementById('noakhali-current-amount').innerText = totalDonationAmount;
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('noakhali-donation-input').value = '';
    successful_donation_modal.showModal();
})

document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const feniDonationInput = getInputValueById('feni-donation-input');

    if (feniDonationInput <= 0 || isNaN(feniDonationInput)) {
        alert('Invalid Amount!');
        return;
    }
    const feniCurrentAmount = getTextValueById('feni-current-amount');

    const totalDonationAmount = feniDonationInput + feniCurrentAmount;

    const currentBalance = getTextValueById('current-balance');

    if (currentBalance === 0) {
        alert('Insufficient balance!')
        return;
    }

    const newBalance = currentBalance - feniDonationInput;

    if (newBalance < 0) {
        alert('Insufficient balance!');
        return;
    }

    addToHistoryList(feniDonationInput, 'feni-cause');

    document.getElementById('feni-current-amount').innerText = totalDonationAmount;
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('feni-donation-input').value = '';
    successful_donation_modal.showModal()
})

document.getElementById('qouta-donate-btn').addEventListener('click', function () {
    const qoutaDonationInput = getInputValueById('qouta-donation-input');

    if (qoutaDonationInput <= 0 || isNaN(qoutaDonationInput)) {
        alert('Invalid Amount!');
        return;
    }
    const qoutaCurrentAmount = getTextValueById('qouta-current-amount');

    const totalDonationAmount = qoutaDonationInput + qoutaCurrentAmount;

    const currentBalance = getTextValueById('current-balance');

    if (currentBalance === 0) {
        alert('Insufficient balance!')
        return;
    }

    const newBalance = currentBalance - qoutaDonationInput;

    if (newBalance < 0) {
        alert('Insufficient balance!');
        return;
    }

    addToHistoryList(qoutaDonationInput, 'qouta-cause');

    document.getElementById('qouta-current-amount').innerText = totalDonationAmount;
    document.getElementById('current-balance').innerText = newBalance;
    document.getElementById('qouta-donation-input').value = '';
    successful_donation_modal.showModal()
})