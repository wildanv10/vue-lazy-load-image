import LazyLoad from "./components/LazyLoad.vue";

const VueLazyLoad = {
  install(Vue) {
    Vue.component("LazyLoad", LazyLoad);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LazyLoad);
}

export default VueLazyLoad;
