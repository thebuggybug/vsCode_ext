const vscode = acquireVsCodeApi();

document.getElementById('askBtn').addEventListener('click', sendQuery);

// Listen for Enter key inside the textarea
document.getElementById('prompt').addEventListener('keydown', (event) => {
    if (event.key === "Enter" && !event.shiftKey) { 
        event.preventDefault(); // Prevents a new line in the textarea
        sendQuery();
    }
});

// Function to send query
function sendQuery() {
    const prompt = document.getElementById('prompt').value.trim();
    if (prompt) {
        document.getElementById('loadingIndicator').style.display = 'block'; // Show the loading indicator
        vscode.postMessage({ command: 'chat', text: prompt });
    }
}

// Listen for response
window.addEventListener('message', event => {
    const { command, text } = event.data;
    if (command === 'chatResponse') {
        // Parse Markdown and apply syntax highlighting as before
        const html = marked.parse(text);
        document.getElementById('response').style.display = 'block';
        document.getElementById('response').innerHTML = html;
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
        
        // Hide the loading indicator after receiving a response
        document.getElementById('loadingIndicator').style.display = 'none';
    }
});