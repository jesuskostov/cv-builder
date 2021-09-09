<template>
  <div class="template">
    <keep-alive>
      <component :is="templateComponent" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :interests="interests" :accomp="accomp" />
    </keep-alive>
  </div>
</template>

<style scoped>
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
      type: Array,
    },
    education: {
      type: Array,
    },
    skills: {
      type: Array,
    },
    languages: {
      type: Array,
    },
    interests: {
      type: Array
    },
    accomp: {
      type: String
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