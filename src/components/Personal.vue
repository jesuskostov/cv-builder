<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Personal information</h1>
        <span class="line"></span>
        <p class="text">What’s the best way for employers to contact you? We suggest including an email and phone number. Also a photo will not hurt sometimes.</p>
    </div>
    <form @submit.prevent="goToFormStep(2)">
        <div class="form mb-5">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="firstName"><span class="red">*</span> Name</label>
                        <br>
                        <input type="text" class="w-100" name="firstName" id="firstName" v-model="personal.firstName" v-validate="'required'">
                        <span>{{ errors.first('firstName') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="lastName"><span class="red">*</span> Last Name</label>
                        <br>
                        <input type="text" class="w-100" name="lastName" id="lastName" v-model="personal.lastName" v-validate="'required'">
                        <span>{{ errors.first('lastName') }}</span>
                    </div>
                </div>
                <div class="col-md-12 mb-4">
                    <div class="text-left">
                        <label for="profession">Profession</label>
                        <br>
                        <input type="text" class="w-100" name="profession" id="profession" v-model="personal.profession" v-validate="'required'">
                        <span>{{ errors.first('profession') }}</span>
                    </div>
                </div>
                <div class="col-md-8 mb-4">
                    <div class="text-left">
                        <label for="city"><span class="red">*</span> City</label>
                        <input type="text" class="w-100" name="city" id="city" v-model="personal.city" v-validate="'required'">
                        <span>{{ errors.first('city') }}</span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="text-left">
                        <label for="zipCode"><span class="red">*</span> Zip code</label>
                        <br>
                        <input type="text" class="w-100" name="zipCode" id="zipCode" v-model="personal.zipCode" v-validate="'required'">
                        <span>{{ errors.first('zipCode') }}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-left">
                        <label for="phoneNumber">Phone number</label>
                        <br>
                        <input type="text" class="w-100" name="phoneNumber" id="phoneNumber" v-model="personal.phoneNumber" v-validate="'required'">
                        <span>{{ errors.first('phoneNumber') }}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-left">
                        <label for="email">Email</label>
                        <br>
                        <input type="text" class="w-100" name="email" id="email" v-model="personal.email" v-validate="'required'">
                        <span>{{ errors.first('email') }}</span>
                    </div>
                </div>
            </div>
                <!-- <label for="socialProfiles">Social profiles</label>
                <input type="text" name="socialProfiles" id="socialProfiles" v-model="personal.socialProfiles" v-validate="'required'">
                <span>{{ errors.first('socialProfiles') }}</span> -->
        </div>
        <div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
            <router-link class="go-back" to="/">Go Back</router-link>
            <button type="submit" class="custom-btn mb-3 mb-md-0">Next: Work History</button>
        </div>
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
                let personal = this.personal
                this.$store.dispatch('savePersonal', {personal})
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

.go-back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 4px 2rem;
    height: 48px;
    border-radius: 4px;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
}
</style>

