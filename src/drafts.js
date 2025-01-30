// import * as vscode from 'vscode';
// import ollama from 'ollama';

// export function activate(context: vscode.ExtensionContext) {


// 	console.log('Congratulations, your extension "deepseek" is now active!');

// 	const disposable = vscode.commands.registerCommand('deepseek.start', () => {
// 		const panel = vscode.window.createWebviewPanel(
// 			'deepseek chat',
// 			'DeepSeek',
// 			vscode.ViewColumn.One,
// 			{
// 				enableScripts: true
// 			}
// 		);

// 		panel.webview.html = getWebviewContent();

// 		panel.webview.onDidReceiveMessage(async (message: any) => {
// 			if (message.command === 'chat') {
// 				const userPrompt = message.text;
// 				let responseText = '' ;

// 				try {
// 					const stremResponse = await ollama.chat({
// 						model: 'llama3.2:3b',
// 						messages: [{role: 'user', content: userPrompt}],
// 						stream: true
// 					});

// 					for await (const part of stremResponse) {
// 						responseText += part.message.content;
// 						panel.webview.postMessage({command: 'chatResponse', text: responseText});
// 					}
// 				}
// 				catch (error) {
// 					panel.webview.postMessage({
// 						command: 'chatResponse', text: `Error:  ${String(error)}`
// 					});
// 				}
// 			}
// 		});
// 	});

// 	context.subscriptions.push(disposable);
// }

// function getWebviewContent() {
// 	return /*html*/`
// 	<!DOCTYPE html>
// 	<html lang="en">
// 	<head>
// 		<meta charset="UTF-8">
// 		<meta
// 			http-equiv="Content-Security-Policy"
// 			content="default-src 'none'; img-src https:; script-src 'unsafe-eval'; style-src vscode-resource: https: 'unsafe-inline';"
// 		/>
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<style>
// 			body {font-family: sans-serif; margin: 1rem;}
// 			#prompt {width: 100%; box-sizing: border-box;}
// 			#response {border: 1px solid #ccc; padding: 0.5rem; margin-top: 1rem;}
// 		</style>
// 	</head>
// 	<body>
// 	<h2>DeepSeek Extension</h2>
// 	<textarea id="prompt" rows="3"; height: 300px; placeholder = "Search"></textarea>
// 	<br/>
// 	<button id = "askBtn">Ask</button>
// 	<div id = "response"></div>

// 	<script>
// 		const vscode = acquireVsCodeApi();
		
// 		document.getElementById('askBtn').addEventListener('click', () => {
// 			const prompt = document.getElementById('prompt').value;
// 			vscode.postMessage({
// 				command: 'chat',
// 				text
// 			});
// 		});

// 		window.addEventListener('message', event => {
// 			const {command,text} = event.data;
// 			if (command === 'chatResponse') {
// 				document.getElementById('response').innerText = text;
// 			}
// 		})
// 	</script>
// 	</body>
// 	</html>
// 	`;

// }

// export function deactivate() { }


// import * as vscode from 'vscode';
// import ollama from 'ollama';

// export function activate(context: vscode.ExtensionContext) {
//   console.log('Congratulations, your extension "deepseek" is now active!');

//   const disposable = vscode.commands.registerCommand('deepseek.start', () => {
//     const panel = vscode.window.createWebviewPanel(
//       'deepseek.chat',
//       'DeepSeek Chat',
//       vscode.ViewColumn.One,
//       {
//         enableScripts: true
//       }
//     );

//     panel.webview.html = getWebviewContent();

//     panel.webview.onDidReceiveMessage(async (message: any) => {
//       if (message.command === 'chat') {
//         const userPrompt = message.text;
//         let responseText = '';

//         try {
//           const streamResponse = await ollama.chat({
//             model: 'llama3.2',
//             messages: [{ role: 'user', content: userPrompt }],
//             stream: true
//           });

//           // Stream the response content
//           for await (const part of streamResponse) {
//             if (part.message && part.message.content) {
//               responseText += part.message.content;
//               panel.webview.postMessage({ command: 'chatResponse', text: responseText });
//             }
//           }
//         } catch (error) {
//           panel.webview.postMessage({
//             command: 'chatResponse',
//             text: `Error: ${String(error)}`
//           });
//         }
//       }
//     });
//   });

//   context.subscriptions.push(disposable);
// }

// function getWebviewContent() {
//   return /*html*/ `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta
//         http-equiv="Content-Security-Policy"
//         content="default-src 'none'; img-src https:; script-src vscode-resource: 'unsafe-inline'; style-src vscode-resource: https: 'unsafe-inline';"
//       />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <style>
//         body { font-family: sans-serif; margin: 1rem; }
//         #prompt { width: 100%; box-sizing: border-box; }
//         #response { border: 1px solid #ccc; padding: 0.5rem; margin-top: 1rem; white-space: pre-wrap; }
//       </style>
//     </head>
//     <body>
//       <h2>DeepSeek Chat</h2>
//       <textarea id="prompt" rows="3" style="height: 300px;" placeholder="Ask something..."></textarea>
//       <br />
//       <button id="askBtn">Ask</button>
//       <div id="response"></div>

