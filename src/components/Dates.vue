<template>
  <div class="row">
    <div class="col-md-6 mb-3">
      <div class="text-left">
        <label for="startDate" v-text="$t('work_history.from')" />
        <br />
        <date-picker
          type="month"
          :disabled-date="disabledRangeStartDate"
          :default-value="startDate"
          v-model="startDate"
          ref="startDate"
          class="w-100"
          input-class="form-control m-0"
        />
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="text-left">
        <label for="startDate" v-text="$t('work_history.to')" />
        <br />
        <date-picker
          type="month"
          :disabled-date="disabledRangeEndDate"
          :default-value="startDate"
          v-model="endDate"
          ref="endDate"
          class="w-100"
          input-class="form-control m-0"
          :disabled="checked"
        />        
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "Dates",
  components: {
    DatePicker,
  },
  props: ["dates", "checked"],
  data() {
    return {
      startDate: null,
      endDate: null,
      ageMin: 0,
      ageMax: 80,
    };
  },
  computed: {
    date() {
      return [new Date(this.startDate).toISOString().split('T')[0], new Date(this.endDate).toISOString().split('T')[0]];
    },
  },
  methods: {
    dateLimit(limit) {
      return new Date(new Date().setFullYear(new Date().getFullYear() - limit));
    },
    disabledRangeStartDate: function(date) {
      const limitStart = date < this.dateLimit(this.ageMax);

      const limitEnd = this.endDate
        ? date > this.endDate
        : date > this.dateLimit(this.ageMin);

      let limit = limitStart || limitEnd;
      return limit;
    },
    disabledRangeEndDate: function(date) {
      const limitStart = this.startDate
        ? date < this.startDate
        : date > this.dateLimit(this.ageMin);
      const limitEnd = date > this.dateLimit(this.ageMin);

      let limit = limitStart || limitEnd;
      return limit;
    },
  },
  watch: {
    // startDate(newVal, oldVal) {
    //   newVal !== oldVal && this.$refs.endDate.focus();
    // },    
    date(val) {
      this.$emit("update-date", val);
    },
  },
  filters: {
    toYear(val) {
      return val
        ? val.toLocaleDateString("en-GB", { year: "numeric", month: "2-digit" })
        : null;
    },
  },
  created() {
    this.startDate = new Date(this.dates.from);
    this.endDate = new Date(this.dates.to);
  },
};
</script>

<style scoped>
.checkbox-label {
  position: relative;
  top: -1px;
  margin-left: 5px;
}

</style>