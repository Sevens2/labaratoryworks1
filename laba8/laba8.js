document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    if (messageInput.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageInput.value;
        messagesContainer.appendChild(newMessage);
        messageInput.value = ''; 
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Прокручиваем вниз
    }
});

document.getElementById('createChannelBtn').addEventListener('click', function() {
    const channelName = prompt("Введите название нового канала:");
    if (channelName) {
        const channelList = document.querySelector('.sidebar ul');
        const newChannel = document.createElement('li');
        newChannel.textContent = `# ${channelName}`;
        channelList.appendChild(newChannel);
    }
});
