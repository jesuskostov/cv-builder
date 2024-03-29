<template>
  <div class="template" :style="`--cv-color: ${color}`">
    <div ref="inner" class="w-100 h-100 d-flex">
      <div class="col-left">
        <div class="profile mb-4">
          <div class="img">
            <img v-if="personal && personal.image" :src="personal.image" alt="question img">
            <img v-else src="../../assets/images/question-img.png" alt="question img">
          </div>
          <h1 class="name"><span v-if="personal.firstName">{{personal.firstName}} {{personal.lastName}}</span><span v-else v-text="$t('cvPlaceholder.name')" /></h1>
          <span class="line"></span>
          <p v-if="personal && personal.profession" class="profession"><span v-if="personal && personal.profession">{{personal.profession}}</span><span v-else>customer service</span></p>
        </div>
        <div v-if="personal" class="details mb-4">
          <div v-if="personal.birthday || personal.nationality || personal.family || personal.sex" class="text-left">
            <h2 v-text="$t('cvPlaceholder.personal')" />
            <p><span v-if="personal && personal.birthday">{{ $t('cvPlaceholder.birthday') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.birthday}}</span></p>
            <p><span v-if="personal && personal.nationality">{{ $t('cvPlaceholder.nationality') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.nationality}}</span></p>
            <p><span v-if="personal && personal.family">{{ $t('cvPlaceholder.familyStatus') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.family}}</span></p>
            <p><span v-if="personal && personal.sex">{{ $t('cvPlaceholder.sex') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.sex}}</span></p>
            <p v-if="motherLang.title">
              {{$t('cvPlaceholder.motherLang')}}<span v-if="locale === 'fr'">&nbsp;</span>: {{motherLang.title}}
            </p>
          </div>
        </div>
        <div v-if="personal" class="details mb-4">
          <div v-if="personal.fullAddress || personal.zipCode || personal.country || personal.phoneNumber || personal.email" class="text-left">
            <h2 v-text="$t('cvPlaceholder.details')" />
            <p><span v-if="personal && personal.fullAddress">{{personal.fullAddress}}</span></p>
            <p><span v-if="personal && personal.zipCode">{{personal.zipCode}}</span> <span v-else v-text="$t('cvPlaceholder.zipCode')" /></p>
            <p><span v-if="personal && personal.country">{{personal.country}}</span> <span v-else v-text="$t('cvPlaceholder.country')" /></p>
            <p><span v-if="personal && personal.phoneNumber">{{personal.phoneNumber}}</span> <span v-else v-text="$t('cvPlaceholder.phoneNumb')" /></p>
            <p><span v-if="personal && personal.email">{{personal.email}}</span></p>
            <p><span v-if="personal && personal.socialProfiles">{{personal.socialProfiles}}</span></p>
          </div>
        </div>
        <div v-if="skills.length !== 0" class="skills text-left">
          <h2 class="mb-2" v-text="$t('cvPlaceholder.skills')" />
          <div v-for="(skill, i) in skills" :key="i">
            <p class="skill-name">{{skill.title}}</p>
            <div class="progress mb-2">
              <div class="progress-bar" role="progressbar" :style="{'width': (skill.rating / 5) * 100 + '%'}">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-right">
        <!-- Profile -->
        <div v-if="accomp" class="mb-5">
          <h2 class="black" v-text="$t('cvPlaceholder.profile')" />
          <p class="description" v-html="accomp" />
        </div>
        <!-- Work history -->
        <div v-if="workHistory.length && workHistory[0].jobTitle" class="mb-5">
          <h2 class="black mb-3" v-text="$t('cvPlaceholder.work')" />
          <div v-for="(work, i) in workHistory" :key="i">
            <h3 class="subtitle">
              {{work.jobTitle}} - {{work.employer}}
              <br>
              <span v-if="work.date && work.date.from">{{work.date.from | toDate}} - </span>
              <span v-if="work.date && work.date.to && !work.date.present">{{work.date.to | toDate}}</span>
              <span v-if="work.date.present">{{ $t('cvPlaceholder.currentWork') }}</span>
            </h3>
            <p class="description" v-html="work.description" />
          </div>
        </div>
        <!-- Education -->
        <div v-if="education.length && education[0].schoolName" class="mb-5">
          <h2 class="black mb-3" v-text="$t('cvPlaceholder.education')" />
          <div v-for="(school, i) in education" :key="i" class="mb-2">
            <h3 class="subtitle">{{school.degree}} <span v-if="school.degree">-</span> {{school.schoolName}} <br> <span class="black">{{school.schoolLocation}}</span> <br v-if="school.schoolLocation"><span>{{school.date.from }} - {{ school.date.to }}</span></h3>
          </div>
        </div>
        <!-- Languages -->
        <div v-if="languages.length !== 0">
          <h2 class="black" v-text="$t('cvPlaceholder.languages')" />
          <h4 v-for="(lang, i) in languages" :key="i">{{lang.title}} {{lang.langLevel}} </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      }, )
    }
  },
  computed: {
    locale() {
      return this.$store.state.domain.locale
    }
  },
  filters: {
    toDate(val) {
      return val.toString().split('T')[0]
    }
  },
  watch: {
    color: {
      handler(val){
        console.log(val);
      },
      deep: true
    },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.black {
  color: #000 !important;
}

.template {
  display: flex;
  background-color: #fff;
  color: rgb(17, 17, 17);
  width: 100%;
  word-break: break-all;
  position: relative;
  // --cv-color: rgb(62, 83, 75);
  --cv-color: #91976f;
}

.col-left {
  display: flex;
  flex-direction: column;
  width: 35%;
  min-height: 29.6cm;
  flex-shrink: 0;  
  padding: 40px 30px 30px 30px;
  background-color: var(--cv-color);
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 90px;
    height: 90px;
    border-radius: 9999px;
    overflow: hidden;
    margin-bottom: 0.7rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    font-size: 19px;
    margin-bottom: 0.8rem;
    color: #fff;
    text-transform: capitalize;
  }

  .line {
    width: 20px;    
    height: 1px;
    margin-bottom: 0.8rem;
    background-color: #fff;
  }

  .profession {
    letter-spacing: .07rem;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

h2 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 0.3rem;
  text-transform: capitalize;
  font-weight: bold;
  font-family: serif;
  &.black {
    font-size: 18px;
    color: #000;
  }
}

h4 {
  font-size: 12px;
}

.details {
  p {
    color: #fff;
    font-size: 12px;
    margin-bottom: 0;
  }
}

.skill-name {
  font-size: 13px;
  color: #fff;
  margin-bottom: 0.1rem;
}

.progress {
  border-radius: 0;
  height: 2px;
  background-color: rgba(255,255,255,0.2);
  .progress-bar {
    background-color: #fff;
  }
}

.col-right {
  text-align: left;
  flex-grow: 1;
  padding: 40px 40px 20px 30px;
  p {
    font-size: 10px;
  }
}

.subtitle {
  font-size: 14px;
  margin-bottom: 0;
  span {
    font-size: 8px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(167, 167, 167);
  }
}

p.description {
  font-size: 10px;
  word-break: break-word;
}
</style>
