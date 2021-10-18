<template>
  <div class="template">
    <div ref="inner" class="w-100 h-100 padding">
        <div class="header d-flex align-items-center">
            <div v-if="personal && personal.image" class="img-box">
                <img :src="personal.image" alt="image">
            </div>
            <div class="d-flex flex-column justify-content-center h-100">
                <h1><span v-if="personal && personal.firstName">{{personal.firstName}} {{personal.lastName}}</span><span v-else>Your <br> Name</span></h1>
                <p class="profession" v-if="personal && personal.profession">{{personal.profession}}</p>
            </div>
        </div>
        <div class="body d-flex">
            <div class="col-left">
                <div v-if="accomp" class="text-left mb-5">
                    <h2 class="title mb-2">Profile</h2>
                    <p class="description" v-html="accomp" />
                </div>
                <div v-if="workHistory.length && workHistory[0].jobTitle" class="text-left mb-5">
                    <h2 class="title mb-2">Employment History</h2>
                    <div v-for="(work, i) in workHistory" :key="i" class="mb-3">
                        <h3 class="subtitle text-capitalize">{{work.jobTitle}}, {{work.employer}}</h3>
                        <p class="date">
                          <span v-if="work.date && work.date.from">{{work.date.from | toDate}} - </span>
                          <span v-if="work.date && work.date.to && !work.date.present">{{work.date.to | toDate}}</span>
                          <span v-if="work.date.present">Current work</span>
                        </p>
                        <p class="description" v-html="work.description" />
                    </div>
                </div>
                <div v-if="education.length && education[0].schoolName" class="text-left">
                    <h2 class="title mb-2">Education</h2>
                    <div v-for="(school, i) in education" :key="i" class="mb-3">
                    <h3 class="subtitle text-capitalize">{{school.degree}}, {{school.schoolName}}</h3>
                    <p class="date">{{school.date[0]}} - {{school.date[1]}} <br> {{school.schoolLocation}}</p>
                    <p class="description" v-html="school.description" />
                    </div>
                </div>
            </div>
            <div class="col-right">
              <div v-if="personal" class="details mb-4">
                <div v-if="personal.fullAddress || personal.zipCode || personal.country || personal.phoneNumber || personal.email" class="text-left">
                  <h3 class="subtitle mb-2">Details</h3>
                  <p class="description mb-0"><span v-if="personal && personal.fullAddress">{{personal.fullAddress}}</span><span v-else>Number of street</span></p>
                  <p class="description mb-0"><span v-if="personal && personal.zipCode">{{personal.zipCode}}</span> <span v-else>zip code</span></p>
                  <p class="description mb-0"><span v-if="personal && personal.country">{{personal.country}}</span> <span v-else>Country</span></p>
                  <p class="description mb-0"><span v-if="personal && personal.phoneNumber">{{personal.phoneNumber}}</span> <span v-else>Phone number</span></p>
                  <p class="description mb-0"><span v-if="personal && personal.email">{{personal.email}}</span> <span v-else>Email</span></p>
                </div>
              </div>
              <div v-if="personal" class="mb-5">
                <div v-if="personal.birthday || personal.nationality || personal.family || personal.sex || motherLang.title" class="text-left">
                    <h3 class="subtitle mb-2">Personal</h3>
                    <p class="description mb-0"><span v-if="personal && personal.birthday">Birthday: {{personal.birthday}}</span></p>
                    <p class="description mb-0"><span v-if="personal && personal.nationality">Nationality: {{personal.nationality}}</span></p>
                    <p class="description mb-0"><span v-if="personal && personal.family">Family: {{personal.family}}</span></p>
                    <p class="description mb-0"><span v-if="personal && personal.sex">Sex: {{personal.sex}}</span></p>
                    <p class="description mb-0"><span v-if="motherLang">Mother language: {{motherLang.title}}</span></p>
                </div>
              </div>
                <!-- Skills -->
                <div v-if="skills.length !== 0" class="skills text-left mb-5">
                    <h2 class="title mb-2">Skills</h2>
                    <div v-for="(skill, i) in skills" :key="i">
                    <p class="skill-name">{{skill.title}}</p>
                    <div class="progress mb-2">
                        <div class="progress-bar" role="progressbar" :style="{'width': (skill.rating / 5) * 100 + '%'}">
                        </div>
                    </div>
                    </div>
                </div>
                <!-- Languages -->
                <div v-if="languages.length !== 0" class="languages text-left">
                    <h2 class="title mb-2">Languages</h2>
                    <p v-for="(lang, i) in languages" :key="i">{{lang.title}} {{lang.langLevel}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template08",
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
      },)
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
  filters: {
    toDate(val) {
      return val.toString().split('T')[0]
    }
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
    background-color: rgb(255, 23, 93);
  }
}

.col-left {
    flex-grow: 1;
}

.col-right {
    padding-left: 30px;
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
