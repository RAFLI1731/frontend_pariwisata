<template>
    <q-page class="bg-blue-grey-1">
        <div class="bg">
            <div class="q-pa-md">
                <div class="row">
                    <q-icon name="description" size="32px" color="white" style="margin-top: 5px; margin-right: 10px;"/>
                    <p class="font">Amenitas</p>
                </div>
                <p class="fontKecil jarak">Daftar Amenitas</p>
                <div class="full-width bg-grey-8 q-pa-sm text-center text-white" style="border-radius: 10px 10px 10px 10px;">
                    <p class="font q-mt-sm">Dashboard / Amenitas</p>
                </div>
            </div>
        </div>
        <div>
            <q-card class="q-ma-xl bordered" style="margin-top: -80px">
                <div class="row bg-grey-11" style="max-height: auto;">
                    <div class="col-md-6 col-xs-6 text-blue-14 q-pl-lg q-pt-sm"><p style="font-weight: 400; font-size: 20px;">Daftar Amenitas</p></div>
                    <div class="col-md-6 col-xs-6">
                        <div v-if="$q.screen.sm || $q.screen.xs">
                            <div class="text-right q-pa-xs">
                                <q-btn icon="add" color="primary" :to="{ name: 'inputAmenitas' }" no-caps></q-btn>
                            </div>
                        </div>
                        <div v-if="$q.screen.lg || $q.screen.xl || $q.screen.md" class="text-right">
                            <div class="text-right q-pa-xs">
                                <q-btn label="Tambah Data" color="primary" :to="{ name: 'inputAmenitas' }" no-caps></q-btn>
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
                    title="Daftar Hotel"
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
                        <q-td key="nama_amenitas" class="text-center tabelSpaceJudul">
                        {{ props.row.nama_amenitas }}
                        </q-td>
                        <q-td key="deskripsi" class="text-center tabelSpace">
                        {{ props.row.deskripsi }}
                        </q-td>
                        <q-td key="jenis" class="text-center">
                        {{ props.row.jenis }}
                        </q-td>
                        <q-td key="image" :props="props">
                            <q-img
                                :src="'http://192.168.18.41:5000/'+props.row.image"
                                spinner-color="white"
                            />
                        </q-td>
                        <q-td class="text-left" key="aksi" :props="props">
                        <div class="row q-gutter-md">
                            <!-- <p>{{props.row._id}}</p> -->
                            <q-btn :to="{ name: 'formEditAmenitas', params: { id: props.row._id }}" label="Edit" icon="edit" color="warning" unelevated/>
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
  { name: 'nama_amenitas', align: 'Left', label: 'Nama Amenitas', field: 'nama' },
  { name: 'deskripsi', align: 'Left', label: 'Deskripsi', field: 'deskripsi' },
  { name: 'jenis', align: 'Left', label: 'Jenis Amenitas', field: 'jenis' },
  { name: 'image', align: 'Left', label: 'Gambar', field: 'image' },
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
      this.$api.get('amenitas/getAll').then(res => {

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
        this.$api.delete(`amenitas/delete/${id}`)
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
.tabelSpace {
    max-width: 300px; 
    text-overflow: ellipsis;
    overflow: hidden;
    /* -webkit-line-clamp: 1; number of lines to show */
    -webkit-box-orient: vertical;
}
.tabelSpaceJudul {
    max-width: 150px; 
    text-overflow: ellipsis;
    overflow: hidden;
    /* -webkit-line-clamp: 1; number of lines to show */
    -webkit-box-orient: vertical;
}
</style>