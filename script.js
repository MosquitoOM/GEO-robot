function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    const iconImg = document.getElementById('icon-img');

    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
        iconImg.src = 'close-icon.png'; // 替換成叉叉的圖案
        iconImg.style.width = '60px'; // 保持與原客服機器人圖示一致
        iconImg.style.height = '60px'; // 保持與原客服機器人圖示一致
    } else {
        chatBox.style.display = 'none';
        iconImg.src = 'chatbot-icon.png'; // 替換回智能客服機器人的圖案
        iconImg.style.width = '60px'; // 保持與原客服機器人圖示一致
        iconImg.style.height = '60px'; // 保持與原客服機器人圖示一致
    }
}

function toggleMenu() {
    const menuBox = document.getElementById('menu-box');
    if (menuBox.style.display === 'none' || menuBox.style.display === '') {
        menuBox.style.display = 'block';
    } else {
        menuBox.style.display = 'none';
    }
}
