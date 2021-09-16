<template>
  <div class="template" :class="{'padding': !preview}">
    <div v-if="!preview" class="inner">
      <div v-if="personal" class="name">
        <h1>{{personal.firstName}} {{personal.lastName}}</h1>
        <p class="profession">{{personal.profession}}</p>
      </div>
      <div class="info">
        <div class="row">
          <div class="col-md-6 mb-5">
            <div class="box">
              <h2>Profile</h2>
              <p>{{accomp}}</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="box">
              <h2>Employment History</h2>
              <div v-for="(work, i) in workHistory" :key="i" class="education">
                <p class="year">{{work.startDate}} - {{work.endDate}}</p>
                <div class="text">
                  <h3>{{work.jobTitle}}, {{work.eployer}}</h3>
                  <p>{{work.description}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="html2pdf__page-break"/>
            <div class="box mt-5">
              <h2>Education</h2>
              <div v-for="(school, i) in education" :key="i" class="education">
                <p class="year">{{school.startDate}} - {{school.endDate}}</p>
                <div class="text">
                  <h3>{{school.schoolName}}, {{school.schoolLocation}}</h3>
                  <p>{{school.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img v-else class="template-preview" src="../../assets/images/cv-templates/cv-template-1.png" alt="">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.template {
  background-color: #fff;
  color: rgb(17, 17, 17);
  margin: 0 30px;
  width: 100%;
  position: relative;
  &.padding {
    padding: 40px;
  }
}

.inner {
  padding: 30px;
  border: 2px solid #B0672A;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 300px;
  h1 {
    font-size: 4rem;
    font-weight: 100;
    line-height: 1;
    text-transform: uppercase;
    text-align: right;
  }
}

.profession {
  text-transform: uppercase;
  font-size: 2rem;
  text-align: right;
  color: #fff;
  margin-bottom: 0;
}

span {
  font-weight: 400;
}

.progress {
  border-radius: 0;
  height: 6px;
  .progress-bar {
    background-color: #000;
  }
}

.info {
  padding-top: 270px;
}

.box {
  text-align: left;
  h2 {
    text-transform: uppercase;
    font-size: 1.7rem;
    color: #B0672A;
    margin-bottom: 1rem;
    font-weight: 100;
    letter-spacing: 4px;
  }
}

.education {
  display: flex;
  min-height: 80px;
  &:last-child {
    min-height: auto;
    .year {
      &::before {
        display: none;
      }
    }
  }
  .year {
    position: relative;
    flex-shrink: 0;
    padding-right: 20px;
    font-size: 1.1rem;
    margin-bottom: 0;
    font-weight: bold;
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 14px;
      height: 14px;
      top: 5px;
      right: -8px;
      background-color: #B0672A;
      border-radius: 9999px;
    }
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 2px;
      margin-top: 10px;
      left: 100%;
      min-height: 100%;
      background-color: #B0672A;
    }
  }
  .text {
    padding-left: 20px;
    padding-bottom: 20px;
    h3 {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 0.7rem;
      margin-bottom: 0;
    }
  }
}

</style>
