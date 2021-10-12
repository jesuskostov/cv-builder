<template>
  <div id="nav" class="nav">
    <div class="d-flex align-items-center justify-content-between container">
        <div class="nav__logo">
            <router-link to="/">
                <img src="../assets/images/logo.svg" alt="logo">
            </router-link>
        </div>
        <steps v-if="$route.name == 'Builder'" />
        <ul v-if="$route.name != 'Builder'" class="nav__menu" :class="{'show-nav': showNav}">
            <button @click="routeTo('/browse-templates')">Browse Templates</button>
            <button @click="routeTo('/how-to-write-cv')">How to write CV</button>
            <button @click="routeTo('/feedback')">Feedback</button>
            <button @click="routeTo('/faq')">FAQ</button>
            <button @click="routeTo('/contact')">Contact</button>
            <button @click="routeTo('/browse-templates')" class="btn">Get Started</button>
            <button v-if="showNav" @click="showNav = false" class="close-btn d-block d-lg-none">
                <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                </svg>
            </button>
        </ul>
        <button v-if="!showNav && $route.name != 'Builder'" @click="showNav = true" class="nav-btn d-block d-lg-none">
            <svg viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg">
                <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
            </svg>
        </button>
    </div>
  </div>
</template>

<script>
import steps from './Steps.vue'

export default {
    name: 'Navbar',
    data() {
        return {
            showNav: false
        }
    },
    props: {
        steps: {
            type: Boolean,
        },
    },
    components: {
        steps
    },
    methods: {
        async start() {
            let step = 1;
            await this.$store.dispatch('step', {step});
            this.$router.push('/builder');
        },
        routeTo(link) {
            this.$router.push(link).catch(() => {})
            this.showNav = false
        }
    }
}
</script>

<style lang="scss" scoped>

.nav {
    background-color: #fff;
    padding: 1.2rem 0;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.16);

    &__logo {
        img {
            @media (max-width: 575.98px) {
                width: 100%;
            }
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        a, button {
            border: 0;
            background-color: transparent;
            font-weight: bold;
            color: #2c3e50;
            margin-right: 2.3rem;

            @media (max-width: 1199.98px) { 
                margin-right: 1.3rem;
            }

            &:last-child {
                margin-right: 0;
            }

            &.router-link-exact-active {
            color: #2c3e50;
            }
            
            &.btn {
                font-weight: bold;
                color: #fff;
                background-color: var(--primary-color);
            }
        }

        @media (max-width: 991.98px) {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 999;
            background-color: #fff;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: translateX(-100%);
            transition: 0.4s;

            &.show-nav {
                transform: translateX(0);
                transition: 0.4s;
            }

            a, button {
                margin-bottom: 22px;
                margin-right: 0;
                font-size: 20px;
            }

            .btn {
                margin-top: 5%;
                width: 80%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

}

.nav-btn {
    border: 0;
    background-color: transparent;
    svg {
        width: 30px;
        height: 30px;
    }
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    svg {
        width: 25px;
        height: 25px;
    }
}

</style>