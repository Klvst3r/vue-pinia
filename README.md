# vue-pinia

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# vue-pinia

# Create vue-pinia project

# Init Pinia Project

```sh
npm create vue@latest
```

```sh
npm init vue@latest
```

```sh
npm create vue@latest
Need to install the following packages:
  create-vue@3.18.5
Ok to proceed? (y) y
┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  vue-pinia
│
◇  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle all, enter to
confirm)
│  Pinia (state management)
│
◇  Select experimental features to include in your project: (↑/↓ to navigate, space to select, a to toggle
all, enter to confirm)
│  Oxlint
│
◇  Skip all example code and start with a blank Vue project?
│  Yes

Scaffolding project in /home/klvst3r/dev/js/vue-pinia...
│
└  Done. Now run:

   cd vue-pinia
   npm install
   npm run dev

| Optional: Initialize Git in your project directory with:
git init && git add -A && git commit -m "initial commit"

```

# Repo

```sh
cd vue-pinia/
echo "# vue-pinia" >> README.md

git init
git add README.md
git commit -m "Vue-Pinia"
git branch -M main
git remote add origin git@github.com:Klvst3r/vue-pinia.git

git push -u origin main
```

# Install Pinia

```sh
npm install pinia
```

# Create a store

```sh
mkdir src/stores
touch src/stores/counter.js
```

# Add Pinia to your main.js

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
```
