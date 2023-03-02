<template>
  <q-page class="q-pa-md">
    <div class="row items-start">
      <div class="q-pa-md col-md-3 col-xs-12" v-for="(movie, i) in data" :key="i">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ movie.nama_aplikasi }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{ movie.deskripsi }}
            </div>
            <div class="text-caption text-grey">
              {{ movie.versi }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="white full-width bg-blue">
              Reserve
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { LocalStorage } from 'quasar'

export default {
  name: 'Login',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
      this.$api.get('aplikasi/getData').then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.data = res.data.data.map(movie=> {
            return Object.assign(movie, {
              expanded: false
            })
          })
          console.log(data)
        } else {
          console.log('gagal')
          this.$showNotif('Gagal Upload', 'negative')
          // this.$router.go({ name: 'dashboard' })
        }
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
  },
}
</script>
