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
                <div class="col-md-12 mb-4">
                    <div class="d-flex justify-content-center align-items-end">
                        <input type="file" class="image-input" ref="imageInput" accept="image/*" @change="onFileChange">
                        <div @click="pickImage" class="add-photo-container">
                            <img v-if="this.personal.image != null" class="personal-img" :src="this.personal.image" alt="">
                            <div v-else>
                                <img src="../assets/images/user.svg" alt="user">
                                <p>Add Photo</p>
                            </div>
                        </div>
                        <img v-if="this.personal.image != null" @click="deletePhoto" class="img-bin-icon ml-3" src="../assets/images/bin.svg" alt="bin icon">
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="firstName"><span class="red">*</span> Name</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="firstName" id="firstName" v-model="personal.firstName" v-validate="'required'">
                        <span class="error">{{ errors.first('firstName') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="lastName"><span class="red">*</span> Last Name</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="lastName" id="lastName" v-model="personal.lastName" v-validate="'required'">
                        <span class="error">{{ errors.first('lastName') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="profession"><span class="red">*</span> Birthday</label>
                        <br>
                        <date-picker class="w-100 custom-h" :value-type="'format'" :format="'DD-MM-YYYY'" v-model="personal.birthday" type="date" />
                        <span class="error">{{ errors.first('profession') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="profession">Profession</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="profession" id="profession" v-model="personal.profession" v-validate="'required'">
                        <span class="error">{{ errors.first('profession') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="family"><span class="red">*</span> Family</label>
                        <br>
                        <select class="w-100 form-control" name="family" id="family" v-model="personal.family" v-validate="'required'">
                            <option disable value="">Select your family status</option>
                            <option value="married">Married</option>
                            <option value="single">Single</option>
                        </select>
                        <span class="error">{{ errors.first('family') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="sex"><span class="red">*</span> Sex</label>
                        <br>
                        <select class="w-100 form-control" name="sex" id="sex" v-model="personal.sex" v-validate="'required'">
                            <option disable value="">Select your sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        <span class="error">{{ errors.first('sex') }}</span>
                    </div>
                </div>
                <div class="col-md-8 mb-4">
                    <div class="text-left">
                        <label for="city"><span class="red">*</span> City</label>
                        <input type="text" class="w-100 form-control" name="city" id="city" v-model="personal.city" v-validate="'required'">
                        <span class="error">{{ errors.first('city') }}</span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="text-left">
                        <label for="zipCode"><span class="red">*</span> Zip code</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="zipCode" id="zipCode" v-model="personal.zipCode" v-validate="'required'">
                        <span class="error">{{ errors.first('zipCode') }}</span>
                    </div>
                </div>
                <div class="col-md-7 col-lg-8 mb-4">
                    <div class="text-left">
                        <label for="country"><span class="red">*</span> Country</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="country" id="country" v-model="personal.country" v-validate="'required'">
                        <span class="error">{{ errors.first('country') }}</span>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 mb-4">
                    <div class="text-left">
                        <label for="nationality"><span class="red">*</span> Nationality</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="nationality" id="nationality" v-model="personal.nationality" v-validate="'required'">
                        <span class="error">{{ errors.first('nationality') }}</span>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="fullAddress"><span class="red">*</span> Full Address</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="fullAddress" id="fullAddress" v-model="personal.fullAddress" v-validate="'required'">
                        <span class="error">{{ errors.first('fullAddress') }}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-left">
                        <label for="phoneNumber">Phone number</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="phoneNumber" id="phoneNumber" v-model="personal.phoneNumber" v-validate="'required'">
                        <span class="error">{{ errors.first('phoneNumber') }}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-left">
                        <label for="email">Email</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="email" id="email" v-model="personal.email" v-validate="'required'">
                        <span class="error">{{ errors.first('email') }}</span>
                    </div>
                </div>
            </div>
                <!-- <label for="socialProfiles">Social profiles</label>
                <input type="text" name="socialProfiles" id="socialProfiles" v-model="personal.socialProfiles" v-validate="'required'">
                <span>{{ errors.first('socialProfiles') }}</span> -->
        </div>
        <div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-end">
            <button type="submit" class="custom-btn mb-3 mb-md-0">Next: Work History</button>
        </div>
    </form>  
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    data() {
        return {
            personal: {
                image: null,
                firstName: '',
                lastName: '',
                birthday: '',
                email: '',
                phoneNumber: '',
                city: '',
                country: '',
                nationality: '',
                fullAddress: '',
                zipCode: '',
                profession: '',
                family: '',
                sex: '',
                socialProfiles: ''
            },
        }
    },
    components: {
        DatePicker
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
        onFileChange(e) {
            let image = e.target.files[0]
            this.createImage(image)
        },
        pickImage() {
            this.$refs.imageInput.click()
        },
        createImage(image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                this.personal.image  = reader.result;
            }
            reader.readAsDataURL(image);
        },
        deletePhoto() {
            this.personal.image = null
        }
    },
    watch: {
        personal: {
            handler(val){
                // Saving data to localStorage
                localStorage.setItem('user', JSON.stringify(val))
                let personal = this.personal
                this.$store.dispatch('savePersonal', {personal})
                // Template Preview Height
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


<style lang="scss" scoped>
.add-photo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 194px;
    height: 208px;
    border: 1px dashed #B4B8BE;
    border-radius: 4px;
    cursor: pointer;
    p {
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 0;
        color: #000;
        font-weight: bold;
    }
}

.image-input {
    display: none;
}

.personal-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.img-bin-icon {
    cursor: pointer;
}

</style>