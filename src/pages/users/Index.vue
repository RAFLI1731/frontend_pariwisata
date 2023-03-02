<template>
    <q-page>
    <div class="q-pa-xl" v-if="$q.screen.xl || $q.screen.md || $q.screen.lg">
        <q-carousel
        style="height: 700px;"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        class="text-blue"
        control-color="orange"
        control-text-color="grey-8"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="1" img-src="~assets/bg/eva.png" />
        <q-carousel-slide :name="2" img-src="~assets/bg/holiday.jpg" />
        <q-carousel-slide :name="3" img-src="~assets/bg/psaran.jpg" />
        <!-- <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
        </q-carousel>
    </div>
    <div class="bg-dots q-ml-xl q-pa-xl q-mr-xl">
        <div class="row items-start" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="col-md-2">
                <p style="font-size: 30px; font-family: 'Times New Roman', Times, serif; color: gray;">What<span style="margin-top: -5px">We</span><span style="margin-top:-5px">Do</span></p>
            </div>
            <div class="col-md-2">
                <q-icon name="domain" size="10.4em"></q-icon>
                <p style="font-size: 30px; font-weight: bold;">Architecture</p>
                <p style="max-width: 250px;">
                    First stages in a project are very important to understand your client´s needs. With many different tools we approach.
                </p>
            </div>
            <div class="col-md-2 q-ml-xl">
                <q-icon name="domain" size="10.4em"></q-icon>
                <p style="font-size: 30px; font-weight: bold;">Interior design</p>
                <p style="max-width: 250px;">
                    First stages in a project are very important to understand your client´s needs. With many different tools we approach.
                </p>
            </div>
            <div class="col-md-2 q-ml-xl">
                <q-icon name="domain" size="10.4em"></q-icon>
                <p style="font-size: 30px; font-weight: bold;">Plants</p>
                <p style="max-width: 250px;">
                    First stages in a project are very important to understand your client´s needs. With many different tools we approach.
                </p>
            </div>
        </div>
        
    </div>
    <!-- carousel mobile -->
    <div v-if="$q.screen.sm || $q.screen.xs">
        <q-carousel
        style="height: 500px;"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        class="text-blue"
        control-color="orange"
        control-text-color="grey-8"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="1" img-src="~assets/bg/eva.png" style="width: 1080px;"/>
        <q-carousel-slide :name="2" img-src="~assets/bg/holiday.jpg" style="width: 1080px;"/>
        <q-carousel-slide :name="3" img-src="~assets/bg/psaran.jpg" style="width: 1080px;"/>
        <!-- <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
        </q-carousel>
    </div>
    <!-- Berita Terbaru -->
    <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl" class="q-pl-xl" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
        <h3>Headline News</h3>
    </div>
    <div v-if="$q.screen.sm || $q.screen.xs " class="text-center" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
        <h4>Headline News</h4>
    </div>
    <q-scroll-area v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 450px; width: 97%;">
        <div class="row no-wrap" >
        <div v-for="(berita, i) in dataHeadline" :key="i">
            <q-btn no-caps flat no-ripple class="q-ml-lg huruf" @click="openDetail(berita)">
            <q-card class="myCard text-left" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+berita.image" style="height: 400px;" class="card"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4" style="opacity: 1;">{{ berita.nama_headline }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openDetail(berita)"/>
                </div>
            </q-card>
            </q-btn>
        </div>
        </div>
    </q-scroll-area>
    <!-- Berita Mobile -->
    <q-scroll-area v-if="$q.screen.sm || $q.screen.xs"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 450px; width: 95%;">
        <div class="row no-wrap" >
        <div v-for="(berita, i) in dataHeadline" :key="i">
            <q-btn no-caps flat no-ripple class="huruf" @click="openDetail(berita)">
            <q-card class="text-left" style="width: 350px;" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+berita.image" style="height: 400px;" class="card"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4" style="opacity: 1;">{{ berita.nama_headline }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openDetail(berita)"/>
                </div>
            </q-card>
            </q-btn>
        </div>
        </div>
    </q-scroll-area>

    <!-- Destinasi Wisata -->
    <div v-if="$q.screen.sm || $q.screen.xs" class="text-center" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">
        <h4>Destinasi Wisata</h4>
    </div>
    <div v-if="$q.screen.xl || $q.screen.md || $q.screen.lg" class="q-pl-xl" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">
        <h3>Destinasi Wisata</h3>
    </div>
    <q-scroll-area v-if="$q.screen.xl || $q.screen.md || $q.screen.lg"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 650px; width: 97%;">
        <div class="row no-wrap" >
        <div v-for="(movie, i) in data" :key="i">
            <q-btn no-caps flat no-ripple class="q-ml-lg huruf" @click="openWisata(movie)">
            <q-card class="text-left myCard" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+movie.image" style="height: 600px;" class="card"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4">{{ movie.nama_wisata }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openWisata(movie)"/>
                </div>
            </q-card>
        </q-btn>
        </div>
        </div>
    </q-scroll-area>
        <q-scroll-area v-if="$q.screen.sm || $q.screen.xs"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 650px; width: 95%;">
        <div class="row no-wrap" >
        <div v-for="(movie, i) in data" :key="i">
            <q-btn no-caps flat no-ripple class="huruf" @click="openWisata(movie)">
            <q-card class="text-left myCard" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+movie.image" style="height: 600px; width: 350px;"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4">{{ movie.nama_wisata }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openWisata(movie)"/>
                </div>
            </q-card>
        </q-btn>
        </div>
        </div>
    </q-scroll-area>
    <!-- Hotel -->
    <div v-if="$q.screen.sm || $q.screen.xs" class="text-center" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">
        <h4>Akomodasi Hotel</h4>
    </div>
    <div v-if="$q.screen.xl || $q.screen.md || $q.screen.lg" class="q-pl-xl" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">
        <h3>Akomodasi Hotel</h3>
    </div>
    <q-scroll-area v-if="$q.screen.xl || $q.screen.md || $q.screen.lg"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 650px; width: 97%;">
        <div class="row no-wrap" >
        <div v-for="(hotel, i) in dataHotel" :key="i">
            <q-btn no-caps flat no-ripple class="q-ml-lg huruf" @click="openHotel(hotel)">
            <q-card class="text-left myCard" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+hotel.image" style="height: 600px;" class="card"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4">{{ hotel.nama_hotel }}</div>
                    <div class="text-h5">{{ hotel.jenis }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openHotel(hotel)"/>
                </div>
            </q-card>
        </q-btn>
        </div>
        </div>
    </q-scroll-area>
        <q-scroll-area v-if="$q.screen.sm || $q.screen.xs"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 650px; width: 95%;">
        <div class="row no-wrap" >
        <div v-for="(hotel, i) in dataHotel" :key="i">
            <q-btn no-caps flat no-ripple class="huruf" @click="openHotel(hotel)">
            <q-card class="text-left myCard" flat square>
                <q-img :src="'http://192.168.18.41:5000/'+hotel.image" style="height: 600px; width: 350px;"/>
                <div class="q-pa-md absolute-bottom">
                    <div class="text-h4">{{ hotel.nama_hotel }}</div>
                    <div class="text-h5">{{ hotel.jenis }}</div>
                    <q-btn label="Selengkapnya" no-caps flat class="buton" @click="openHotel(hotel)"/>
                </div>
            </q-card>
        </q-btn>
        </div>
        </div>
    </q-scroll-area>
    <!-- Footer -->
    <div class="text-center text-black q-pt-xl">
        <h3 style="font-family: Arial, Helvetica, sans-serif;">Pariwisata<span style="color: #DEB887;"> Bandar Lampung</span></h3>
    </div>
    <div class="row items-start">
        <div class="col-md-4 col-xs-12 q-pl-xl q-pr-xl text-justify">
            <div class="text-left text-black">
                <h4>Tabik Pun!!!<br> Ragom Gawi</h4>
            </div>
            <div class="text-grey" style="font-size: 20px;">
                <p>
                    merupakan motto daerah yang merupakan semboyan kerja yang bermakna bergotong royong, bekerjasama, bersatu padu dalam menggerakkan roda pembangunan dengan hati yang tulus ikhlas dan pantang menyerah dalam bekerja dan pengabdian terhadap masyarakat, bangsa dan Negara. Ragom Gawi merupakan motto daerah sebagai semboyan kerja. Secara linguistik cultural terdiri dari dua suku kata yaitu Ragom yang berarti kompak, bersatu, bersama-sama dan Gawi berarti kerja, melaksanakan tugas pengabdian.
                </p>
            </div>
        </div>
        <div class="col-md-4 col-xs-12 q-pl-xl q-pr-xl text-black">
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

    <div class="row text-black">
        <div class="col-md-4 col-xs-12 text-center" style="font-size: 30px;font-weight: bold;">
            <p>Pariwisata Bandar Lampung</p>
        </div>
        <div class="col-md-4 col-xs-6 text-center" style="margin-top: 15px">
            <p>by Lamtech</p>
        </div>
        <div class="col-md-4 col-xs-6 text-center q-pl-xl q-pr-xl" style="margin-top: 15px">
            <p>© dis.par.bdl 2023. All Rights Reserved.</p>
        </div>
    </div>
    <!-- Berita Q-dialog -->
        <q-dialog v-model="dialog" v-if="dialog" >
            <q-card class="dialog" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center q-pa-lg" style="margin-top: 50px">
                        <q-img :src="'http://192.168.18.41:5000/'+activeData.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-md">
                        <div class="float-right">
                            <q-btn icon="close" flat v-close-popup></q-btn>
                        </div>
                        <div class="text-black text-center">
                           <h5> {{ activeData.nama_headline }}</h5>
                        </div>
                        <div class="text-justify text-grey">
                            {{ activeData.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
            <q-card class="dialog" v-if="$q.screen.xs || $q.screen.sm">

                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center">
                        <div class="text-black text-center">
                           <p style="font-size: 20px; font-weight: bold;"> {{ activeData.nama_headline }}</p>
                        </div>
                        <q-img :src="'http://192.168.18.41:5000/'+activeData.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-xs">
                        <div class="text-justify text-grey">
                            {{ activeData.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    <!-- Destinasi Q-dialog  -->
        <q-dialog v-model="wisataDialog" v-if="wisataDialog" >
            <q-card class="dialog" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center q-pa-lg" style="margin-top: 50px">
                        <q-img :src="'http://192.168.18.41:5000/'+activeWisata.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-md">
                        <div class="float-right">
                            <q-btn icon="close" flat v-close-popup></q-btn>
                        </div>
                        <div class="text-black text-center">
                           <h5> {{ activeWisata.nama_wisata }}</h5>
                        </div>
                        <div class="text-justify text-grey">
                            {{ activeWisata.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
            <q-card class="dialog" v-if="$q.screen.xs || $q.screen.sm">

                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center">
                        <div class="text-black text-center">
                           <p style="font-size: 20px; font-weight: bold;"> {{ activeWisata.nama_wisata }}</p>
                        </div>
                        <q-img :src="'http://192.168.18.41:5000/'+activeWisata.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-xs">
                        <div class="text-justify text-grey">
                            {{ activeWisata.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    <!-- Hotel Q-dialog -->
        <q-dialog v-model="hotelDialog" v-if="hotelDialog">
            <q-card class="dialog" v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center q-pa-lg" style="margin-top: 50px">
                        <q-img :src="'http://192.168.18.41:5000/'+activeHotel.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-md">
                        <div class="float-right">
                            <q-btn icon="close" flat v-close-popup></q-btn>
                        </div>
                        <div class="text-black text-center">
                           <h5> {{ activeHotel.nama_hotel }}</h5>
                        </div>
                        <div class="text-grey text-center">
                           <p style="font-size: 15px; font-weight: bold;"> {{ activeHotel.jenis }}</p>
                        </div>
                        <div class="text-justify text-grey">
                            {{ activeHotel.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
            <q-card class="dialog" v-if="$q.screen.xs || $q.screen.sm">
                <q-card-section>
                <div class="row items-start">
                    <div class="col-md-6 col-xs-12 items-center">
                        <div class="text-black text-center">
                           <p style="font-size: 20px; font-weight: bold;"> {{ activeHotel.nama_hotel }}</p>
                        </div>
                        <div class="text-grey text-center">
                           <p style="font-size: 15px; font-weight: bold;"> {{ activeHotel.jenis }}</p>
                        </div>
                        <q-img :src="'http://192.168.18.41:5000/'+activeHotel.image" style="width: 100%; height: 100%;"></q-img>
                    </div>
                    <div class="col-md-6 q-pa-xs">
                        <div class="text-justify text-grey">
                            {{ activeHotel.deskripsi }}
                        </div>
                    </div>
                </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>
<script>
import { ref } from 'vue'
import { debounce } from 'quasar'
// next.addEventListener("click", goNext);
// prev.addEventListener("click", goPrev);
export default {
  name: 'Login',
  data () {
    function onScroll (position) {
    }
    return {
    data: [],
    dataHotel: [],
    dataHeadline: [],
    dialog: false,
    wisataDialog: false,
    hotelDialog: false,
    activeData: null,
    activeWisata: null,
    activeHotel: null,
    thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: 'grey',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'grey',
        width: '9px',
        opacity: 0.2
      },
      onScroll: debounce(onScroll, 200), // debounce for 200ms
      slide: ref(1),
      autoplay: ref(true) ,
    }
  },
  created () {
    this.getData()
    this.getHotel()
    this.getBerita()
  },
  methods: {
    openDetail (data) {
      this.activeData = data
    //   console.log(data)
      this.dialog = true
    },
    openWisata (wisata) {
      this.activeWisata = wisata  
    //   console.log(wisata)
      this.wisataDialog = true
    },
    openHotel (hotel) {
      this.activeHotel = hotel  
    //   console.log(wisata)
      this.hotelDialog = true
    },
    getData () {
      try {
      this.$api.get('wisata/getAll').then(res => {

        //   this.rows = res.data.data
        //   console.log(res.data.data)
        //   console.log(this.rows)
          this.data = res.data.data.map(movie=> {
            return Object.assign(movie, {
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
    getHotel () {
      try {
      this.$api.get('hotel/getAll').then(res => {

        //   this.rows = res.data.data
        //   console.log(res.data.data)
        //   console.log(this.rows)
          this.dataHotel = res.data.data.map(hotel=> {
            return Object.assign(hotel, {
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
    getBerita () {
      try {
      this.$api.get('headline/getAll').then(res => {

        //   this.rows = res.data.data
          console.log("Headline News")
          console.log(res.data.data)
        //   console.log(this.rows)
          this.dataHeadline = res.data.data.map(berita=> {
            return Object.assign(berita, {
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
.myCard {
    width: 450px;
}
.font {
    font-size: 25px;
    font-weight: 400px;
}
.lines {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.lines2 {
    text-overflow: ellipsis;
    max-lines: 2;
}
.buton {
    transition: .2s ease-in-out 0s;
}
.buton:hover {
    transform: scale(1.5);
}
.card {
    opacity: 0.6;
    transition: .2s ease-in-out 0s;
}
.card:hover {
    opacity: 2;
    /* background-color: aqua; */
    scale: 1.1;
}
.dialog {
  width:90% !important;
  max-width: 100% !important; /*this doesn't work*/
  bottom: 0px;
  height: 90% !important;
}
.huruf {
    color: black;
}
.huruf:hover {
    color: white;
}
.bg-dots {
    background: url("~assets/dots2.png") 0 0 repeat;
}
</style>

