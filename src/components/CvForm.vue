<template>
  <div>
    <form v-if="form_step == 1" @submit.prevent="goToFormStep(2)">
        <label for="firstName">Name</label>
        <input type="text" name="firstName" id="firstName" v-model="info.firstName" v-validate="'required'">
        <span>{{ errors.first('firstName') }}</span>
        <br>
        <br>
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" v-model="info.lastName" v-validate="'required'">
        <span>{{ errors.first('lastName') }}</span>
        <br>
        <br>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="info.email" v-validate="'required'">
        <span>{{ errors.first('email') }}</span>
        <br>
        <br>
        <label for="phoneNumber">Phone number</label>
        <input type="text" name="phoneNumber" id="phoneNumber" v-model="info.phoneNumber" v-validate="'required'">
        <span>{{ errors.first('phoneNumber') }}</span>
        <br>
        <br>
        <label for="city">City</label>
        <input type="text" name="city" id="city" v-model="info.city" v-validate="'required'">
        <span>{{ errors.first('city') }}</span>
        <br>
        <br>
        <label for="zipCode">Zip code</label>
        <input type="text" name="zipCode" id="zipCode" v-model="info.zipCode" v-validate="'required'">
        <span>{{ errors.first('zipCode') }}</span>
        <br>
        <br>
        <label for="profession">Profession</label>
        <input type="text" name="profession" id="profession" v-model="info.profession" v-validate="'required'">
        <span>{{ errors.first('profession') }}</span>
        <br>
        <br>
        <label for="socialProfiles">Social profiles</label>
        <input type="text" name="socialProfiles" id="socialProfiles" v-model="info.socialProfiles" v-validate="'required'">
        <span>{{ errors.first('socialProfiles') }}</span>
        <br>
        <br>
        <button type="submit">Next</button>
    </form>  
    <form v-if="form_step == 2" @submit.prevent="goToFormStep(3)">

        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
        <br>
        <br>
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
        <br>
        <br>
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
        <br>
        <br>
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
        <br>
        <br>
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
        <br>
        <br>
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" id="jobTitle" v-validate="'required'">
        <span>{{ errors.first('jobTitle') }}</span>
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
            form_step: 1,
            info: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                city: '',
                zipCode: '',
                profession: '',
                socialProfiles: ''
            },
            workHistory: []
        }
    },
    methods: {
        goToFormStep(step) {
            this.$validator.validateAll().then(res => {
                if (res) {
                    this.form_step = step
                }
            })
        }
    },
    watch: {
        info: {
            handler(val){
                localStorage.setItem('user', JSON.stringify(val))
            },
            deep: true
        }
    },
    mounted() {
        this.info = JSON.parse(localStorage.getItem('user'));
    }
}
</script>

<style>

</style>

