const chatInput = document.getElementById('chat-input');
const chatbox = document.getElementById('chatbox');

// Handle message input and responses
chatInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && chatInput.value.trim() !== "") {
    const userMsg = chatInput.value.trim().toLowerCase();
    addMessage(`🧑 You: ${chatInput.value}`, 'user');
    respondTo(userMsg);
    chatInput.value = "";
  }
});

function addMessage(msg, type) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chatbot-message';
  msgDiv.textContent = msg;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function respondTo(input) {
  let response;
  if (input === 'hi' || input === 'hello') {
    response = `👋 Hi! I'm Ankur Chaudhary, a passionate Frontend Developer.
Skills: C, C++, Java, HTML, CSS, JavaScript, Networking, Linux, MySQL, AWS.
Why hire me? I build responsive, modern websites and love solving real-world tech problems.`;
  } else {
    response = "🤖 I'm just a simple chatbot. Try saying 'hi'!";
  }
  addMessage(response, 'bot');
}

// ✅ Drag & Move functionality (fixed to ignore input field)
const chatbotWrapper = document.getElementById('chatbot-wrapper');

chatbotWrapper.addEventListener("mousedown", function (event) {
  // Prevent drag if clicking inside input or chatbox
  if (event.target.closest("input") || event.target.closest("#chatbox")) {
    return;
  }

  let shiftX = event.clientX - chatbotWrapper.getBoundingClientRect().left;
  let shiftY = event.clientY - chatbotWrapper.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    chatbotWrapper.style.left = pageX - shiftX + "px";
    chatbotWrapper.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener("mouseup", function mouseUpHandler() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", mouseUpHandler);
  });
});
