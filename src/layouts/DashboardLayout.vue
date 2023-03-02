<template>
    <q-layout>
        <q-header class="text-black" style="background-color: #E1E8D2;">
            <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-toolbar style="background-color: white; position: fixed; height: 100px;">
                    <div style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" class="q-mr-xl q-ml-xl">
                        <span style="font-size: 40px;">Pariwisata</span><span class="text-primary"> </span>BDL
                    </div>
                    <q-space />  
                    <q-tabs v-model="tab" shrink
                        active-color="brown"
                        indicator-color="brown"
                        class="text-black"
                        >
                        <q-tab name="tab1" exact> <q-btn label="Home" :to="{ name: 'userHome' }" flat></q-btn></q-tab>
                        <q-tab name="tab2"><q-btn label="Destinasi" :to="{ name: 'destinasi' }" flat></q-btn></q-tab>
                        <q-tab name="tab3"><q-btn label="Akomodasi" :to="{ name: 'destinasi' }" flat></q-btn></q-tab>
                        <q-tab name="tab4"><q-btn label="Amenitas" :to="{ name: 'destinasi' }" flat></q-btn></q-tab>
                        <q-tab name="tab5"><q-btn label="Ekraf" :to="{ name: 'destinasi' }" flat></q-btn></q-tab>
                    </q-tabs>
                    <!-- <q-btn :to="{ name: 'loginGapari' }" label="Login" outline class="jarak1" rounded style="color: #4C6B4D"/> -->
                </q-toolbar>
            </div>
            <div v-if="$q.screen.xs || $q.screen.sm">
            <q-toolbar style="position: fixed; background-color: #272727;">
            <q-btn flat @click="drawer = !drawer" round icon="menu" color="white"/>
            <q-drawer
                style="background-color: #272727;;"
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                overlay
                side="right"
            >
            <q-scroll-area class="fit">
            <q-list padding class="text-white">
            <q-item clickable :to="{ name: 'dashboardAdmin' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'user' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="fa-solid fa-person" />
              </q-item-section>

              <q-item-section>
                User
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'wisata' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="fa-solid fa-mountain-sun" />
              </q-item-section>

              <q-item-section>
                Wisata
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'hotel' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="fa-solid fa-hotel" />
              </q-item-section>

              <q-item-section>
                Hotel
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'amenitas' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="fa-solid fa-cash-register" />
              </q-item-section>

              <q-item-section>
                Amenitas
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'ekraf' }" v-ripple>

              <q-item-section avatar>
                <q-icon name="fa-solid fa-money-bills" />
              </q-item-section>

              <q-item-section>
                Ekonomi Kreatif
              </q-item-section>
            </q-item>
            </q-list>



          </q-list>
                </q-scroll-area>
            </q-drawer>
            </q-toolbar>
            </div>
        </q-header>
    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  data () {
    return {
      drawer: false,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  setup () {
    const $q = useQuasar()
    $q.screen.setSizes({ sm: 200, md: 500, lg: 1000, xl: 2000 })
    console.log($q.platform.is.ios)
    return {
      tab: ref(''),
      tab1: ref(''),
      tab4: ref(''),
      tab5: ref(''),
      tab6: ref(''),
      tab7: ref(''),
    }
  }
}
</script>
<style scoped>
.footer {
    background-color: #A2B18A;
    color: white;
}
.change_color{
    background-color: #E1E8D2;
    color:#60885E;
}
.jarak1 {
    margin-left: 300px;
}
.jarak2 {
    margin-right: 50px;
}
.mycardlogo {
    width: 70%;
    max-height: 300px;
}
.mycard {
    width: 100%;
    max-width: 400px;
}
.mycard1 {
    width: 100%;
    max-width: 400px;
}
.mycard2 {
    margin-top: 50px;
    padding-right: 20%;
    padding-left: 10%;
}
</style>