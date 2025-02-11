function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id) {
    document.getElementById('addMoney-form').classList.add('hidden');
    document.getElementById('cashOut-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the id as parameter:
    document.getElementById(id).classList.remove('hidden');


}