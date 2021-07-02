<template>
  <div class="lazy-load-img">
    <img
      :src="src"
      :data-src="dataSrc"
      :alt="alt"
      :class="{ preview: isInPreview }"
      :width="width"
      :height="height"
      ref="image"
    />
  </div>
</template>

<script>
export default {
  props: {
    defaultImage: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAEAgMAAADQaqbQAAAADFBMVEX19fXj4+Pw8PDu7u4kabITAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFElEQVQImWNgYGBoYmCwUWCwMQAABnABS5EPiaQAAAAASUVORK5CYII=",
    },
    dataSrc: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "image-alt",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      src: this.defaultImage,
      isInPreview: true,
    };
  },
  mounted() {
    const self = this;
    (function() {
      window.addEventListener("scroll", self.handleScroll);
    })();
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      if (this.isElementVisible()) {
        // set scr attribute
        this.src = this.dataSrc;

        // remove "preview" class on img
        this.isInPreview = false;
      }
    },
    isElementVisible() {
      if (!this.$refs.image) {
        return false;
      }
      const rect = this.$refs.image.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      let isVisible = false;

      // Only completely visible elements return true:
      // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

      // Partially visible elements return true:
      isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.lazy-load-img {
  position: relative;
  display: block;
  overflow: hidden;
  outline: none;
  margin-bottom: 2rem;
  padding-right: 15px;
  padding-left: 15px;
}

.lazy-load-img img.preview {
  filter: blur(2vw);
}

.lazy-load-img img {
  display: block;
  width: 100%;
  max-width: none;
  height: auto;
  border: 0 none;
  transition: all ease 0.8s;
}
</style>