//       <script>
//         const vscode = acquireVsCodeApi();
        
//         document.getElementById('askBtn').addEventListener('click', () => {
//           const prompt = document.getElementById('prompt').value;
//           vscode.postMessage({
//             command: 'chat',
//             text: prompt
//           });
//         });

//         window.addEventListener('message', event => {
//           const { command, text } = event.data;
//           if (command === 'chatResponse') {
//             document.getElementById('response').innerText = text;
//           }
//         });
//       </script>
//     </body>
//     </html>
//   `;
// }

// export function deactivate() {}

// import * as vscode from 'vscode';
// import ollama from 'ollama';

// export function activate(context: vscode.ExtensionContext) {
//   console.log('Congratulations, your extension "deepseek" is now active!');

//   const disposable = vscode.commands.registerCommand('deepseek.start', () => {
//     const panel = vscode.window.createWebviewPanel(
//       'deepseek.chat',
//       'DeepSeek Chat',
//       vscode.ViewColumn.One,
//       {
//         enableScripts: true
//       }
//     );

//     panel.webview.html = getWebviewContent();

//     panel.webview.onDidReceiveMessage(async (message: any) => {
//       if (message.command === 'chat') {
//         const userPrompt = message.text;
//         let responseText = '';

//         try {
//           const streamResponse = await ollama.chat({
//             model: 'llama3.2',
//             messages: [{ role: 'user', content: userPrompt }],
//             stream: true
//           });

//           // Stream the response content
//           for await (const part of streamResponse) {
//             if (part.message && part.message.content) {
//               responseText += part.message.content;
//               panel.webview.postMessage({
//                 command: 'chatResponse',
//                 text: {
//                   prompt: userPrompt,
//                   response: responseText
//                 }
//               });
//             }
//           }
//         } catch (error) {
//           panel.webview.postMessage({
//             command: 'chatResponse',
//             text: {
//               prompt: userPrompt,
//               response: `Error: ${String(error)}`
//             }
//           });
//         }
//       }
//     });
//   });

//   context.subscriptions.push(disposable);
// }

// function getWebviewContent() {
//   return /*html*/ `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta
//         http-equiv="Content-Security-Policy"
//         content="default-src 'none'; img-src https:; script-src vscode-resource: 'unsafe-inline'; style-src vscode-resource: https: 'unsafe-inline';"
//       />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <style>
//         body {
//           font-family: 'Arial', sans-serif;
//           margin: 0;
//           padding: 20px;
//           background-color: #f7f7f8;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }
//         #chatContainer {
//           flex-grow: 1;
//           overflow-y: auto;
//           padding: 10px;
//           max-height: 500px;
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         }
//         .message {
//           margin-bottom: 16px;
//           display: flex;
//           flex-direction: column;
//         }
//         .userMessage {
//           background-color: #007bff;
//           color: white;
//           align-self: flex-end;
//           max-width: 70%;
//           padding: 10px;
//           border-radius: 12px;
//           word-wrap: break-word;
//         }
//         .botMessage {
//           background-color: #e0e0e0;
//           color: black;
//           align-self: flex-start;
//           max-width: 70%;
//           padding: 10px;
//           border-radius: 12px;
//           word-wrap: break-word;
//         }
//         textarea {
//           width: 100%;
//           padding: 12px;
//           margin-top: 16px;
//           border-radius: 12px;
//           border: 1px solid #ddd;
//           font-size: 16px;
//           box-sizing: border-box;
//           resize: none;
//           background-color: #f7f7f8;
//         }
//         #response {
//           white-space: pre-wrap;
//         }
//         .hidden { display: none; }
//       </style>
//     </head>
//     <body>
//       <h2>DeepSeek Chat</h2>
//       <div id="chatContainer"></div>
//       <textarea id="prompt" rows="3" placeholder="Type your message..." autofocus></textarea>
//       <script>
//         const vscode = acquireVsCodeApi();
//         const chatContainer = document.getElementById('chatContainer');
//         const promptInput = document.getElementById('prompt');

//         // Function to append messages
//         function appendMessage(message, isUser = false) {
//           const messageDiv = document.createElement('div');
//           messageDiv.classList.add('message');
          
//           const messageContent = document.createElement('div');
//           messageContent.classList.add(isUser ? 'userMessage' : 'botMessage');
//           messageContent.textContent = message;

//           messageDiv.appendChild(messageContent);
//           chatContainer.appendChild(messageDiv);
//           chatContainer.scrollTop = chatContainer.scrollHeight;  // Auto-scroll to the bottom
//         }

//         // Handle Enter key for submitting query
//         promptInput.addEventListener('keydown', (e) => {
//           if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             const userMessage = promptInput.value.trim();
//             if (userMessage) {
//               appendMessage(userMessage, true);  // Display user message
//               vscode.postMessage({
//                 command: 'chat',
//                 text: userMessage
//               });
//               promptInput.value = ''; // Clear the input field
//             }
//           }
//         });

