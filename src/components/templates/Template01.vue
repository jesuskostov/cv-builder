<template>
  <div class="template">
    <div ref="inner" class="w-100 h-100 padding">
      <div class="row header">
        <div class="col-md-2 text-left">
          <img class="logo" src="../../assets/images/europass.png" alt="europass logo">
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <p class="light-blue">Curriculum Vitae</p>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-end">
          <p class="light-blue text-capitalize" v-if="personal && personal.firstName">{{personal.firstName}} {{personal.lastName}}</p>
          <p class="light-blue" v-else>Replace with First name(s) Surname(s)</p>
        </div>
      </div>
      <div class="personal-info mb-5">
        <div class="d-flex">
          <p class="title dark-blue">PERSONAL INFORMATION</p>
          <h2 v-if="personal && personal.firstName" class="text-capitalize">{{personal.firstName}} {{personal.lastName}}</h2>
          <h2 v-else>Replace with First name(s) Surname(s)</h2>
        </div>
        <div class="d-flex">
          <img v-if="personal && personal.image" :src="personal.image" alt="personal image" class="personal-img">
          <div class="text-left">
            <p class="personal-info-with-icon"><img class="small-icon pin" src="../../assets/images/pin.png" alt=""><span v-if="personal && personal.fullAddress">{{personal.fullAddress}}, {{personal.city}}, {{personal.zipCode}}, {{personal.country}}</span><span v-else>Replace with house number, street name, city, postcode, country </span></p>
            <p class="personal-info-with-icon"><img class="small-icon call" src="../../assets/images/call.png" alt=""><span v-if="personal && personal.phoneNumber">{{personal.phoneNumber}}</span><span v-else>Replace with telephone number</span></p>
            <p class="personal-info-with-icon"><img class="small-icon mail" src="../../assets/images/email.png" alt=""><span v-if="personal && personal.email">{{personal.email}}</span><span v-else>State e-mail address</span></p>
            <p class="personal-info-with-icon" v-if="personal">
              <span class="light-blue">Sex</span> <span v-if="personal.sex">{{personal.sex}}</span><span v-else>Enter sex</span>
              <span class="light-blue"> | Date of birth</span> <span v-if="personal.birthday">{{personal.birthday}}</span><span v-else>dd/mm/yyyy</span>
              <span class="light-blue"> | Nationality</span> <span v-if="personal.nationality">{{personal.nationality}}</span><span v-else>Enter nationality/-ies</span>
            </p>
          </div>
        </div>
      </div>
      <div class="work-info">
        <div class="d-flex align-items-center mb-3">
          <p class="title dark-blue mb-0">WORK EXPERIENCE</p>
          <div class="blue-line"></div>
        </div>

          <div v-if="!workHistory" class="d-flex">
            <p class="subtitle dark-blue">Replace with dates (from - to)</p>
            <div>
              <h4 class="dark-blue">Replace with occupation or position held</h4>
              <p class="work-info__info">Replace with occupation or position held</p>
              <p class="work-info__text"><span class="dot"></span> Replace with occupation or position held</p>
            </div>        
          </div>
          <div v-else v-for="(work, i) in workHistory" :key="i">
            <div class="d-flex">
              <p class="subtitle dark-blue">{{work.date[0]}} - {{work.date[1]}}</p>
              <div class="text-left">
                <h4 class="dark-blue">{{work.jobTitle}}</h4>
                <p class="work-info__info">{{work.employer}}</p>
                <p class="work-info__text" v-html="work.description" />
              </div>
            </div>
          </div>

      </div>
      <div class="work-info">
        <div class="d-flex align-items-center mb-3">
          <p class="title dark-blue mb-0">EDUCATION AND TRAINING</p>
          <div class="blue-line"></div>
        </div>
        <div v-if="education.length == 0" class="d-flex">
          <p class="subtitle dark-blue">Replace with dates (from - to)</p>
          <div>
            <h4 class="dark-blue">Replace with occupation or position held</h4>
            <p class="work-info__info">Replace with occupation or position held</p>
            <p class="work-info__text"><span class="dot"></span> Replace with occupation or position held</p>
          </div>
        </div>
        <div v-else v-for="(school, i) in education" :key="i" class="d-flex">
          <p class="subtitle dark-blue">{{school.date[0]}} - {{school.date[1]}}</p>
          <div class="text-left">
            <h4 class="dark-blue">{{school.degree}}</h4>
            <p class="work-info__info">{{school.schoolName}} - {{school.schoolLocation}}</p>
            <p class="work-info__text" v-html="school.description" />
          </div>
        </div>
      </div>
      <div class="work-info">
        <div class="d-flex align-items-center mb-3">
          <p class="title dark-blue mb-0">PERSONAL SKILLS</p>
          <div class="blue-line"></div>
        </div>
        <div class="d-flex">
          <p class="subtitle dark-blue">Mother tongues(s)</p>
          <div>
            <p v-if="motherLang" class="work-info__info">{{motherLang.title}}</p>
            <p v-else class="work-info__info">Replace with mother tongue(s)</p>
          </div>
        </div>

        <div class="language d-flex w-100">
          <h2 class="subtitle dark-blue">Other tongues(s)</h2>
          <div class="w-100">
            <div class="row border-top">
              <div class="col-md-4 border-right text-center">
                <p class="mb-0">Understanding</p>
              </div>
              <div class="col-md-6 border-right text-center">
                <p class="mb-0">Speaking</p>
              </div>
              <div class="col-md-2 text-center">
                <p class="mb-0">Writing</p>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="col-md-2 border-right">
                <p class="small">Listening</p>
              </div>
              <div class="col-md-2 border-right">
                <p class="small">Reading</p>
              </div>
              <div class="col-md-3 border-right">
                <p class="small">Spoken Interaction</p>
              </div>
              <div class="col-md-3 border-right">
                <p class="small">Spoken Production</p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
        <div v-for="(lang, i) in languages" :key="i" class="language d-flex w-100">
         <h2 class="subtitle dark-blue mb-0">{{lang.title}}</h2>
          <div class="w-100">
            <div class="row border-bottom">
              <div class="col-md-2 border-right">
                <p class="small">{{lang.langLevel}}</p>
              </div>
              <div class="col-md-2 border-right">
                <p class="small">{{lang.langLevel}}</p>
              </div>
              <div class="col-md-3 border-right">
                <p class="small">{{lang.langLevel}}</p>
              </div>
              <div class="col-md-3 border-right">
                <p class="small">{{lang.langLevel}}</p>
              </div>
              <div class="col-md-2">
                <p class="small">{{lang.langLevel}}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="skills" class="d-flex mt-4">
          <p class="subtitle dark-blue">Skills</p>
          <p class="work-info__info"><span v-for="(skill, i) in skills" :key="i">{{skill.title}}<span v-if="i != skills.length - 1">, </span> </span></p>
        </div>
        <div v-if="licenses" class="d-flex">
          <p class="subtitle dark-blue">Driving licenses</p>
          <p class="work-info__info"><span v-for="(license, i) in licenses" :key="i">{{license.title}}<span v-if="i != licenses.length - 1">, </span> </span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template01",
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
      type: String
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
}

