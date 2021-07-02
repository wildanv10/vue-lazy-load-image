<template>
  <div id="app" class="container">
    <LazyLoad v-for="image in images" :key="image" :dataSrc="image" />
  </div>
</template>

<script>
import LazyLoad from "./components/LazyLoad.vue";

export default {
  name: "App",
  components: {
    LazyLoad,
  },
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80",
        "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1469259943454-aa100abba749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      ],
    };
  },
};
</script>