//         // Handle incoming messages (chat responses)
//         window.addEventListener('message', event => {
//           const { command, text } = event.data;
//           if (command === 'chatResponse') {
//             appendMessage(text.response, false); // Display bot response
//           }
//         });
//       </script>
//     </body>
//     </html>
//   `;
// }


// import * as vscode from 'vscode';
// import ollama from 'ollama';

// export function activate(context: vscode.ExtensionContext) {
//   console.log('Congratulations, your extension "deepseek" is now active!');

//   const disposable = vscode.commands.registerCommand('deepseek.start', () => {
//     const panel = vscode.window.createWebviewPanel(
//       'deepseek.chat',
//       'DeepSeek Chat',
//       vscode.ViewColumn.One,
//       {
//         enableScripts: true
//       }
//     );

//     panel.webview.html = getWebviewContent();

//     panel.webview.onDidReceiveMessage(async (message: any) => {
//       if (message.command === 'chat') {
//         const userPrompt = message.text;
//         let responseText = '';

//         try {
//           const streamResponse = await ollama.chat({
//             model: 'deepseek-coder-v2',
//             messages: [{ role: 'user', content: userPrompt }],
//             stream: true
//           });

//           // Initialize the responseText variable
//           let completeResponse = '';

//           // Stream the response content
//           for await (const part of streamResponse) {
//             if (part.message && part.message.content) {
//               completeResponse += part.message.content;  // Build the complete response
//             }
//           }

//           // Once the complete response is received, send it to the webview
//           panel.webview.postMessage({
//             command: 'chatResponse',
//             text: {
//               prompt: userPrompt,
//               response: completeResponse
//             }
//           });

//         } catch (error) {
//           panel.webview.postMessage({
//             command: 'chatResponse',
//             text: {
//               prompt: userPrompt,
//               response: `Error: ${String(error)}`
//             }
//           });
//         }
//       }
//     });
//   });

//   context.subscriptions.push(disposable);
// }

// function getWebviewContent() {
//   return /*html*/ `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta
//         http-equiv="Content-Security-Policy"
//         content="default-src 'none'; img-src https:; script-src vscode-resource: 'unsafe-inline'; style-src vscode-resource: https: 'unsafe-inline';"
//       />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <style>
//         body {
//           font-family: 'Arial', sans-serif;
//           margin: 0;
//           padding: 20px;
//           background-color: #f7f7f8;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }
//         #chatContainer {
//           flex-grow: 1;
//           overflow-y: auto;
//           padding: 10px;
//           max-height: 500px;
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         }
//         .message {
//           margin-bottom: 16px;
//           display: flex;
//           flex-direction: column;
//         }
//         .userMessage {
//           background-color: #007bff;
//           color: white;
//           align-self: flex-end;
//           max-width: 70%;
//           padding: 10px;
//           border-radius: 12px;
//           word-wrap: break-word;
//         }
//         .botMessage {
//           background-color: #e0e0e0;
//           color: black;
//           align-self: flex-start;
//           max-width: 70%;
//           padding: 10px;
//           border-radius: 12px;
//           word-wrap: break-word;
//         }
//         textarea {
//           width: 100%;
//           padding: 12px;
//           margin-top: 16px;
//           border-radius: 12px;
//           border: 1px solid #ddd;
//           font-size: 16px;
//           box-sizing: border-box;
//           resize: none;
//           background-color: #f7f7f8;
//         }
//         #response {
//           white-space: pre-wrap;
//         }
//         .hidden { display: none; }
//       </style>
//     </head>
//     <body>
//       <h2>DeepSeek Chat</h2>
//       <div id="chatContainer"></div>
//       <textarea id="prompt" rows="3" placeholder="Type your message..." autofocus></textarea>
//       <script>
//         const vscode = acquireVsCodeApi();
//         const chatContainer = document.getElementById('chatContainer');
//         const promptInput = document.getElementById('prompt');

//         // Function to append messages
//         function appendMessage(message, isUser = false) {
//           const messageDiv = document.createElement('div');
//           messageDiv.classList.add('message');
          
//           const messageContent = document.createElement('div');
//           messageContent.classList.add(isUser ? 'userMessage' : 'botMessage');
//           messageContent.textContent = message;

//           messageDiv.appendChild(messageContent);
//           chatContainer.appendChild(messageDiv);
//           chatContainer.scrollTop = chatContainer.scrollHeight;  // Auto-scroll to the bottom
//         }

//         // Handle Enter key for submitting query
//         promptInput.addEventListener('keydown', (e) => {
//           if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             const userMessage = promptInput.value.trim();
//             if (userMessage) {
//               appendMessage(userMessage, true);  // Display user message
//               vscode.postMessage({
//                 command: 'chat',
//                 text: userMessage
//               });
//               promptInput.value = ''; // Clear the input field
//             }
//           }
//         });

//         // Handle incoming messages (chat responses)
//         window.addEventListener('message', event => {
//           const { command, text } = event.data;
//           if (command === 'chatResponse') {
//             appendMessage(text.response, false); // Display bot response
//           }
//         });
//       </script>
//     </body>
//     </html>
//   `;
// }


