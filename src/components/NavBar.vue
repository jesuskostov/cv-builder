<template>
  <div id="nav" class="nav">
      <div class="d-flex align-items-center justify-content-between container">
        <div class="nav__logo">
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <steps v-if="steps" />
        <ul v-if="!steps" class="nav__menu">
            <router-link to="/">Browse Templates</router-link>
            <button @click="start" class="btn">Get Started</button>
        </ul>
      </div>
  </div>
</template>

<script>
import steps from '../components/Steps.vue'

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
    padding: 1.2rem 0;

    &__menu {
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
        }
        .btn {
            font-weight: bold;
            color: #fff;
            background-color: var(--primary-color);
        }
    }
}

</style>