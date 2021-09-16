<template>
  <div class="template">
    <div v-if="!preview">
      <div v-if="personal" class="header">
        <h1>{{personal.firstName}} {{personal.lastName}}</h1>
        <p class="profession">{{personal.profession}}</p>
      </div>
      <div v-if="personal" class="info">
        <!-- LEFT SIDE -->
        <div class="mb-5">
          <h3>Details</h3>
          <p>{{personal.zipCode}}, {{personal.city}},</p>
          <p>{{personal.email}}</p>
          <p>{{personal.phoneNumber}}</p>
        </div>
        <div class="mb-5">
          <h3>Profile</h3>
          <p>{{accomp}}</p>
        </div>
        <div class="mb-5">
          <h3>Education</h3>
          <div v-for="(school, i) in education" :key="i" class="mb-4">
            <h4>{{school.schoolName}}, {{school.schoolLocation}}</h4>
            <p class="mb-0">{{school.startDate}} - {{school.endDate}}</p>
            <p>{{school.description}}</p>
          </div>
        </div>
        <div class="mb-5">
          <h3>Employment History</h3>
          <div v-for="(work, i) in workHistory" :key="i" class="mb-4">
            <h4>{{work.jobTitle}}, {{work.employer}}</h4>
            <p class="mb-0">{{work.startDate}} - <span v-if="work.currentlyWork == true">Working here now</span> <span v-else>{{work.endDate}}</span></p>
            <p>{{work.description}}</p>
          </div>
        </div>
        <div class="html2pdf__page-break"/>
        <div class="text-left">
          <div v-if="skills" class="box mb-5">
            <h2 class="mb-3">Skills</h2>
            <div class="row">
              <div v-for="(skill, i) in skills" :key="i" class="col-md-6">
                <p>{{skill.title}}</p>
                <div class="progress mb-2">
                  <div class="progress-bar" role="progressbar" :style="{'width': (skill.rating / 5) * 100 + '%'}">
                    <span class="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="languages" class="box">
            <h2 class="mb-3">Languages</h2>
            <div class="row">
              <div v-for="(lang, i) in languages" :key="i" class="col-md-6">
                <p>{{lang.title}}</p>
                <div class="progress mb-2">
                  <div class="progress-bar" role="progressbar" :style="{'width': (lang.rating / 5) * 100 + '%'}">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img v-else class="template-preview" src="../../assets/images/cv-templates/cv-template-2.png" alt="">
  </div>
</template>

<script>
export default {
  name: "Template02",
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
    // interests: {
    //   type: Array
    // },
    accomp: {
      type: String
    },
    templateName: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.template {
  width: 100%;
  background-color: #fff;
  color: #000;
  // margin: 0 30px;
}

.header {
  text-align: left;
  padding: 30px 30px 10px 30px;
  background-color: #FEE14B;
  width: 100%;
}

.profession {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2rem;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 4rem;
  margin-bottom: 0;
  line-height: 1;
}

.info {
  text-align: left;
  padding: 30px 20px 40px 20px;
  border-top: 1px solid gray;
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    text-transform: uppercase;
  }  
  h3 {
    padding: 5px 20px;
    display: inline-block;
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: bold; 
  }
  p {
    font-size: 0.9rem;
    color: #000;
    margin-bottom: 0;
  }  
}
.progress {
  border-radius: 0;
  height: 6px;
  .progress-bar {
    background-color: #000;
  }
}
</style>
