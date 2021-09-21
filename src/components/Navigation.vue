<template>
  <div id="nav" class="nav">
      <div class="d-flex align-items-center justify-content-between container">
        <div class="nav__logo">
            <router-link to="/">
                <img src="../assets/images/logo.png" alt="logo">
            </router-link>
        </div>
        <steps v-if="steps" />
        <ul v-if="!steps" class="nav__menu">
            <router-link to="/browse-templates" class="d-none d-md-block">Browse Templates</router-link>
            <router-link to="/browse-templates" class="btn">Get Started</router-link>
        </ul>
      </div>
  </div>
</template>

<script>
import steps from './Steps.vue'

export default {
    name: 'Navbar',
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
        a {
            font-weight: bold;
            color: #2c3e50;
            margin-right: 2.3rem;

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
    }
}

</style>