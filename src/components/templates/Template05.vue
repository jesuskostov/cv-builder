<template>
  <div class="template" :style="`--cv-color: ${color}`">
    <div ref="inner" class="w-100 h-100 inner">
      <div class="header">
        <div v-if="personal && personal.image" class="img-box">
          <img :src="personal.image" alt="square image">
        </div>
        <div class="info">
          <h1 class="text-capitalize"><span v-if="personal && personal.firstName">{{personal.firstName}} {{personal.lastName}}</span> <span v-else v-text="$t('cvPlaceholder.name')" /></h1>
          <p v-if="personal && personal.profession" class="profession"><span v-if="personal && personal.profession">{{personal.profession}}</span><span v-else v-text="$t('cvPlaceholder.profession')" /></p>
          <p v-if="personal && personal.fullAddress" class="address"><span v-if="personal && personal.fullAddress">{{personal.fullAddress}}, {{personal.city}} {{personal.zipCode}}, {{personal.country}}</span> <span v-else>Full address</span> <br> <span v-if="personal && personal.phoneNumber">{{personal.phoneNumber}} |</span><span v-else>Phone number</span> <span v-if="personal && personal.email">{{personal.email}}</span> <span v-else>Email</span></p>
          <p class="address mt-0"><span v-if="personal && personal.socialProfiles">{{personal.socialProfiles}}</span></p>
        </div>
      </div>
      <div class="body">
        <div class="col-right">
          <div v-if="accomp" class="profile text-left mb-5">
            <h2 class="title" v-text="$t('cvPlaceholder.profile')" />
            <p class="description" v-html="accomp" />
          </div>
          <div v-if="workHistory.length && workHistory[0].jobTitle" class="work text-left mb-5">
            <h2 class="title" v-text="$t('cvPlaceholder.work')" />
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
          <div v-if="education.length && education[0].schoolName" class="education text-left">
            <h2 class="title" v-text="$t('cvPlaceholder.education')" />
            <div v-for="(school, i) in education" :key="i">
              <h3 class="subtitle">
                {{school.degree}}<span v-if="school.degree">,</span> {{school.schoolName}} - {{school.schoolLocation}}
                <br>
                <span>{{school.date.from}} - {{school.date.to}}</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-left">
          <div v-if="skills.length !== 0" class="skills text-left mb-5">
            <h2 class="title small" v-text="$t('cvPlaceholder.skills')" />
            <div v-for="(skill, i) in skills" :key="i" class="mb-2">
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
          <div v-if="languages.length !== 0" class="text-left mb-5">
            <h2 class="title small" v-text="$t('cvPlaceholder.languages')" />
            <div>
              <p class="description mb-0" v-for="(lang, i) in languages" :key="i">{{lang.title}} <b>{{lang.langLevel}}</b></p>
            </div>
          </div>
          <div v-if="personal">
            <div v-if="personal.birthday || personal.nationality || personal.family || personal.sex || motherLang.title" class="text-left">
              <h2 class="title small" v-text="$t('cvPlaceholder.personal')" />
              <div>
                <p class="description mb-1"><span v-if="personal && personal.birthday">{{ $t('cvPlaceholder.birthday') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.birthday}}</span></p>
                <p class="description mb-1"><span v-if="personal && personal.nationality">{{ $t('cvPlaceholder.nationality') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.nationality}}</span></p>
                <p class="description mb-1"><span v-if="personal && personal.family">{{ $t('cvPlaceholder.familyStatus') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.family}}</span></p>
                <p class="description mb-1"><span v-if="personal && personal.sex">{{ $t('cvPlaceholder.sex') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{personal.sex}}</span></p>
                <p class="description mb-1"><span v-if="motherLang.title">{{ $t('cvPlaceholder.motherLang') }}<span v-if="locale === 'fr'">&nbsp;</span>: {{motherLang.title}}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template05",
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
  computed: {
    locale() {
      return this.$store.state.domain.locale
    }
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
  word-break: break-all;
  position: relative;
  min-height: 29.6cm;
  --cv-color: #5182c2;
}

.inner {
  padding: 30px;
}

.header {
  display: flex;
  height: 200px;
  background-color: var(--cv-color);
}

.img-box {
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-left: 40px;
  h1 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 0;
  }
}

.profession {
  font-size: 20px;
  font-weight: 500;
}

.address {
  font-size: 14px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 0;
}

.body {
  display: flex;
}

.col-left {
  padding-top: 20px;
  flex-shrink: 0;
}

.col-right {
  padding-top: 20px;
  padding-right: 20px;
  flex-grow: 1;
}

.title {
  font-size: 20px;
  font-weight: bold;
  &.small {
    font-size: 14px;
  }
}

.description {
  font-size: 11px;
}

.subtitle {
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  span {
    font-weight: 500;
    font-size: 11px;
  }
}

.rating {
  display: flex;
  span {
    display: block;
    width: 30px;
    height: 2px;
    margin-right: 3px;
    background-color: rgb(174, 174, 174);
    &.active {
      background-color: #000;
    }
  }
}

.skill-name {
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 0;
}

</style>
