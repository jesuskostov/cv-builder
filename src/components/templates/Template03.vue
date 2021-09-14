<template>
  <div class="template">
    <div v-if="personal" class="text-left">
      <h1>{{personal.firstName}} <br>{{personal.lastName}}</h1>
      <p class="profession">{{personal.profession}}</p>
    </div>
    <div v-if="personal" class="info">
      <!-- LEFT SIDE -->
      <div class="text-left pt-3 border-right pr-5">
        <h2 class="mb-3">DETAILS</h2>
        <div class="box">
          <h3>Address</h3>
          <p>{{personal.city}}, {{personal.zipCode}}</p>
        </div>
        <div class="box">
          <h3>Phone</h3>
          <p>{{personal.phoneNumber}}</p>
        </div>
        <div class="box mb-5">
          <h3>Email</h3>
          <p>{{personal.email}}</p>
        </div>
        <div v-if="skills" class="box mb-5">
          <h2 class="mb-3">Skills</h2>
          <div v-for="(skill, i) in skills" :key="i">
            {{skill.title}}
            <div class="progress mb-2">
              <div class="progress-bar" role="progressbar" :style="{'width': (skill.rating / 5) * 100 + '%'}">
                <span class="sr-only">70% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="languages" class="box">
          <h2 class="mb-3">Languages</h2>
          <div v-for="(lang, i) in languages" :key="i">
            {{lang.title}}
            <div class="progress mb-2">
              <div class="progress-bar" role="progressbar" :style="{'width': (lang.rating / 5) * 100 + '%'}">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT SIDE -->
      <div class="text-left pt-3 pl-5">
        <div class="border-bottom mb-4">
          <h2 class="mb-3">Profile</h2>
          <p>{{accomp}}</p>
        </div>
        <div class="border-bottom mb-4 right-side">
          <h2 class="mb-3">Employment History</h2>
          <div class="mb-5">
            <div v-for="(work, i) in workHistory" :key="i" class="mb-4">
              <div class="d-flex justify-content-between">
                <h3>{{work.jobTitle}}</h3>
                <p class="mb-1">At {{work.employer}}</p>
              </div>
              <p class="mb-0">{{work.startDate}} - <span v-if="work.currentlyWork == true">Working here now</span> <span v-else>{{work.endDate}}</span></p>
              <p>{{work.description}}</p>
            </div>
          </div>
          <div class="mb-5">
            <h2 class="mb-3">Education</h2>
            <div v-for="(school, i) in education" :key="i">
              <div class="d-flex justify-content-between">
                <h3>{{school.schoolName}}</h3>
                <p>At {{school.schoolLocation}}</p>
              </div>
              <p class="mb-0">{{school.startDate}} - {{school.endDate}}</p>
              <p>{{school.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template03",
  props: {
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
  width: 1024px;
  padding: 50px;
  background-color: #fff;
  color: green;
  margin: 30px;
}
h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  line-height: 1;
}
span {
  font-weight: 400;
}
.info {
  display: flex;
  border-top: 1px solid gray;
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .box {
    text-align: left;
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 0.9rem;
      color: gray;
      font-weight: bold;
    }
  }
}
.profession {
  color: gray;
  font-weight: bold;
  font-size: 1.2rem;
}
.progress {
  border-radius: 0;
  height: 6px;
  .progress-bar {
    background-color: #000;
  }
}
.right-side {
  h3 {
    font-size: 1.4rem;
  }
}
</style>
