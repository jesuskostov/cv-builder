
<template>
  <div class="template">
    <keep-alive>
      <component :is="templateComponent" :personal="personal" :workHistory="workHistory" />
    </keep-alive>
  </div>
</template>

<style scoped>
.template {
  width: 30%;
  border: 1px solid red;
}
</style>

<script>
// import all templates
const templates = {
  1: () => import("./Template01"),
  2: () => import("./Template02"),
  3: () => import("./Template03"),
};

// count the imports
export const templatesCount = Object.keys(templates).length;

export default {
  name: "Templates",
  props: {
    personal: {
      type: Object,
      default: () => {},
    },
    workHistory: {
      type: Array
    },
    templateName: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    templateComponent() {
      return templates[this.templateName];
    },
  },
};
</script>