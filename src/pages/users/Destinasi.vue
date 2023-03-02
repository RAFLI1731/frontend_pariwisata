<template>
    <q-page style="background-color: #272727;">
    <div class="text-center text-white q-pt-xl" style="padding-top: 100px;">
        <h3 style="font-family: Arial, Helvetica, sans-serif;">DESTINASI<span style="color: #DEB887;"> WISATA</span></h3>
        <h5 style="font-family: Arial, Helvetica, sans-serif; margin-top: -20px;">DESTINASI WISATA UNGGULAN DI KOTA BANDAR LAMPUNG</h5>
    </div>
    <div class="row items-start">
      <div class="col-md-3 col-xs-12" v-for="(wisata, i) in data" :key="i">
        <q-card class="my-card image-hover-zoom--slowmo q-ma-xs" flat square>
        <div>
            <q-img :src="'http://192.168.18.41:5000/'+wisata.image" style="height: 200px;"/>
        </div>
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ wisata.nama_wisata }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{ wisata.deskripsi }}
            </div>
            <div class="text-caption text-grey">
              {{ wisata.jenis }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat class="button_slide slide_right full-width">
              Selengkapnya
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
        <!-- Footer -->
    <div class="text-center text-white q-pt-xl">
        <h3 style="font-family: Arial, Helvetica, sans-serif;">Pariwisata<span style="color: #DEB887;"> Bandar Lampung</span></h3>
    </div>
    <div class="row items-start">
        <div class="col-md-4 col-xs-12 q-pl-xl q-pr-xl text-justify">
            <div class="text-left text-white">
                <h4>Tabik Pun!!!<br> Ragom Gawi</h4>
            </div>
            <div class="text-grey" style="font-size: 20px;">
                <p>
                    merupakan motto daerah yang merupakan semboyan kerja yang bermakna bergotong royong, bekerjasama, bersatu padu dalam menggerakkan roda pembangunan dengan hati yang tulus ikhlas dan pantang menyerah dalam bekerja dan pengabdian terhadap masyarakat, bangsa dan Negara. Ragom Gawi merupakan motto daerah sebagai semboyan kerja. Secara linguistik cultural terdiri dari dua suku kata yaitu Ragom yang berarti kompak, bersatu, bersama-sama dan Gawi berarti kerja, melaksanakan tugas pengabdian.
                </p>
            </div>
        </div>
        <div class="col-md-4 col-xs-12 q-pl-xl q-pr-xl text-white">
            <h4>Dinas Pariwisata Bandar Lampung</h4>
            <div class="font">
                <q-img src="~assets/icon/icon-architecture.png" style="width: 58px;" />
                <p>Stuktur Organisasi</p>
            </div>
            <div class="font">
                <q-img src="~assets/icon/icon-interiors.png" style="width: 58px;"/>
                <p>Visi dan Misi</p>
            </div>
            <div class="font">
                <q-img src="~assets/icon/icon-planing.png" style="width: 58px;"/>
                <p>Tugas dan Fungsi</p>
            </div>
        </div>
        <div class="col-md-4 col-xs-12 flex flex-center q-pa-xl">
            <q-img src="~assets/kantor_dispar.jpg" style="width: 100%;">
            </q-img>
        </div>
    </div>

    <div class="row text-white">
        <div class="col-md-4 col-xs-12 text-center" style="font-size: 30px;font-weight: bold;">
            <p>Pariwisata Bandar Lampung</p>
        </div>
        <div class="col-md-4 col-xs-6 text-center" style="margin-top: 15px">
            <p>by Lamtech</p>
        </div>
        <div class="col-md-4 col-xs-6 text-center" style="margin-top: 15px">
            <p>© dis.par.bdl 2023. All Rights Reserved.</p>
        </div>
    </div>
    </q-page>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    data: [],
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
      this.$api.get('wisata/getAll').then(res => {

          this.data = res.data.data.map(wisata=> {
            return Object.assign(wisata, {
              expanded: false
            })
          })
        //
        //    console.log(this.rows)
      })
      } catch (e) {
        console.error(e)
        // this.$showNotif('Terjadi kesalahan !', 'negative')
      }
    },
  }
}
</script>
<style>
.image-hover-zoom--slowmo img{
  transform-origin: 0 0;
  transition: transform .25s, visibility .25s ease-in;
}

/* The Transformation */
.image-hover-zoom--slowmo:hover img{
 transform: scale(1.3);
}

.button_slide {

  border: 2px solid hsl(34, 57%, 70%);
  border-radius: 0px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 white;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}

.slide_down:hover {
  box-shadow: inset 0 100px 0 0 #D80286;
}

.slide_right:hover {
  color: white;  
  box-shadow: inset 400px 0 0 0 hsl(34, 57%, 70%);
}

.slide_left:hover {
  box-shadow: inset 0 0 0 50px hsl(34, 57%, 70%);
}

.slide_diagonal:hover {
  box-shadow: inset 400px 50px 0 0 #D80286;
}

</style>