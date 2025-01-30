import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import ollama from 'ollama';

export class DeepSeekPanel {
    public static currentPanel: DeepSeekPanel | undefined;
    private readonly panel: vscode.WebviewPanel;
    private readonly extensionUri: vscode.Uri;
    private disposables: vscode.Disposable[] = [];

    private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        this.panel = panel;
        this.extensionUri = extensionUri;

        this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
        this.panel.webview.options = { enableScripts: true };
        this.panel.webview.html = this.getWebviewContent();

        this.panel.webview.onDidReceiveMessage(async (message) => {
            if (message.command === 'chat') {
                const userPrompt = message.text;
                let responseText = '';

                try {
                    const streamResponse = await ollama.chat({
						model: 'deepseek-coder-v2',
                        // model: 'llama3.2',
						messages: [{ role: 'user', content: userPrompt }],
						stream: true
					});

                    for await (const part of streamResponse) {
                        responseText += part.message.content;
                        this.panel.webview.postMessage({ command: 'chatResponse', text: responseText });
                    }
                } catch (error) {
                    this.panel.webview.postMessage({ command: 'chatResponse', text: `Error: ${String(error)}` });
                }
            }
        });
    }

    public static createOrShow(extensionUri: vscode.Uri) {
        if (DeepSeekPanel.currentPanel) {
            DeepSeekPanel.currentPanel.panel.reveal(vscode.ViewColumn.One);
            return;
        }

        const panel = vscode.window.createWebviewPanel(
            'deepseekChat',
            'DeepChat',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'src', 'webview')]
            }
        );

        DeepSeekPanel.currentPanel = new DeepSeekPanel(panel, extensionUri);
    }

    private getWebviewContent(): string {
        const webviewUri = vscode.Uri.joinPath(this.extensionUri, 'src', 'webview');
        const htmlPath = vscode.Uri.joinPath(webviewUri, 'index.html');
        let htmlContent = fs.readFileSync(htmlPath.fsPath, 'utf8');

        // Replace placeholders with the correct URIs for styles and scripts
        const scriptUri = this.panel.webview.asWebviewUri(vscode.Uri.joinPath(webviewUri, 'script.js'));
        const styleUri = this.panel.webview.asWebviewUri(vscode.Uri.joinPath(webviewUri, 'style.css'));

        htmlContent = htmlContent
            .replace('{{scriptUri}}', scriptUri.toString())
            .replace('{{styleUri}}', styleUri.toString());

        return htmlContent;
    }

    public dispose() {
        DeepSeekPanel.currentPanel = undefined;
        this.panel.dispose();
        this.disposables.forEach((d) => d.dispose());
    }
}