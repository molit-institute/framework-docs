<template>
  <div class="print-header-wrapper">
    <div class="print-header">
      <div>
        <img src="../assets/img/logo.png" />
      </div>
      <div>
        <img src="../assets/img/logo-vitu.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
@media screen {
  .print-header-wrapper {
    margin-top: 2rem !important;
  }

  .print-header {
    display: none;
  }
}

@media print {
  .print-header-wrapper {
    margin-top: 0 !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .print-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .print-header div img {
    height: 1.2cm;
    width: auto;
  }
}
</style>
