import {terminal} from "terminal-kit";

export default class Terminal {
  static title(text: string) {
    terminal.clear();
    terminal.bold.magenta(`${text}\n`);
    terminal.bold.magenta(`${"-".repeat(text.length)}\n`);
  }

  static async input(label: string): Promise<string> {
    terminal.gray(`\n${label}: `);
    const value = await terminal.inputField().promise;
    if (value?.trim()) return value;
    return Terminal.input(label);
  }

  static async waitEnter() {
    terminal.white("\nPressione ENTER para continuar...");
    await terminal.inputField({echo: false}).promise;
  }

  static async success(message: string, newLine = true) {
    terminal.green(`${newLine ? "\n" : ""}${message}`);
  }

  static async erro(message: string, newLine = true) {
    terminal.red(`${newLine ? "\n" : ""}${message}`);
  }
}
