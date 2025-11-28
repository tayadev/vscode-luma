// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";
import {
	LanguageClient,
	type LanguageClientOptions,
	type ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

function getDefaultServerPath(): string {
	const platform = os.platform();
	const executable = platform === "win32" ? "luma.exe" : "luma";
	return path.join(os.homedir(), ".luma", "bin", executable);
}

function getServerPath(): string {
	const config = vscode.workspace.getConfiguration("luma");
	const configuredPath = config.get<string>("serverPath", "");

	if (configuredPath) {
		return configuredPath;
	}

	return getDefaultServerPath();
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "luma" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand("luma.helloWorld", () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage("Hello World from luma!");
	});

	context.subscriptions.push(disposable);

	// Initialize the Language Server
	const serverPath = getServerPath();

	const serverOptions: ServerOptions = {
		command: serverPath,
		args: ["lsp"],
		options: { cwd: vscode.workspace.rootPath || os.homedir() },
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: "file", language: "luma" }],
		outputChannelName: "Luma Language Server",
	};

	client = new LanguageClient(
		"luma",
		"Luma Language Server",
		serverOptions,
		clientOptions,
	);

	client.start();

	console.log(`Luma LSP server started with path: ${serverPath}`);
}

// This method is called when your extension is deactivated
export function deactivate(): Thenable<void> | undefined {
	return client ? client.stop() : undefined;
}
