<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" color="grey"/>
        <q-toolbar-title style="font-family:customfont" class="text-h5">One Center</q-toolbar-title>
          <q-btn-dropdown flat label="Administrator" icon="manage_accounts" left stretch class="text-grey">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-btn outline color="primary" label="Profile" clickable :to="{ name: 'profile' }" size="sm" icon="manage_accounts" left />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="statics/img/gapari.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Administrator</div>

                <q-btn
                  color="danger"
                  label="Logout"
                  flat
                  size="sm"
                  v-close-popup
                  @click="confirm = true"
                />

              </div>
            </div>

          </q-btn-dropdown>
        </q-toolbar>
    </q-header>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_very_dissatisfied" text-color="primary" />
          <span class="q-ml-sm">Apakah anda yakin untuk keluar ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat @click="logout()" label="Logout" color="primary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(100% - 100px); border-right: 1px solid #ddd">
          <div style="height: 140px;" class="bgNav flex flex-center">
            <q-avatar size="120px">
              <img src="~assets/dispar.png" class="q-pa-sm">
            </q-avatar>
          </div>
          <q-list padding>
            <q-item clickable :to="{ name: 'dashboardAdmin' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'user' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-person" />
              </q-item-section>

              <q-item-section>
                User
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'wisata' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-mountain-sun" />
              </q-item-section>

              <q-item-section>
                Wisata
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'hotel' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-hotel" />
              </q-item-section>

              <q-item-section>
                Hotel
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'amenitas' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-cash-register" />
              </q-item-section>

              <q-item-section>
                Amenitas
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'ekraf' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-money-bills" />
              </q-item-section>

              <q-item-section>
                Ekonomi Kreatif
              </q-item-section>
            </q-item>
            </q-list>
            <q-list class="rounded-borders">
              <q-item clickable :to="{ name: 'headline' }" v-ripple style="color: #000000c5">

              <q-item-section avatar>
                <q-icon name="fa-solid fa-newspaper" />
              </q-item-section>

              <q-item-section>
                Headline
              </q-item-section>
            </q-item>
            </q-list>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-3">
        <q-toolbar>
          <q-toolbar-title class="text-h6 text-body1" style="font-size:13px; color: #000000c5">Copyright 2021</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      confirm: false
    }
  },
  methods: {
    logout () {
      LocalStorage.remove('user', { path: '/auth' })
      this.$router.go({ name: 'signin' })
    }
  }
}
</script>
<style>
.bgNav {
  background-image: url("~assets/pantai.jpg");
  width: 100%;
  height: auto;
  background-size: cover;
  color: #000000c5;
  /* border: 1px solid red; */
}
</style>
