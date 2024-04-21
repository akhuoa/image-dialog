<script setup>
import Gallery from '@abi-software/gallery'
import '@abi-software/gallery/dist/style.css'

const props = defineProps({
  /**
   * The option to show/hide image dialog.
   */
  imageDialogOpen: {
    type: Boolean,
    default: false,
    required: true
  },
  /**
   * The iframe URL of the image. Either this value or `imageGalleryItems`'s value must be provided.
   */
  imageIframeURL: {
    type: String,
    default: '',
    required: true
  },
  /**
   * The gallery items array. Either this value or `imageIframeURL`'s value must be provided.
   */
  imageGalleryItems: {
    type: Array,
    default() {
      return []
    },
    required: true
  }
})
</script>

<template>
  <div class="image-dialog" v-if="imageDialogOpen">
    <div v-if="imageIframeURL" class="image-iframe-container">
      <iframe
        class="image-dialog-iframe"
        :src="imageIframeURL">
      </iframe>
    </div>
    <div v-if="!imageIframeURL && imageGalleryItems" class="image-gallery-container">
      <Gallery :items="imageGalleryItems" />
    </div>
    <button
      class="image-dialog-close"
      @click="$emit('close-image-dialog')"
      aria-label="Close"
    >
      &times;
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .image-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    .image-dialog-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 30px;
      height: 30px;
      font-size: 32px;
      line-height: 1;
      padding: 0;
      border: 0 none;
      border-radius: 2px;
      cursor: pointer;
      color: gray;
      transition: color 0.35s ease;

      &:hover {
        color: $app-primary-color;
      }
    }

    .image-iframe-container {
      height: 80%;
      width: 80%;
      background: #fff;
      border: 1px solid black;
      overflow: hidden;
    }

    .image-dialog-iframe {
      height:100%;
      width:100%;
      position:relative;
      border-width:0px;
    }

    .image-gallery-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80%;
      width: 80%;
      background: transparent;
      overflow: hidden;

      :deep(.gallery) {
        .gallery-strip {
          padding: 1rem 0;
          gap: 1rem;
        }

        > div {
          min-height: max-content !important;
        }
      }
    }
  }
</style>
