export class ApiService {
    constructor(optionsManager) {
        this.optionsManager = optionsManager;
    }
    //todo - a provider model here.
    //use MVC client proxy here
    //make a facade for the API calls
    async sendMessage(conversation) {
        const messages = [{ role: 'system', content: 'You are a helpful assistant.' }, ...conversation.messages];
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.optionsManager.apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: this.optionsManager.model,
                messages: messages,
                max_tokens: this.optionsManager.maxTokens
            })
        });
        const data = await response.json();
        return data.choices[0].message.content;
    }
}