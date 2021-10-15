<template>
  <div class="template">
    <component :color="color" :preview="preview" :is="templateComponent" :personal="personal" :workHistory="workHistory" :education="education" :skills="skills" :languages="languages" :motherLang="motherLang" :interests="interests" :licenses="licenses" :accomp="accomp" />
  </div>
</template>

<script>
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
    color: {
      type: String
    },
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
      type: Object,
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
    },
  },  
};
</script>