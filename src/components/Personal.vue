<template>
  <div>
    <div class="steps-title mb-5">
        <h1>Informazioni Personali</h1>
        <span class="line"></span>
        <p class="text">Qual è il miglior modo che un'azienda ha per contattarti? Ti suggeriamo di includere un'e-mail e un numero di telefono. Anche una foto non sarebbe male.</p>
    </div>
    <form @submit.prevent="goToFormStep(2)">
        <div class="form mb-5">
            <div class="row">
                <!-- IMAGE PICKER -->
                <div class="col-md-12 mb-4">
                    <div class="d-flex justify-content-center align-items-end">
                        <input type="file" class="image-input" ref="imageInput" accept="image/*" @change="onFileChange">
                        <div @click="pickImage" class="add-photo-container">
                            <img v-if="this.personal.image != null" class="personal-img" :src="this.personal.image" alt="">
                            <div v-else>
                                <img src="../assets/images/user.svg" alt="user">
                                <p>Aggiungi Foto</p>
                            </div>
                        </div>
                        <img v-if="this.personal.image != null" @click="deletePhoto" class="img-bin-icon ml-3" src="../assets/images/bin.svg" alt="bin icon">
                    </div>
                </div>
                <!-- NAME -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="name"><span class="red">*</span> Nome</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="name" id="firstName" v-model="personal.firstName" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('name') }}</span>
                    </div>
                </div>
                <!-- SURNAME -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="surname"><span class="red">*</span> Cognome</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="surname" id="surname" v-model="personal.lastName" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('surname') }}</span>
                    </div>
                </div>
                <!-- BIRTHDAY -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="birthday">Birthday</label>
                        <br>
                        <date-picker :current-value="new Date()" v-validate="`date_format:dd-MM-yyyy|date_between:01-01-1920,01-01-${new Date().getFullYear() - 10}`" name="birthday" id="birthday" class="w-100" input-class="form-control m-0" :value-type="'format'" :format="'DD-MM-YYYY'" v-model="personal.birthday" type="date" />
                        <span class="error">{{ errors.first('birthday') }}</span>
                    </div>
                </div>
                <!-- PROFESSION -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="profession">Profession</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="profession" id="profession" v-model="personal.profession" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('profession') }}</span>
                    </div>
                </div>
                <!-- FAMILY -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="family">Family</label>
                        <br>
                        <select class="w-100 custom-select" name="family" id="family" v-model="personal.family">
                            <option disable value="">Select your family status</option>
                            <option value="married">Married</option>
                            <option value="single">Single</option>
                            <option value="">Do not indicate</option>
                        </select>
                        <span class="error">{{ errors.first('family') }}</span>
                    </div>
                </div>
                <!-- SEX -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="sex">Sex</label>
                        <br>
                        <select class="w-100 custom-select" name="sex" id="sex" v-model="personal.sex">
                            <option disable value="">Select your sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="">Do not indicate</option>
                        </select>
                        <span class="error">{{ errors.first('sex') }}</span>
                    </div>
                </div>
                <!-- CITY -->
                <div class="col-md-8 mb-4">
                    <div class="text-left">
                        <label for="city"><span class="red">*</span> City</label>
                        <input type="text" class="w-100 form-control" name="city" id="city" v-model="personal.city" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('city') }}</span>
                    </div>
                </div>
                <!-- ZIP CODE -->
                <div class="col-md-4 mb-4">
                    <div class="text-left">
                        <label for="zipCode"><span class="red">*</span> Zip code</label>
                        <br>
                        <input type="number" minlength="2" class="w-100 form-control" name="zipCode" id="zipCode" v-model="personal.zipCode" v-validate="'required'">
                        <span class="error">{{ errors.first('zipCode') }}</span>
                    </div>
                </div>
                <!-- COUNTRY -->
                <div class="col-md-7 col-lg-8 mb-4">
                    <div class="text-left">
                        <label for="country"><span class="red">*</span> Country</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="country" id="country" v-model="personal.country" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('country') }}</span>
                    </div>
                </div>
                <!-- NATIONALITY -->
                <div class="col-md-5 col-lg-4 mb-4">
                    <div class="text-left">
                        <label for="nationality">Nationality</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="nationality" id="nationality" v-model="personal.nationality" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('nationality') }}</span>
                    </div>
                </div>
                <!-- FULL ADDRESS -->
                <div class="col-md-12 mb-4">
                    <div class="text-left">
                        <label for="fullAddress"><span class="red">*</span> Full Address</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="fullAddress" id="fullAddress" v-model="personal.fullAddress" v-validate="'required'">
                        <span class="error">{{ errors.first('fullAddress') }}</span>
                    </div>
                </div>
                <!-- PHONE NUMBER -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="phoneNumber"><span class="red">*</span> Phone number</label>
                        <br>
                        <input type="tel" class="w-100 form-control" name="phoneNumber" id="phoneNumber" v-model="personal.phoneNumber" v-validate="{required: true, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im }">
                        <span class="error">{{ errors.first('phoneNumber')}}</span>
                    </div>
                </div>
                <!-- EMAIL -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="email"><span class="red">*</span> Email</label>
                        <br>
                        <input type="email" class="w-100 form-control" name="email" id="email" v-model="personal.email" v-validate="'required|email'">
                        <span class="error">{{ errors.first('email') }}</span>
                    </div>
                </div>
                <!-- LINKEDING ACCOUNT -->
                <div class="col-md-12">
                    <div class="text-left">
                        <label for="socialProfiles">LinkedIn Account (Optional)</label>
                        <br>
                        <input type="text" class="form-control w-100" name="socialProfiles" id="socialProfiles" v-model="personal.socialProfiles" v-validate="'url'">
                        <span class="error">{{ errors.first('socialProfiles') }}</span>
                    </div>
                </div>
            </div>
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
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    phoneNumber: {
      required: 'The phone number format is invalid, only numbers, please.',
      regex: 'The phone number format is invalid, only numbers, please.'
    },
  },
};

Validator.localize('en', dict);

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
            disabledBefore: new Date(2019, 10, 2),
            disabledAfter: new Date(2019, 10, 6)
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
            },
            deep: true
        },
    },
    mounted() {
        // Retrieving data from localStorage
        if (JSON.parse(localStorage.getItem('user')) != null) {
            this.personal = JSON.parse(localStorage.getItem('user'));
        }
         if (this.personal.birthday) return;
        // get 18 years ago date;
        let bdate = new Date();
        bdate.setFullYear(bdate.getFullYear() - 18);
        const birthDayDefaultDate = bdate.toLocaleDateString().replace(/\//g, "-");
        this.personal.birthday = birthDayDefaultDate;
    },
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