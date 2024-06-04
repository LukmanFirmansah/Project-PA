<template>
  <div>
    <div class="row">
      <div class="col text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nahdlatul_Ulama_Logo.svg/1200px-Nahdlatul_Ulama_Logo.svg.png" alt="Nahdlatul Ulama Logo" class="nu-logo mb-3">
        <div class="name_welcome">Selamat Datang</div>
        <div class="name_brand">NUfarm</div>
      </div>
    </div>
    <hr class="liner border border-dark border-3 opacity-75 w-75 mx-auto" />
    <div class="row">
      <div class="col">
        <router-link to="/login">
            <div class="card bg-success text-white" style="height: 200px;">
            <div class="card-body">
              <div class="admin p-3">
                <i class="fas fa-user-shield fa-3x mb-2"></i> <!-- Admin Icon -->
                <p class="name_login">Admin</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col">
        <router-link to="/login">
          <div class="card bg-success text-white" style="height: 200px;">
            <div class="card-body">
              <div class="anggota p-3">
                <i class="fas fa-user fa-3x mb-2"></i> <!-- User Icon -->
                <p class="name_login">Anggota</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>

<style scoped>
.nu-logo {
  height: 300px;
}

.name_welcome {
  font-size: 24px;
  color: black;
  font-weight: bold;
}

.name_brand {
  font-size: 48px;
  color: black;
}

.kasir, .administrator {
  text-align: center;
}

.name_login {
  font-size: 18px;
}

.liner {
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: #007F00 !important; /* Adding green border color */
}
</style>