<template>
  <img src="~assets/gelombang.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/inventory.png" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/lockk.png" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h3>Welcome</h3>
              <!-- <h5>Inventory Aplikasi</h5> -->
              <!-- <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2> -->
            </div>
          </div>
            <p class="text-center text-grey">
              Aplikasi ini dibuat dengan Quasar Framework dan aplikasi ini bertujuan untuk pengelolaan aplikasi
            </p>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-sm">
            <q-input label="Email" v-model="email"
             :rules="[ val => val && val.length > 0 || 'Lengkapi data email']"
            >
            </q-input>
            <q-input label="Password" type="password" v-model="password"
             :rules="[ val => val && val.length > 0 || 'Lengkapi data password']"
            >
            </q-input>
            <div>
              <!-- <q-btn type="reset"  outline rounded label="Reset Data" style="width:155px" class="items-center" unelevated color="primary" /> -->
              <!-- <q-btn color="primary" type="submit" label="Login" class="full-width"/>
               -->
                <q-btn type="submit" class="full-width" color="primary" label="Sign in now" unelevated />
              <div class="text-center q-mt-sm q-gutter-lg">
                <!-- <router-link class="text-black" to="/login">Belum Punya Akun? <span class="text-bold">Daftar</span></router-link> -->
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { LocalStorage } from 'quasar'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    onSubmit () {
      console.log("hai")
      try {
      this.$api.post('user/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res.data.data)
        if (res.data.code == 200) {
          console.log('berhasil')
          console.log(res.data.data)
          this.$showNotif('Berhasil Login!', 'positive')
          LocalStorage.set('user', res.data.data)
          this.$router.push({ name: 'dashboard' })
        } else {
          console.log('gagal')
          this.$showNotif('Gagal Login', 'negative')
          // this.$router.go({ name: 'dashboard' })
        }
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
    onReset () {
      this.email = null
      this.password = null
    }
  },
}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
