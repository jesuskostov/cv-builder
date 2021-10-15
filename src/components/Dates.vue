<template>
  <div class="row">
    <div class="col-md-6 mb-3">
      <div class="text-left">
        <label for="startDate">From</label>
        <br />
        <date-picker
          type="month"
          :disabled-date="disabledRangeStartDate"
          :default-value="startDate"
          v-model="startDate"
          ref="startDate"
          class="w-100"
        />
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="text-left">
        <label for="startDate">To</label>
        <br />
        <date-picker
          type="month"
          :disabled-date="disabledRangeEndDate"
          :default-value="startDate"
          v-model="endDate"
          ref="endDate"
          class="w-100"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "HelloWorld",
  components: {
    DatePicker,
  },
  props: ["dates"],
  data() {
    return {
      startDate: null,
      endDate: null,
      ageMin: 16,
      ageMax: 64,
    };
  },
  computed: {
    date() {
      let dateArray = [];
      this.startDate && dateArray.push(this.startDate);
      this.endDate && dateArray.push(this.endDate);
      return dateArray;
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
