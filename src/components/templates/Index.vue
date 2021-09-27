<template>
  <div class="template">
     
      <component :preview="preview" :is="templateComponent" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLang" :interests="interests" :licenses="licenses" :accomp="accomp" />
    <!-- {{templateComponent}} -->
  </div>
</template>

<script>
// import all templates
// const templates = {
//   1: () => import("./Template01"),
//   2: () => import("./Template02"),
//   3: () => import("./Template03"),
//   4: () => import("./Template04"),
//   5: () => import("./Template05"),
//   6: () => import("./Template06"),
//   7: () => import("./Template07"),
// };

import {templates} from '../../store/templates'

const t = {};

templates.forEach((item, index) => {
  t[index] = () => import(`./${item.name}`)
})

// count the imports
export const templatesCount = Object.keys(t).length;

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
    licenses: {
      type: Array
    },  
    templateName: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    templateComponent() {
      return t[this.templateName];
    },
    templateFromStore() {
      return this.$store.state.templates
    }
  },
};
</script>