.padding {
  padding: 40px;
}

.logo {
  width: 70%;
}

.header {
  margin-bottom: 40px;
  p {
    font-size: 0.875rem;
    margin-bottom: 0;
    &.small {
      margin-bottom: 0;
    }
  }
}

.title {
  width: 160px;
  text-align: right;
  font-size: 12px;
  margin-right: 17px;
  flex-shrink: 0;
}

.subtitle {
  width: 150px;
  text-align: right;
  font-size: 11px;
  margin-right: 26px;
  flex-shrink: 0;
}

h2 {
  font-size: 15px;
}

h4 {
  font-size: 0.9rem;
}

.personal-img {
  position: relative;
  right: -9px;
  width: 95px;
  height: 110px;
  margin-left: 55px;
  margin-right: 27px;
  background-color: gray;
  object-fit: cover;
}

.small-icon {
  width: 14px;
  height: 14px;
  margin-right: 10px;
  &.pin {
    margin-left: 3px;
    width: 10px;
  }
  &.mail {
    width: 14px;
    height: 11px;
  }
}

.personal-info-with-icon {
  font-size: 11px;
  margin-bottom: 0.6rem;
}

.work-info {
  &__info {
    text-align: left;
    font-size: 10px;
    margin-bottom: 0.4rem;
  }
  &__text {
    text-align: left;
    font-size: 10px;
    .dot {
      position: relative;
      top: -0.1rem;
      display: inline-block;
      width: 2px;
      height: 2px;
      background-color: black;
    }
  }
}

.language {
  p {
    text-align: center;
    font-size: 12px;
    margin-bottom: 0;
    &.small {
      font-size: 9px;
    }
  }
}

.blue-line {
  position: relative;
  width: 100%;
  background-color: #1493CB;
  height: 1px;
  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #1493CB;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.dark-blue {
  color: #0E4194;
}

.light-blue {
  color: #1493CB;
}

</style>
