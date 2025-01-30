import * as vscode from 'vscode';
import { DeepSeekPanel } from './panel';

export function activate(context: vscode.ExtensionContext) {
    console.log('DeepSeek extension is now active!');

    const disposable = vscode.commands.registerCommand('deepseek.start', () => {
        DeepSeekPanel.createOrShow(context.extensionUri);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}