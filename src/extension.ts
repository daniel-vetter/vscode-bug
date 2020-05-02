import { window, ViewColumn, Uri, ExtensionContext } from "vscode";
import * as path from 'path';

export async function activate(context: ExtensionContext): Promise<void> {
    const panel = window.createWebviewPanel("testView", "Test View", ViewColumn.One, {
        enableScripts: true
    });
    const src = panel.webview.asWebviewUri(Uri.file(path.join(context.extensionPath, 'iframecontent.html')));

    const html = `
	<html>
        <body>
			<iframe src="` + src + `"></iframe>
		</body>
	</html>`;

    panel.webview.html = html;
}