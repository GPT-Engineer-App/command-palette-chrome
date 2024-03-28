# command-palette-chrome

I want to make a command palette for a Chrome Extension like when you press Ctrl+Shift+P in VSCode. It should:

- List all known commands
- Filter through commands as you type
- When you hit enter, it runs the command you have selected
- When you click on a command from the list, run that command

It should appear on any page, as the topmost element (i.e the z-index should be the highest on the page).

It should be activated when you press a key combination.

Ideally, it would be in TypeScript using no imports (just the web API and no other libraries)

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/command-palette-chrome.git
cd command-palette-chrome
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
