<template>
  <div>
      <footer>
          <div class="container">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start">
                  <div class="text-center text-md-left">
                      <p>© QuickCV.com 2021. All Rights Reserved.</p>
                      <p>Lanonium B.V. ; Veembroederhof 281, <br>1019HD Amsterdam, Netherlands</p>
                  </div>
                  <div>
                      <router-link to="/">Terms of Service</router-link>
                      <router-link to="/">Privacy Policy</router-link>
                      <router-link to="/">Cookie Policy</router-link>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
    padding-top: 2.5rem;
    padding-bottom: 3.5rem;
    background-color: #fff;
    p {
        font-size: 0.8rem;
        color: #707070;
        font-weight: bold;
    }
    a {
        font-size: 0.8rem;
        color: #707070;
        font-weight: bold;
        margin-right: 1.8rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>