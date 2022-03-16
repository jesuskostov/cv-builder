<template>
  <div>
    <div class="accordion px-4 py-4">
      <h3 v-text="$t('other_step.drivingLicense')" />
      <multiselect
        v-model="licenses"
        class="w-100"
        :options="predefined"
        :multiple="true"
        :close-on-select="true"
        :clear-on-select="false"
        :preserve-search="true"
        :select-label="`${selectLangLabel.select[`${locale}`]}`"
        :deselect-label="`${selectLangLabel.remove[`${locale}`]}`"
        @input="onChange"
        :placeholder="$t('other_step.choose')"
        label="title"
        track-by="title"
      />
      <draggable v-model="licenses" @end="drag">
        <div v-for="(license, i) in licenses" :key="i" class="box-row">
          <div class="d-flex align-items-center">
            <img class="mr-3" src="../assets/images/lines.svg" alt="lines" />
            <h4 class="mb-0">{{ license.title }}</h4>
          </div>
          <button class="action-btn mr-3" @click="deleteLicenses(i)">
            <img src="../assets/images/bin.svg" alt="bin icon" />
          </button>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      licenses: [],
      predefined: [{ title: "Auto" }, { title: "Moto" }, { title: "Aucun" }],
      selected: "",
      selectLangLabel: {
          select: {
              'en': 'Press enter to select',
              'it': 'Tasto Invio per scegliere',
              'fr': 'Touche Entrée pour choisir'
          },
          remove: {
              'en': 'Press enter to remove',
              'it': 'Premi invio per rimuovere',
              'fr': 'Appuyez sur Entrée pour supprimer'
          }
      },
    };
  },
  components: {
    draggable,
    Multiselect,
  },
  methods: {
    addNewLicenses() {
      this.licenses.push({
        title: "",
      });
    },
    deleteLicenses(i) {
      this.licenses.splice(i, 1);
    },
    drag() {
      let licenses = this.licenses;
      this.$store.dispatch("saveLicenses", { licenses });
    },
    addPredefined(int) {
      var index = this.interests.findIndex((item) => item.title == int);
      index === -1
        ? this.interests.push({ title: int, rating: 0 })
        : console.log("object already exists");
    },
    onChange(value) {
      this.value = value;

      const isNone = value.filter((item) => item.title === "None");
      if (isNone.length) {
        console.log("None is selected");
        this.licenses = [];
      }
    },
  },
  watch: {
    licenses: {
      handler(val) {
        // Saving data to localStorage
        localStorage.setItem("licenses", JSON.stringify(val));
        let licenses = this.licenses;
        this.$store.dispatch("saveLicenses", { licenses });
      },
      deep: true,
    },
  },
  computed: {
    locale() {
        return this.$store.state.domain.locale
    }
  },
  mounted() {
    // Retrieving data from localStorage
    if (
      JSON.parse(localStorage.getItem("licenses")) != null &&
      JSON.parse(localStorage.getItem("licenses")) != 0
    ) {
      this.licenses = JSON.parse(localStorage.getItem("licenses"));
    }
  },
};
</script>
