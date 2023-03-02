<template>
    <q-page class="bg-blue-grey-1">
        <!-- <div class="bg">
            <div class="q-pa-md">
                <div class="row">
                    <q-icon name="description" size="32px" color="white" style="margin-top: 5px; margin-right: 10px;"/>
                    <p class="font">User</p>
                </div>
                <p class="fontKecil jarak">Daftar User</p>
                <div class="full-width bg-grey-8 q-pa-sm text-center text-white" style="border-radius: 10px 10px 10px 10px;">
                    <p class="font q-mt-sm">Dashboard / User</p>
                </div>
            </div>
        </div> -->
        <div class="row items-start q-gutter-lg q-ma-md flex flex-center">
            <q-card class="col-md-3 col-xs-12 text-center q-ma-md" flat>
                <h5 class="text-blue">Selamat Datang Admin Pariwisata Bandar Lampung!</h5>
                <q-img src="~assets/dispar.png" style="width: 50%; margin-bottom: 20px;">
                </q-img>
            </q-card>
            <div class="col-md-4 col-xs-12 q-ma-md">
            <q-card class="text-center" flat>
                <div class="row flex flex-center q-ma-md">
                    <h6 class="text-blue">Destinasi Wisata!</h6>
                    <q-space></q-space>
                    <q-icon name="fa-solid fa-mountain-sun" size="xl" color="grey"></q-icon>
                </div>
                <div>
                    <q-btn :to="{ name: 'wisata' }" class="full-width bg-grey-2 text-blue" no-caps unelevated label="Selengkapnya"></q-btn>
                </div>
            </q-card>
            <q-card class="text-center" flat>
                <div class="row flex flex-center q-ma-md">
                    <h6 class="text-blue">Akomodasi Hotel!</h6>
                    <q-space></q-space>
                    <q-icon name="fa-solid fa-hotel" size="xl" color="grey"></q-icon>
                </div>
                <div>
                    <q-btn :to="{ name: 'hotel' }" class="full-width bg-grey-2 text-blue" no-caps unelevated label="Selengkapnya"></q-btn>
                </div>
            </q-card>
            </div>
            <div class="col-md-4 col-xs-12 q-ma-md">
            <q-card class="text-center" flat>
                <div class="row flex flex-center q-ma-md">
                    <h6 class="text-blue">Amenitas!</h6>
                    <q-space></q-space>
                    <q-icon name="fa-solid fa-cash-register" size="xl" color="grey"></q-icon>
                </div>
                <div>
                    <q-btn :to="{ name: 'amenitas' }" class="full-width bg-grey-2 text-blue" no-caps unelevated label="Selengkapnya"></q-btn>
                </div>
            </q-card>
            <q-card class="text-center" flat>
                <div class="row flex flex-center q-ma-md">
                    <h6 class="text-blue">Ekonomi Kreatif!</h6>
                    <q-space></q-space>
                    <q-icon name="fa-solid fa-money-bills" size="xl" color="grey"></q-icon>
                </div>
                <div>
                    <q-btn :to="{ name: 'ekraf' }" class="full-width bg-grey-2 text-blue" no-caps unelevated label="Selengkapnya"></q-btn>
                </div>
            </q-card>
            </div>
        </div>
    </q-page>
</template>
<script>
import { ref } from 'vue'
const columns = [
  { name: 'no', align: 'Left', label: 'No', field: 'no' },
  { name: 'nama_user', align: 'Left', label: 'Nama User', field: 'nama_user' },
  { name: 'email', align: 'Left', label: 'Email', field: 'email' },
  { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' },
]

export default {
  data () {
    return {
      columns,
      rows : [],
      filterData: null,
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 10,
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
      this.$api.get('user/getalluser').then(res => {

          this.rows = res.data.data
          console.log(res.data.data)
          console.log(this.rows)
        //
        //    console.log(this.rows)
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
    deleteMovie (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete(`user/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
      })
    }
  },
}
</script>

<style>
.bg {
    width: 100%;
    height: 300px;
    background-color: rgba(128, 128, 128, 0.744);
}
.font {
    color: white;
    font-size: 30px;
    font-weight: 450;
}
.jarak {
    margin-top: -20px;
}
.fontKecil {
    color: white;
    font-size: 20px;
    font-weight: 200;
    color: rgba(144, 144, 144, 0.611);
}
.rowNumber::before {
  counter-increment: cssRowCounter;
  content: counter(cssRowCounter) ". ";
}
</style>