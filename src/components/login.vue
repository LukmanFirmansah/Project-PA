<template>
  <div class="row">
    <!-- Bagian Kiri -->
      <div class="col d-flex flex-column align-items-center justify-content-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nahdlatul_Ulama_Logo.svg/1200px-Nahdlatul_Ulama_Logo.svg.png" alt="Nahdlatul Ulama Logo" class="nu-logo mb-3">
        <h3 class="name_brand">NUfarm</h3>
      </div>
    <!-- Bagian Kanan -->
    <div class="col d-flex align-items-center justify-content-center">
      <div class="form-container">
        <div class="mb-5 mt-2" style="text-align: left">
          <h4>Log In</h4>
        </div>
        <form style="text-align: left">
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-4 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label mb-2" for="exampleCheck1">Tetap Login !!!</label>
          </div>
          <router-link to="/mainsidebar">
            <button
              type="submit"
              class="btn btn-success mb-4"
              style="width: 100%"
            >
              Masuk
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

  <style>

.nu-logo {
  height: 300px;
}

.form-container {
  border: 1px solid #44ce29; /* Border solid dengan warna abu-abu */
  padding: 30px;
  height: 450px;
  width: 380px;
}
.form-label {
  text-align: left; /* Mengatur teks label ke kiri */
}
</style>
