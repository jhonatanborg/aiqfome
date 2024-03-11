<template>
  <div class="navbar bg-aiqfome">
    <div class="section-nav">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.svg" alt="aiqfome logo" />
      </a>
      <div class="location d-flex">
        <div class="icon-location mr-2">
          <img src="../../assets/location.svg" alt="" />
        </div>
        <div class="address">
          <span class="font-weight-bold text-light-theme text-sm"
            >entregando em</span
          >
          <div class="d-flex">
            <span class="font-weight-bold text-white mr-2 text-md"
              >Rua Mandaguari, 198</span
            >
            <img src="../../assets/chevron-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="user">
        <img src="../../assets/user.svg" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #7b1fa2 !important;
}
.section-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.navbar-brand {
}
.location {
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 1.5rem;
}
.icon-location {
  display: flex;
  justify-content: center;
  align-items: center;
}
.address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>