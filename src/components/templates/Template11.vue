<template>
  <div class="template">
    <div ref="inner" class="d-flex w-100 h-100">
      <div class="col-right">
        <div v-if="accomp" class="text-left mb-5">
            <h2 class="title mb-2">Profile</h2>
            <p class="description" v-html="accomp" />
        </div>
        <div class="text-left mb-5">
            <h2 class="title mb-2">Employment History</h2>
            <div v-for="(work, i) in workHistory" :key="i" class="mb-3">
                <h3 class="subtitle text-capitalize">{{work.jobTitle}}, {{work.employer}}</h3>
                <p class="date">{{work.date[0]}} - {{work.date[1]}}</p>
                <p class="description" v-html="work.description" />
            </div>
        </div>
        <div class="text-left">
            <h2 class="title mb-2">Education</h2>
            <div v-for="(school, i) in education" :key="i" class="mb-3">
            <h3 class="subtitle text-capitalize">{{school.degree}}, {{school.schoolName}}</h3>
            <p class="date">{{school.date[0]}} - {{school.date[1]}} <br> {{school.schoolLocation}}</p>
            <p class="description" v-html="school.description" />
            </div>
        </div>
      </div>
      <div class="col-left">
        <div class="header">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h1><span v-if="personal && personal.firstName">{{personal.firstName}} {{personal.lastName}}</span><span v-else>Your <br> Name</span></h1>
            <span class="circle"></span>
            <div v-if="personal && personal.image" class="img-box">
              <img :src="personal.image" alt="image">
            </div>
            <div v-else class="img-box">
              <img src="../../assets/images/question-img.png" alt="image">
            </div>
          </div>
          <div class="px-4 pt-5">
            <div class="text-left mt-2 mb-5">
              <h3 class="subtitle mb-2">Personal</h3>
              <p class="description mb-0"><span v-if="personal && personal.birthday">Birthday: {{personal.birthday}}</span></p>
              <p class="description mb-0"><span v-if="personal && personal.nationality">Nationality: {{personal.nationality}}</span></p>
              <p class="description mb-0"><span v-if="personal && personal.family">Family: {{personal.family}}</span></p>
              <p class="description mb-0"><span v-if="personal && personal.sex">Sex: {{personal.sex}}</span></p>
            </div>
            <div v-if="skills" class="skills text-left mb-5">
              <h2 class="title mb-3 small">Skills</h2>
              <div v-for="(skill, i) in skills" :key="i" class="d-flex align-items-center justify-content-between mb-2">
                <p class="skill-name">{{skill.title}}</p>
                <div ref="rating" class="rating" :rating="skill.rating">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="languages text-left">
                <h2 class="title mb-2">Languages</h2>
                <p v-for="(lang, i) in languages" :key="i" class="d-flex justify-content-between">{{lang.title}} <span>{{lang.langLevel}}</span></p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template11",
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
      type: Object
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
    motherLang: {
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
    if (this.$refs.rating != undefined) {
      this.$refs.rating.map( div => {
        let ratingSlot = Array.from(div.children)
        let rating = div.getAttribute('rating')
        for (let i = 0; i < rating; i++) {
          ratingSlot[i].classList.add('active')
        }
      })
    }
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
    width: 120px;
    height: 120px;
    border-radius: 99999px;
    overflow: hidden;
    border: 4px solid #fff;
    z-index: 1;
    position: relative;
    bottom: -25px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.header {
  position: relative;
  .circle {
    position: absolute;
    display: block;
    border-radius: 99999px;
    width: 200px;
    height: 200px;
    transform: scale(1.8) translateY(-34%);
    background-color: #166ab8;
    border: 6px solid #2d3697;
  }
  h1 {
    position: relative;
    margin-top: 20px;
    z-index: 555;
    color: #fff;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
    line-height: 26px;
  }
  p {
    color: rgb(90, 90, 90);
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 0;
  }
}

.rating {
  display: flex;
  span {
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 999px;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: rgb(174, 174, 174);
    &.active {
      background-color: #2B3067;
    }
  }
}

.skills {
  .skill-name {
    position: relative;
    top: -2px;
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 0;
  }
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.description {
  font-size: 10px;
  margin-bottom: 0;
}

.date {
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.subtitle {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.1rem;
}

.col-left {
  width: 300px;
  overflow: hidden;
  background-color: #EAEAEA;
  flex-shrink: 0;
}

.col-right {
  padding: 30px;
  flex-grow: 1;
}


.languages {
  p {
    font-size: 12px;
    margin-bottom: 0;
    font-weight: 500;
    span {
      font-weight: bold;
    }
  }
}
</style>