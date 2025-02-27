document.addEventListener('DOMContentLoaded', function() {
    const awarenessButton = document.getElementById('awareness-button');
    const tipsSection = document.getElementById('tips-section');

    awarenessButton.addEventListener('click', function() {
        tipsSection.classList.toggle('hidden');
    });

    const tips = [
        "Never share your passwords with anyone.",
        "Always log out of your accounts when using public computers.",
        "Be cautious of emails or messages from unknown senders.",
        "Use strong and unique passwords for different accounts.",
        "Keep your software and devices updated to protect against vulnerabilities."
    ];

    const tipsList = document.getElementById('tips-list');
    tips.forEach(tip => {
        const listItem = document.createElement('li');
        listItem.textContent = tip;
        tipsList.appendChild(listItem);
    });
});