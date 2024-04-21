# ABI-Software Image Dialog

This component shows images on dialog with two options: gallery style or iframe.

## Installation

```bash
npm install @abi-software/image-dialog
```

## Usage

```vue
<template>
  <ImageDialog
    :imageIframeURL="iframeURL"
    :imageGalleryItems="galleryItems"
    :imageDialogOpen="dialogOpen"
  />
</template>

<script>
  import ImageDialog from '@abi-software/image-dialog'
  import '@abi-software/image-dialog/dist/style.css'

  export default {
    name: 'App',
    components: {
      ImageDialog
    },
    data: function () {
      return {
        iframeURL: '',
        galleryItems: [],
        dialogOpen: true
      }
    }
  }
</script>
```

## Development

```
npm install
```

Local development server (on port:8081)
```
npm run serve
```

Build bundle
```
npm run build-bundle
```

ESLint
```
npm run lint
```

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur


## API Documentation

The API documentation is developed with `vitepress` and `vuese`. Documentation pages are in the `docs` folder.

### To run in local development mode
```bash
npm run docs:watch
```

This will start the documentation server with `vitepress` on port `:5173` and watch the components' changes.
