<template>
  <!--Main Navigation-->
  <header>
    <!-- Sidebar -->
    <nav
      id="sidebarMenu"
      :class="{ show: sidebarOpen }"
      class="collapse d-lg-block sidebar collapse bg-white"
    >
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-5">
          <router-link
            to="/mainsidebar/dashboard"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Dashboard</span>
          </router-link>
          <router-link
            to="/mainsidebar/datadomba"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Data domba</span>
          </router-link>
          <router-link
            to="/mainsidebar/pakan"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Pakan</span>
          </router-link>
          <router-link
            to="/mainsidebar/transaksi"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Transaksi</span>
          </router-link>
          <router-link
            to="/mainsidebar/hitung"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Hitung</span>
          </router-link>
          <router-link
            to="/mainsidebar/anggota"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Anggota</span>
          </router-link>
          <router-link
            to="/mainsidebar/arsip"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Arsip</span>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-blue fixed-top"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleSidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand px-3" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Nahdlatul_Ulama_Logo.svg"
            height="60"
            alt="NU logo"
            loading="lazy"
          />
          <span class="navbar-brand-text px-3" style="font-family: 'Arial', sans-serif; font-size: 30px; color: green; font-weight: bold;">NUfarm</span>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-3">
        <!-- Menu pencarian -->
        <li class="nav-item px-3">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">
              <i class="fas fa-search"></i> <!-- Icon search Font Awesome -->
            </button>
          </form>
        </li>
      </ul>
    </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main :style="{ marginTop: sidebarOpen ? '58px' : '0' }">
    <div class="container pt-4">
      <router-view></router-view>
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style>
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}
</style>
