<template>
  <div class="template">
    <div v-if="!preview">
      <div class="header">
        <h1>{{personal.firstName}} {{personal.lastName}}</h1>
        <p class="profession">{{personal.profession}}</p>
        <div class="row">
          <div class="col-md-4">
            <p><b>Phone</b>: {{personal.phoneNumber}}</p>
            <p><b>Email</b>: {{personal.email}}</p>
          </div>
           <div class="col-md-6">
            <p><b>Location</b>: {{personal.city}}, {{personal.zipCode}}</p>
          </div>
        </div>
      </div>
      <div class="inner">
        <p class="profile-text">{{accomp}}</p>
        <div class="box text-left">
          <h2>Experience</h2>
          <div v-for="(work, i) in workHistory" :key="i" class="d-flex mb-3">
            <div class="year"><b>{{work.startDate}} - {{work.endDate}}</b></div>
            <div class="work-info">
              <h3>{{work.jobTitle}} - {{work.employer}}</h3>
              <p>{{work.description}}</p>
            </div>
          </div>
        </div>
        <div class="box text-left">
          <h2>Education</h2>
          <div v-for="(school, i) in education" :key="i" class="d-flex mb-3">
            <div class="year"><b>{{school.startDate}} - {{school.endDate}}</b></div>
            <div class="work-info">
              <h3>{{school.schoolName}} - {{school.schoolLocation}}</h3>
              <p>{{school.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img v-else class="template-preview" src="../../assets/images/cv-templates/cv-template-3.png" alt="">
  </div>
</template>

<script>
export default {
  name: "Template03",
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
      default: 3,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.template {
  width: 100%;
  background-color: #fff;
  font-family: roboto;
  margin: 0 30px;
  word-break: break-all;
}

.inner {
  padding: 20px;
}

.profile-text {
  text-align: left;
}

.header { 
  text-align: left;
  background-color: #373D48;
  padding: 30px 30px 10px 30px;
  color: #fff;
  h1 {
    font-size: 4rem;
    margin-bottom: 0;
  }
  .profession {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.box {
  h2 {
    border-bottom: 1px solid gray;
    padding-bottom: 0.6rem;
  }
  .year {
    padding-top: 3px;
    margin-right: 30px;
    flex-shrink: 0;
  }
  .work-info {
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.7rem;
    }
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
