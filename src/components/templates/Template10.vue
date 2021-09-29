<template>
  <div class="template">
    <div ref="inner" class="d-flex w-100 h-100">
        <div>

            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template10",
  props: {
    preview: {},
    personal: {
      type: Object,
      default: () => {},
    },
    workHistory: {
      type: Array
    },
    education: {
      type: Array
    },
    skills: {
      type: Array
    },
    languages: {
      type: Array
    },
    motherLang: {
      type: Array
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
  methods: {
    getPreviewHeight() {
      setTimeout(() => {
        let height = this.$refs.inner.clientHeight
        this.$store.dispatch('setPreviewHeight', {height})
      }, 200)
    }
  },
  watch: {
    personal: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    workHistory: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    education: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    skills: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    languages: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    motherLanguages: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    interests: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    licenses: {
      handler(){
        this.getPreviewHeight()
      },
      deep: true
    },
    accomp() {
      this.getPreviewHeight()
    },
  },
  mounted() {
    this.getPreviewHeight()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.template {
  background-color: #fff;
  color: rgb(17, 17, 17);
  width: 100%;
  min-height: 29.6cm;
  word-break: break-all;
  position: relative;
  overflow: hidden;
}
.padding {
  padding: 40px;
}

.logo {
  width: 70%;
}

.img-box {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 16px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.header {
  text-align: left;
  margin-bottom: 2rem;
  h1 {
    text-transform: capitalize;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 0;
    line-height: 26px;
  }
  p {
    font-weight: 500;
    color: rgb(90, 90, 90);
    font-size: 0.975rem;
    margin-bottom: 0;
  }
}

.progress {
  border-radius: 0;
  height: 4px;
  background-color: rgb(181, 181, 181);
  .progress-bar {
    background-color: #000;
  }
}

.title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.2rem;
}

.description {
    font-size: 11px;
}

.date {
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.subtitle {
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.1rem;
}


.skill-name {
  font-size: 13px;
  color: #000;
  margin-bottom: 0.1rem;
}

.progress {
  border-radius: 0;
  height: 4px;
  background-color: rgb(181, 181, 181);
  .progress-bar {
    background-color: rgb(51, 219, 248);
  }
}

.col-left {
    flex-grow: 1;
}

.col-right {
    padding-right: 40px;
    flex-shrink: 0;
    width: 200px;
}


.languages {
  p {
    font-size: 12px;
    margin-bottom: 0;
    font-weight: 500;
  }
}
</style>
