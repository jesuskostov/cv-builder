<template>
  <div id="nav" class="nav">
      <div class="d-flex align-items-center justify-content-between container">
        <div class="nav__logo">
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <ul class="nav__menu">
            <router-link to="/">Browse Templates</router-link>
            <router-link class="btn" to="/">Get started</router-link>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
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

            &.btn {
                color: #fff;
                background-color: var(--primary-color);
            }
        }
    }
}

</style>