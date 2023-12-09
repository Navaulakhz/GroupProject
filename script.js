document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send-btn');
    const newChatButton = document.querySelector('.start-chat-btn'); // New Chat button selector
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    const menuItems = document.querySelectorAll('.menu-item');
    const transferButtons = document.querySelectorAll('.transfer-btn');

    // Function to create a new message bubble
    function createMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.textContent = text;
        return messageElement;
    }

    // Function to append a message to the chat
    function appendMessage(text, type) {
        const newMessage = createMessage(text, type);
        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }

    // Function to send a message
    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText) {
            appendMessage(messageText, 'sent');
            chatInput.value = '';

            // Automatically add a 'working on it' message
            setTimeout(function() {
                appendMessage("We are working on it", 'received');
                
                // After 3 seconds, add a 'system under maintenance' message
                setTimeout(function() {
                    appendMessage("Sorry, system still under maintenance", 'received');
                }, 3000);
            }, 1000);
        }
    }

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for the Enter key in the input field
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to remove active class from menu items
    function removeActiveClasses() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Event listeners for menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            removeActiveClasses();
            item.classList.add('active');
        });
    });

    // Event listeners for transfer buttons
    transferButtons.forEach(button => {
        button.addEventListener('click', function() {
            chatInput.value = button.textContent; // Set the button text to the input field
            chatInput.focus(); // Optionally set focus to the input field
        });
    });

    // Event listener for the New Chat button
    newChatButton.addEventListener('click', function() {
        // Clear all chat messages
        chatMessages.innerHTML = '';
        // Optionally, reset any other state as needed
    });
});
