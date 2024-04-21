# ImageDialog Live Demo

## Live Demo

Gallery Dialog
<div class="demo-map-container">
  <div class="demo-map-container-inner">
    <ClientOnly>
        <ImageDialog
          :imageIframeURL="iframeURL"
          :imageGalleryItems="galleryItems"
          :imageDialogOpen="dialogOpen"
        />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const galleryItems = [
  {
    title: 'Title 1',
    type: 'data1',
    userData: 'https://sparc.science/',
  },
  {
    title: 'Title 2',
    type: 'data2',
    link: 'https://sparc.science/',
  },
  {
    title: 'Title 3',
    type: 'data3',
    link: 'https://sparc.science/',
  },
]
const iframeURL = ''
const dialogOpen = true

const ImageDialog = defineClientComponent(() => {
  return import("../src/components/ImageDialog.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <ImageDialog
      :imageIframeURL="iframeURL"
      :imageGalleryItems="galleryItems"
      :imageDialogOpen="dialogOpen"
    />
  </div>

  <script>
    import ImageDialog from '@abi-software/image-dialog'
    import '@abi-software/image-dialog/dist/style.css'

    export default {
      components: { ImageDialog },
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
