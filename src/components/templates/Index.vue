<template>
  <div class="template">
    <keep-alive>
      <component :preview="preview" :is="templateComponent" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLang" :interests="interests" :accomp="accomp" />
    </keep-alive>
  </div>
</template>

<script>
// import all templates
const templates = {
  1: () => import("./Template01"),
  2: () => import("./Template02"),
  3: () => import("./Template03"),
  4: () => import("./Template04"),
  5: () => import("./Template05"),
  6: () => import("./Template06"),
  7: () => import("./Template07"),
};

// count the imports
export const templatesCount = Object.keys(templates).length;

export default {
  name: "Templates",
  props: {
    preview: {},
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
    motherLang: {
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