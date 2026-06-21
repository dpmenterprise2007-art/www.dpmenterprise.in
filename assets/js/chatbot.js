// AI Chatbot Implementation
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
const chatbotBody = document.getElementById('chatbotBody');

const responses = {
    'hello': 'Hello! Welcome to DPM Enterprise. How can I help you today?',
    'hi': 'Hi there! What can I assist you with?',
    'services': 'We offer interior design, custom furniture, space planning, project management, 3D visualization, and after-sales support.',
    'products': 'We have modular kitchens, wardrobes, bedroom sets, office furniture, living room suites, and dining sets.',
    'price': 'Our products range from ₹15,000 to ₹80,000+. Please contact us for a detailed quote.',
    'contact': 'You can reach us at info@dpmenterprise.in or call us at +91-XXXXXXXXXX',
    'address': 'DPM Enterprise is located in New Delhi, India.',
    'hours': 'We are open Mon-Fri: 9:00 AM - 6:00 PM, and Sat: 10:00 AM - 4:00 PM',
    'experience': 'We have 20+ years of experience with 500+ completed projects and 1000+ happy clients.',
    'inquiry': 'Please fill our contact form or chat with us. We will get back to you shortly.',
    'quote': 'For a free quote, please fill the contact form with details of your project.',
    'furniture': 'We provide custom furniture for residential and commercial spaces.',
    'interior': 'Our interior design services include space planning, 3D visualization, and project management.',
    'portfolio': 'Check our portfolio section to see our recent projects and designs.',
    'default': 'Thank you for your message. Our team will get back to you shortly. You can also email us at info@dpmenterprise.in'
};

function toggleChatbot() {
    chatbot.classList.toggle('active');
}

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isUser) messageDiv.classList.add('user-message');
    else messageDiv.classList.add('bot-message');
    
    const p = document.createElement('p');
    p.textContent = text;
    messageDiv.appendChild(p);
    chatbotBody.appendChild(messageDiv);
    
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function getResponse(input) {
    const lower = input.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
        if (lower.includes(key)) {
            return response;
        }
    }
    return responses['default'];
}

chatbotToggle.addEventListener('click', toggleChatbot);
closeChat.addEventListener('click', toggleChatbot);

sendChat.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        setTimeout(() => {
            const response = getResponse(message);
            addMessage(response, false);
        }, 500);
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChat.click();
    }
});

console.log('✅ AI Chatbot JS Loaded');
