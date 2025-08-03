export class UiRenderer {
    constructor(htmlTemplates, optionsManager, conversationManager, messageHandler) {
        this.htmlTemplates = htmlTemplates;
        this.optionsManager = optionsManager;
        this.conversationManager = conversationManager;
        this.messageHandler = messageHandler;
        this.container = this.optionsManager.container;
    }

    renderInitialUI() {
        this.container.innerHTML = `
            ${this.htmlTemplates.getSidebar(this.optionsManager.options)}
            <main class="content">
                ${this.htmlTemplates.getWelcomePage(this.optionsManager.options.version)}
                <form class="message-form">
                    <input type="text" placeholder="Type a message..." required>
                    <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </main>
        `;
    }

    renderMessages(conversation) {
        const messagesHtml = conversation.messages.map(msg =>
            `<div class="message ${msg.role}">${msg.content}</div>`
        ).join('');
        this.container.querySelector('.content').innerHTML = messagesHtml;
    }

    renderSettingsModal() {
        this.container.insertAdjacentHTML('beforeend', this.htmlTemplates.getSettingsModal(this.optionsManager));
    }
}