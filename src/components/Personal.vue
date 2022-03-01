<template>
  <div>
    <div class="steps-title mb-5">
        <h1 v-text="$t('personal_step.title')" />
        <span class="line"></span>
        <p class="text" v-text="$t('personal_step.text')" />
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
                                <p v-text="$t('personal_step.addPhoto')" />
                            </div>
                        </div>
                        <img v-if="this.personal.image != null" @click="deletePhoto" class="img-bin-icon ml-3" src="../assets/images/bin.svg" alt="bin icon">
                    </div>
                </div>
                <!-- NAME -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="name"><span class="red">*</span> {{ $t('personal_step.name') }}</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="name" id="firstName" v-model="personal.firstName" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('name') }}</span>
                    </div>
                </div>
                <!-- SURNAME -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="surname"><span class="red">*</span> {{ $t('personal_step.surname') }}</label>
                        <br>
                        <input type="text" class="w-100 form-control" name="surname" id="surname" v-model="personal.lastName" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('surname') }}</span>
                    </div>
                </div>
                <!-- BIRTHDAY -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="birthday" v-text="$t('personal_step.birthday')" />
                        <br>
                        <date-picker :current-value="new Date()" v-validate="`date_format:dd-MM-yyyy|date_between:01-01-1920,01-01-${new Date().getFullYear() - 10}`" name="birthday" id="birthday" class="w-100" input-class="form-control m-0" :value-type="'format'" :format="'DD-MM-YYYY'" v-model="personal.birthday" type="date" />
                        <span class="error">{{ errors.first('birthday') }}</span>
                    </div>
                </div>
                <!-- PROFESSION -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="profession" v-text="$t('personal_step.profession')" />
                        <br>
                        <input type="text" class="w-100 form-control" name="profession" id="profession" v-model="personal.profession" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('profession') }}</span>
                    </div>
                </div>
                <!-- FAMILY -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="family" v-text="$t('personal_step.family')" />
                        <br>
                        <select class="w-100 custom-select" name="family" id="family" v-model="personal.family">
                            <option disable value="" v-text="$t('personal_step.familySelectText')" />
                            <option :value="$t('personal_step.single')" v-text="$t('personal_step.single')" />
                            <option :value="$t('personal_step.notSingle')" v-text="$t('personal_step.notSingle')" />
                            <option value="" v-text="$t('personal_step.notIndicate')" />
                        </select>
                        <span class="error">{{ errors.first('family') }}</span>
                    </div>
                </div>
                <!-- SEX -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="sex" v-text="$t('personal_step.sex')" />
                        <br>
                        <select class="w-100 custom-select" name="sex" id="sex" v-model="personal.sex">
                            <option disable value="" v-text="$t('personal_step.sexText')" />
                            <option :value="$t('personal_step.male')" v-text="$t('personal_step.male')" />
                            <option :value="$t('personal_step.female')" v-text="$t('personal_step.female')" />
                            <option value="" v-text="$t('personal_step.notIndicate')" />
                        </select>
                        <span class="error">{{ errors.first('sex') }}</span>
                    </div>
                </div>
                <!-- CITY -->
                <div class="col-md-8 mb-4">
                    <div class="text-left">
                        <label for="city"><span class="red">*</span> <span v-text="$t('personal_step.city')"></span></label>
                        <input type="text" class="w-100 form-control" name="city" id="city" v-model="personal.city" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('city') }}</span>
                    </div>
                </div>
                <!-- ZIP CODE -->
                <div class="col-md-4 mb-4">
                    <div class="text-left">
                        <label for="zipCode"><span class="red">*</span> <span v-text="$t('personal_step.zipCode')"></span></label>
                        <br>
                        <input type="text" class="w-100 form-control" name="zipCode" id="zipCode" v-model="personal.zipCode" v-validate="{required: true, min: 3, numeric: true}">
                        <span class="error">{{ errors.first('zipCode') }}</span>
                    </div>
                </div>
                <!-- COUNTRY -->
                <div class="col-md-7 col-lg-8 mb-4">
                    <div class="text-left">
                        <label for="country"><span class="red">*</span> <span v-text="$t('personal_step.country')"></span></label>
                        <br>
                        <input type="text" class="w-100 form-control" name="country" id="country" v-model="personal.country" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('country') }}</span>
                    </div>
                </div>
                <!-- NATIONALITY -->
                <div class="col-md-5 col-lg-4 mb-4">
                    <div class="text-left">
                        <label for="nationality" v-text="$t('personal_step.nationality')" />
                        <br>
                        <input type="text" class="w-100 form-control" name="nationality" id="nationality" v-model="personal.nationality" v-validate="'alpha_spaces'">
                        <span class="error">{{ errors.first('nationality') }}</span>
                    </div>
                </div>
                <!-- FULL ADDRESS -->
                <div class="col-md-12 mb-4">
                    <div class="text-left">
                        <label for="fullAddress"><span class="red">*</span> <span v-text="$t('personal_step.fullAddress')"></span></label>
                        <br>
                        <input type="text" class="w-100 form-control" name="fullAddress" id="fullAddress" v-model="personal.fullAddress" v-validate="{required: true}">
                        <span class="error">{{ errors.first('fullAddress') }}</span>
                    </div>
                </div>
                <!-- PHONE NUMBER -->
                <div class="col-md-6 mb-4">
                    <div class="text-left">
                        <label for="phoneNumber"><span class="red">*</span> <span v-text="$t('personal_step.phoneNumber')"></span></label>
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
                        <input type="text" class="w-100 form-control" name="email" id="email" v-model="personal.email" v-validate="{required: true, email: true}">
                        <span class="error">{{ errors.first('email') ? "Richiesto l'invio di un'e-mail" : '' }}</span>
                    </div>
                </div>
                <!-- LINKEDING ACCOUNT -->
                <div class="col-md-12">
                    <div class="text-left">
                        <label for="socialProfiles" v-text="$t('personal_step.linkedin')" />
                        <br>
                        <input type="text" class="form-control w-100" name="socialProfiles" id="socialProfiles" v-model="personal.socialProfiles" v-validate="'url'">
                        <span class="error">{{ errors.first('socialProfiles') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-end">
            <button type="submit" class="custom-btn mb-3 mb-md-0" v-text="$t('personal_step.button')" />
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
      required: 'Il formato del numero di telefono non è valido, solo numeri, per favore.',
      regex: 'Il formato del numero di telefono non è valido, solo numeri, per favore.',
    },
    email: {
        required: 'Il campo email è richiesto',
        email: 'Il campo email è richiesto'
    },
    zipCode: {
        required: 'Il codice postale è richiesto',
        min: 'Il campo del codice postale deve essere di almeno 3 caratteri',
        numeric: 'Il campo del codice postale deve essere numerico'
    },
    fullAddress: {
        required: "Il campo dell'indirizzo è richiesto",
    },
    socialProfiles: {
        url: "Il campo dei profili sociali non è un URL valido"
    }
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