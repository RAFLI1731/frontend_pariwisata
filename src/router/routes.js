const routes = [
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboardAdmin",
        component: () => import("pages/menu/Dashboard_admin.vue"),
      },
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "",
        name: "headline",
        component: () => import("pages/menu/headline/DashboardHeadline.vue"),
      },
      {
        path: "",
        name: "user",
        component: () => import("pages/menu/user/DashboardUser.vue"),
      },
      {
        path: "",
        name: "wisata",
        component: () => import("pages/menu/wisata/DashboardWisata.vue"),
      },
      {
        path: "",
        name: "hotel",
        component: () => import("pages/menu/hotel/DashboardHotel.vue"),
      },
      {
        path: "",
        name: "amenitas",
        component: () => import("pages/menu/amenitas/DashboardAmenitas.vue"),
      },
      {
        path: "",
        name: "ekraf",
        component: () => import("pages/menu/ekraf/DashboardEkraf.vue"),
      },
      {
        path: "",
        name: "inputHeadline",
        component: () => import("pages/menu/headline/InputHeadline.vue"),
      },
      {
        path: "",
        name: "inputUser",
        component: () => import("pages/menu/user/InputUser.vue"),
      },
      {
        path: "",
        name: "inputWisata",
        component: () => import("pages/menu/wisata/InputWisata.vue"),
      },
      {
        path: "",
        name: "inputHotel",
        component: () => import("pages/menu/hotel/InputHotel.vue"),
      },
      {
        path: "",
        name: "inputAmenitas",
        component: () => import("pages/menu/amenitas/InputAmenitas.vue"),
      },
      {
        path: "",
        name: "inputEkraf",
        component: () => import("pages/menu/ekraf/InputEkraf.vue"),
      },
      {
        path: "formedit/:id",
        name: "formEditDVD",
        component: () => import("pages/menu/hotel/EditHotel.vue"),
      },
      {
        path: "formeditamenitas/:id",
        name: "formEditAmenitas",
        component: () => import("pages/menu/amenitas/EditAmenitas.vue"),
      },
      {
        path: "formeditekraf/:id",
        name: "formEditEkraf",
        component: () => import("pages/menu/ekraf/EditEkraf.vue"),
      },
      {
        path: "formeditwisata/:id",
        name: "formEditWisata",
        component: () => import("pages/menu/wisata/EditWisata.vue"),
      },
      {
        path: "formeditheadline/:id",
        name: "formEditHeadline",
        component: () => import("pages/menu/headline/EditHeadline.vue"),
      },
    ],
  },
  {
    name: "LoginIn",
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [
      {
        path: "",
        name: "userHome",
        component: () => import("pages/users/Index.vue"),
      },
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/menu/user/DashboardUser.vue"),
      },
      {
        path: "",
        name: "destinasi",
        component: () => import("pages/users/Destinasi.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
