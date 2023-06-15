import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})


export class ChatbotComponent {

  isOpen = false;

  toggleChatbot(): void {
    this.isOpen = !this.isOpen;
  }

  chatMessages: { sender: string; message: string }[] = [];
  predefinedQuestions: string[] = ['How are you?', 'What is your name?', 'Where are you located?'];
  predefinedAnswers: string[] = ['I am fine.', 'My name is Chatbot.', 'I am located in Angular City.'];

  addMessage(sender: string, message: string): void {
    this.chatMessages.push({ sender, message });
  }

  sendUserMessage(message: string): void {

    // Check if the user's message matches any predefined question
    const index = this.predefinedQuestions.findIndex(q => q.toLowerCase() === message.toLowerCase());
    if (index !== -1) {
      // If the user's message matches a predefined question, send the corresponding predefined answer
      this.sendChatbotMessage(this.predefinedAnswers[index]);
    } else {
      // Otherwise, handle the user's message accordingly
      // For example, you can send the message to a chatbot service or perform some local processing
      // Here, we simulate a generic response
      this.sendChatbotMessage('I am sorry, I cannot answer that question.');
    }
  }

  sendChatbotMessage(message: string): void {
    this.addMessage('chatbot', message);
  }


  openWhatsAppChat() {
    const phoneNumber = '8122886443'; // Replace with your desired phone number
    const message = 'Hello, let\'s chat!'; // Replace with your desired initial message

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url);
  }

}
