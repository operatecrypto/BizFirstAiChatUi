export class ConversationManager {
    constructor(optionsManager) {
        this.optionsManager = optionsManager;
        this.conversations = this.optionsManager.options.conversations || [];
        this.selectedIndex = this.optionsManager.options.selected_conversation || 0;
    }

    getCurrentConversation() {
        return this.conversations[this.selectedIndex];
    }

    addUserMessage(message) {
        this.getCurrentConversation().messages.push({ role: 'user', content: message });
    }

    addAssistantMessage(message) {
        this.getCurrentConversation().messages.push({ role: 'assistant', content: message });
    }

    createConversation(title) {
        const conv = { name: title, messages: [] };
        this.conversations.push(conv);
        this.selectedIndex = this.conversations.length - 1;
        return conv;
    }

    selectConversation(index) {
        if (index >= 0 && index < this.conversations.length) {
            this.selectedIndex = index;
        }
    }
}