<template>
    <div class="bg-grey-11">
        <div class="row">
            <div class="col-md-6 col-xs-6">
                <q-btn icon="folder" disable color="black" label="Tambah Wisata" no-caps flat></q-btn>
            </div>
            <div class="col-md-6 col-xs-6 text-right">
                <q-btn icon="arrow_back" label="Kembali" no-caps outline color="white" class="bg-grey-5 q-mt-xs q-ml-xs q-mr-lg"></q-btn>
            </div>
        </div>
        <div class="row" style="height: 90vh">
            <div class="col-md-12 col-sm-12 col-xl-12 col-xs-12 q-pa-md" unelevated>
            <q-card flat bordered>
                <div class="q-pb-sm q-pt-md q-pl-md bg-grey-3">
                    <p style="font-size: 20px; font-weight: 500; color: blue;">Informasi Hotel</p>
                </div>
                <q-card-section>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-sm">
                    <!-- <q-input outlined v-model="nama" label="Label" /> -->
                    <q-input outlined label="Nama Hotel" v-model="form.nama_hotel"
                    :rules="[ val => val && val.length > 0 || 'Lengkapi nama hotel']"
                    >
                    </q-input>
                    <q-input 
                    outlined 
                    label="Deskripsi hotel"
                    type="textarea"
                    v-model="form.deskripsi"
                    :rules="[ val => val && val.length > 0 || 'Lengkapi deskripsi']"
                    >
                    </q-input>
                    <q-select outlined v-model="form.jenis" :options="options" label="Jenis Hotel" />
                    <q-file
                        accept=".jpg, image/*"
                        outlined
                        v-model="image"
                        label="Gambar Hotel"
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
export default {
  data () {
    return {
      form: {
        nama_hotel: null,
        deskripsi: 0,
        jenis: null,
      },
      optionHotel: [
        'Hotel Bintang',
        'Hotel Non Bintang',
      ],
      image: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get(`hotel/getbyid/${this.$route.params.id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            console.log(res.data.data)
          if (res.data.sukses) {
            this.form = res.data.data
          } else {
            this.$router.push({ name: 'hotel' })
          }
        })
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$api.put(`hotel/edit/${this.$route.params.id}`, formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'hotel' })
          } else {
            this.$showNotif(res.data.pesan, 'negatvie')
          }
        })
    }
  }
}
</script>
<style scoped>
.left {
  width: 3px;
  height: 100%;
  background-color: rgb(89, 251, 251);
}
</style>