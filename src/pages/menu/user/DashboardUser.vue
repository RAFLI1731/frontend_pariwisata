<template>
    <q-page class="bg-blue-grey-1">
        <div class="bg">
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
        </div>
        <div>
            <q-card class="q-ma-xl bordered" style="margin-top: -80px">
                <div class="row bg-grey-11" style="max-height: auto;">
                    <div class="col-md-6 col-xs-6 text-blue-14 q-pl-lg q-pt-sm"><p style="font-weight: 400; font-size: 20px;">Daftar User</p></div>
                    <div class="col-md-6 col-xs-6">
                        <div v-if="$q.screen.sm || $q.screen.xs">
                            <div class="text-right q-pa-xs">
                                <q-btn icon="add" color="primary" :to="{ name: 'inputUser' }" no-caps></q-btn>
                            </div>
                        </div>
                        <div v-if="$q.screen.lg || $q.screen.xl || $q.screen.md" class="text-right">
                            <div class="text-right q-pa-xs">
                                <q-btn label="Tambah Data" color="primary" :to="{ name: 'inputUser' }" no-caps></q-btn>
                            </div>
                        </div>
                    </div>          
                </div>
                <!-- <div style="margin-top: -10px ">
                  <hr style="width:100%;text-align:left;margin-left:0; border: 0.2px solid blue-grey">
                </div> -->
                <div class="q-ma-md">
                <q-table
                    :table-style="'counter-reset: cssRowCounter ' + ((pagination.page - 1) * pagination.rowsPerPage) + ';'"
                    flat
                    title="Daftar User"
                    :rows="rows"
                    :filter="filter"
                    :columns="columns"
                    :pagination="pagination"
                >
                    <template v-slot:top>
                    </template>
                    <template v-slot:body="props" >
                    <q-tr>
                        <q-td class="text-center"><span class="rowNumber"></span></q-td>
                        <q-td key="nama_user" class="text-center">
                        {{ props.row.nama_user }}
                        </q-td>
                        <q-td key="email" class="text-center">
                        {{ props.row.email }}
                        </q-td>
                        <q-td class="text-left" key="aksi" :props="props">
                        <div class="row q-gutter-md">
                            <!-- <p>{{props.row._id}}</p> -->
                            <q-btn @click="deleteMovie(props.row._id)" label="Hapus" icon="delete" color="negative" unelevated/>
                        </div>
                        </q-td>
                    </q-tr>
                    </template>
                </q-table>
                </div>
            </q-card>
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