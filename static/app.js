class ChatBox {
  // Constructor
  constructor() {
    this.args = {
      openButton: document.querySelector(".chatbox__button"),
      chatBox: document.querySelector(".chatbox__support"),
      sendButton: document.querySelector(".send__button"),
    };
    this.state = false;
    this.messages = [];
  }

  // Initialize the chat box
  display() {
    const { openButton, chatBox, sendButton } = this.args;

    openButton.addEventListener("click", () => this.toggleState(chatBox));

    sendButton.addEventListener("click", () => this.onSendButton(chatBox));

    const node = chatBox.querySelector("input");

    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });
  }

  // Toggle the chat box state
  toggleState(chatBox) {
    this.state = !this.state;
    // Show or hides the box
    if (this.state) {
      chatBox.classList.add("chatbox--active");
    } else {
      chatBox.classList.remove("chatbox--active");
    }
  }

  // Send the message to the server
  onSendButton(chatBox) {
    var textField = chatBox.querySelector("input");
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }

    let message1 = { name: "User", message: text1 };
    this.messages.push(message1);

    // http://127.0.0.1:5000
    fetch($SCRIPT_ROOT + "/predict", {
      method: "POST",
      body: JSON.stringify({ message: text1 }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let message2 = { name: "Jarvis", message: response.answer };
        this.messages.push(message2);
        this.updateChatText(chatBox);
        textField.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
        this.updateChatText(chatBox);
        textField.value = "";
      });
  }

  // Update the chat text
  updateChatText(chatBox) {
    var html = "";
    this.messages
      .slice()
      .reverse()
      .forEach((item) => {
        if (item.name == "Jarvis") {
          html +=
            '<div class="messages__item messages__item--visitor">' +
            item.message +
            "</div>";
        } else {
          html +=
            '<div class="messages__item messages__item--operator">' +
            item.message +
            "</div>";
        }
      });
    const chatText = chatBox.querySelector(".chatbox__messages");
    chatText.innerHTML = html;
  }
}

// Initialize the chat box
const chatbox = new ChatBox();
chatbox.display();
