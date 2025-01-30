
# deepseek VS Code Extension

This VS Code extension integrates with the Ollama API and utilizes the `deepseek-coder-v2` model for AI-powered development assistance. The extension is designed for developers to enhance their workflow with conversational AI within the VS Code environment.

## Features

- **Interactive Chatbot UI**: Provides a chatbot interface similar to ChatGPT for seamless communication with AI.
- **Model Selection**: You can choose from various models available through the Ollama API (currently using `deepseek-coder-v2`).
- **Background Operation**: The extension runs in the background using a terminal, allowing for uninterrupted development.


## Requirements

- **Node.js 22**: Ensure you have Node.js version 22 installed on your system.
- **Ollama & Model**: Make sure Ollama is installed and the model of your choice is available. The extension is currently set to use the `deepseek-coder-v2` model.
- 
To install the required packages, run:

```bash
npm install
```

### Installing Ollama:

1. Visit the [Ollama website](https://ollama.com/) to download and install Ollama for your platform.
2. After installation, download the model using the [Deepseek-Coder-V2 page](https://ollama.com/library/deepseek-coder-v2).
3. Select the model parameter according to your hardware (I am using the 16B parameter).

### Running the Model:

Once you have installed Ollama and selected your model, run the model in your terminal with the following command:

```bash
ollama run deepseek-coder-v2
```

## Extension Setup

1. Ensure Ollama and the preferred model are installed and running on your system.
2. Launch the extension by opening the **Command Palette**:
    - On Mac: Press `Cmd + Shift + P`
    - On Windows/Linux: Press `Ctrl + Shift + P`
3. Select **Debug: Start Debugging**.
4. A new VS Code window will open. Again, open the **Command Palette** and type "Start Deepseek" to activate the extension.

## Known Issues

- If the model is not running in the background, the extension may not function correctly. Ensure the model is actively running before interacting with the chatbot UI.

## Release Notes

### 1.0.0
- Initial release of the deepseek VS Code extension with `deepseek-coder-v2` model integration.

---

## Following Extension Guidelines

Make sure you’ve read through [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines) to follow the best practices when creating your extension.

## For More Information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy using Deepseek!**
