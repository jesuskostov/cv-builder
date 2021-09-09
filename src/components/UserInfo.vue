<template>
  <div>
    <form @submit.prevent="goToFormStep(2)">
        <label for="firstName">Name</label>
        <input type="text" name="firstName" id="firstName" v-model="personal.firstName" v-validate="'required'">
        <span>{{ errors.first('firstName') }}</span>
        <br>
        <br>
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" v-model="personal.lastName" v-validate="'required'">
        <span>{{ errors.first('lastName') }}</span>
        <br>
        <br>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="personal.email" v-validate="'required'">
        <span>{{ errors.first('email') }}</span>
        <br>
        <br>
        <label for="phoneNumber">Phone number</label>
        <input type="text" name="phoneNumber" id="phoneNumber" v-model="personal.phoneNumber" v-validate="'required'">
        <span>{{ errors.first('phoneNumber') }}</span>
        <br>
        <br>
        <label for="city">City</label>
        <input type="text" name="city" id="city" v-model="personal.city" v-validate="'required'">
        <span>{{ errors.first('city') }}</span>
        <br>
        <br>
        <label for="zipCode">Zip code</label>
        <input type="text" name="zipCode" id="zipCode" v-model="personal.zipCode" v-validate="'required'">
        <span>{{ errors.first('zipCode') }}</span>
        <br>
        <br>
        <label for="profession">Profession</label>
        <input type="text" name="profession" id="profession" v-model="personal.profession" v-validate="'required'">
        <span>{{ errors.first('profession') }}</span>
        <br>
        <br>
        <label for="socialProfiles">Social profiles</label>
        <input type="text" name="socialProfiles" id="socialProfiles" v-model="personal.socialProfiles" v-validate="'required'">
        <span>{{ errors.first('socialProfiles') }}</span>
        <br>
        <br>
        <button type="submit">Next</button>
    </form>  
  </div>
</template>

<script>
export default {
    data() {
        return {
            personal: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                city: '',
                zipCode: '',
                profession: '',
                socialProfiles: ''
            },
        }
    },
    methods: {
        async goToFormStep(step) {
            let res = await this.$validator.validateAll();
            if (res) {
                let personal = this.personal
                await this.$store.dispatch('savePersonal', {personal})
                this.$store.dispatch('step', {step})
            }
        },
    },
    watch: {
        personal: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('user', JSON.stringify(val))
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('user')) != null) {
            this.personal = JSON.parse(localStorage.getItem('user'));
        }
    }
}
</script>

<style>
svg.active {
    fill: #ffd06a;
}
</style>

