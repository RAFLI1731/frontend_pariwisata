<template>
    <div class="bg-grey-11">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <q-btn icon="folder" disable color="black" label="Tambah Headline" no-caps flat></q-btn>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <q-btn icon="arrow_back" label="Kembali" no-caps outline color="white" class="bg-grey-5 q-mt-xs q-ml-xs q-mr-lg"></q-btn>
            </div>
        </div>
        <div class="row" style="height: 90vh">
            <div class="col-md-12 col-sm-12 col-xl-12 col-xs-12 q-pa-md" unelevated>
            <q-card flat bordered>
                <div class="q-pb-sm q-pt-md q-pl-md bg-grey-3">
                    <p style="font-size: 20px; font-weight: 500; color: blue;">Informasi Headline</p>
                </div>
                <q-card-section>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-sm">
                    <!-- <q-input outlined v-model="nama" label="Label" /> -->
                    <q-input outlined label="Nama Headline" v-model="nama_headline"
                    :rules="[ val => val && val.length > 0 || 'Lengkapi nama Headline']"
                    >
                    </q-input>
                    <q-input 
                    outlined 
                    label="Isi Headline"
                    type="textarea"
                    v-model="deskripsi"
                    :rules="[ val => val && val.length > 0 || 'Lengkapi deskripsi']"
                    >
                    </q-input>
                    <!-- <q-select outlined v-model="jenis" :options="options" label="Jenis Hotel" /> -->
                    <q-file
                        accept=".jpg, image/*"
                        outlined
                        v-model="image"
                        label="Gambar Headline"
                    >
                        <template v-slot:prepend>
                            <q-icon name="attach_file" />
                        </template>
                    </q-file>
                    <div>
                    <!-- <q-btn type="reset"  outline rounded label="Reset Data" style="width:155px" class="items-center" unelevated color="primary" /> -->
                    <!-- <q-btn color="primary" type="submit" label="Login" class="full-width"/>
                    -->
                    <q-btn type="submit" class="full-width" color="primary" label="Submit" unelevated />
                    <div class="text-center q-mt-sm q-gutter-lg">
                        <!-- <router-link class="text-black" to="/login">Belum Punya Akun? <span class="text-bold">Daftar</span></router-link> -->
                    </div>
                    </div>
                </q-form>
                </q-card-section>
            </q-card>
            </div>
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
      nama_headline: null,
      deskripsi: null,
      image: null,
    //   dense: ref(true)
      
    }
  },
  methods: {
    onSubmit () {
      try {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify({
        nama_headline: this.nama_headline,
        deskripsi: this.deskripsi,
      }))
      this.$api.post('Headline/tambah', formData).then(res => {
        console.log(res.data)
        if (res.data.code === 200) {
            this.$router.push({ name: 'headline' })
          this.$showNotif('Berhasil Upload!', 'positive')
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
