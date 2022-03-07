<template>
  <div class="template">
    <div ref="inner" class="w-100 h-100 padding">
      <div class="header">
        <h1><span v-if="personal && personal.firstName">{{personal.firstName}} {{personal.lastName}}</span><span v-else v-text="$t('cvPlaceholder.name')" /></h1>
        <p class="profession" v-if="personal && personal.profession">{{personal.profession}}</p>
      </div>
      <div class="body d-flex h-100">
        <div class="col-left">
          <!-- Details -->
          <div class="text-left mb-5">
            <div v-if="personal">
              <h2 class="title mb-4" v-text="$t('cvPlaceholder.details')" />
              <div v-if="personal.birthday || personal.nationality || personal.family || personal.sex || motherLang.title" class="mb-3">
                <h3 class="subtitle" v-text="$t('cvPlaceholder.personal')" />
                <p class="description"><span v-if="personal && personal.birthday">{{ $t('cvPlaceholder.birthday') }}: {{personal.birthday}}</span></p>
                <p class="description"><span v-if="personal && personal.nationality">{{ $t('cvPlaceholder.nationality') }}: {{personal.nationality}}</span></p>
                <p class="description"><span v-if="personal && personal.family">{{ $t('cvPlaceholder.familyStatus') }}: {{personal.family}}</span></p>
                <p class="description"><span v-if="personal && personal.sex">{{ $t('cvPlaceholder.sex') }}: {{personal.sex}}</span></p>
                <p class="description"><span v-if="motherLang.title">{{ $t('cvPlaceholder.motherLang') }}: {{motherLang.title}}</span></p>
              </div>
            </div>
            <div v-if="personal && personal.fullAddress" class="mb-3">
              <h3 class="subtitle" v-text="$t('cvPlaceholder.address2')" />
              <p class="description mb-1"><span>{{personal.fullAddress}}, <br> {{personal.city}} {{personal.zipCode}}, <br> {{personal.country}}</span></p>
            </div>
            <div v-if="personal && personal.phoneNumber" class="mb-3">
              <h3 class="subtitle" v-text="$t('cvPlaceholder.phoneNumb2')" />
              <p class="description mb-1"><span>{{personal.phoneNumber}}</span></p>
            </div>
            <div v-if="personal && personal.email" class="mb-3">
              <h3 class="subtitle">Email</h3>
              <p class="description mb-1"><span>{{personal.email}}</span></p>
            </div>
            <div v-if="personal && personal.socialProfiles" class="mb-3">
              <h3 class="subtitle" v-text="$t('cvPlaceholder.socialProf')" />
              <p class="description mb-1"><span v-if="personal && personal.socialProfiles">{{personal.socialProfiles}}</span> <span v-else>Linkedin</span></p>
            </div>
          </div>
          <!-- Skills -->
          <div v-if="skills.length !== 0" class="skills text-left mb-5">
            <h2 class="title mb-4" v-text="$t('cvPlaceholder.skills')" />
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
            <h2 class="title mb-4" v-text="$t('cvPlaceholder.languages')" />
            <p v-for="(lang, i) in languages" :key="i">{{lang.title}} {{lang.langLevel}}</p>
          </div>
        </div>
        <div class="col-right">
          <div v-if="accomp" class="text-left">
            <h2 class="title mb-4" v-text="$t('cvPlaceholder.profile')" />
            <p class="description" v-html="accomp" />
          </div>
          <hr v-if="accomp">
          <div v-if="workHistory.length && workHistory[0].jobTitle" class="text-left">
            <h2 class="title mb-4" v-text="$t('cvPlaceholder.work')" />
            <div v-for="(work, i) in workHistory" :key="i" class="mb-3">
              <h3 class="subtitle text-capitalize">{{work.jobTitle}}, {{work.employer}}</h3>
              <p class="date">
                <span v-if="work.date && work.date.from">{{work.date.from | toDate}} - </span>
                <span v-if="work.date && work.date.to && !work.date.present">{{work.date.to | toDate}}</span>
                <span v-if="work.date.present" v-text="$t('cvPlaceholder.currentWork')" />
              </p>
              <p class="description" v-html="work.description" />
            </div>
          </div>
          <hr v-if="workHistory.length && workHistory[0].jobTitle"> 
          <div v-if="education.length && education[0].schoolName" class="text-left">
            <h2 class="title mb-4" v-text="$t('cvPlaceholder.education')" />
            <div v-for="(school, i) in education" :key="i" class="mb-3">
              <h3 class="subtitle text-capitalize">{{school.degree}}, {{school.schoolName}}</h3>
              <p class="date">{{school.date[0]}} - {{school.date[1]}} <br> {{school.schoolLocation}}</p>
              <p class="description" v-html="school.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template06",
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
  filters: {
    toDate(val) {
      return val.toString().split('T')[0]
    }
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

.header {
  text-align: left;
  border-bottom: 1px solid rgb(177, 177, 177);
  h1 {
    text-transform: uppercase;
    font-size: 38px;
    font-weight: bold;
  }
  p {
    font-weight: 500;
    color: rgb(143, 143, 143);
    font-size: 0.975rem;
    margin-bottom: 1rem;
  }
}

.col-left {
  padding-top: 20px;
  padding-right: 30px;
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  border-right: 1px solid rgb(177, 177, 177);
}

.col-right {
  flex-grow: 1;
  padding: 30px;
}

.title {
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #000;
    left: 0;
    bottom: -3px;
  }
}

.subtitle {
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
}

.description {
  font-size: 11px;
  font-weight: 500;
  color: rgb(114, 114, 114);
  margin-bottom: 0;
}

.date {
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 0.3rem;
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
    background-color: #000;
  }
}

.languages {
  p {
    font-size: 12px;
    margin-bottom: 0;
    font-weight: 500;
  }
}
</style>
