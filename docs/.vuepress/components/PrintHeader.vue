<template>
  <div class="print-header-wrapper">
    <a :href="pdfDownloadUrl" class="pdf-download"><img src="../assets/img/PDF_24.png" class="pdf-download-icon" />PDF Download</a>
    <div class="print-header">
      <div>
        <img src="../assets/img/logo-molit.png" />
      </div>
      <div>
        <img src="../assets/img/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfDownloadUrl: ""
    };
  },

  methods: {
    urlToFileName(url) {
      if (!url) {
        return "";
      }
      return url.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    }
  },

  mounted() {
    this.pdfDownloadUrl =
      "https://molit.eu/docs/vitu-docs/" +
      this.urlToFileName(
        location.protocol + "//" + location.host + location.pathname
      ) +
      ".pdf";
  }
};
</script>

<style lang="css" scoped>
@media screen {
  .print-header-wrapper {
    margin-top: 2rem !important;
  }

  .print-header {
    display: none;
  }

  .pdf-download {
    display: flex;
    align-items: center;
  }

  .pdf-download-icon {
    margin-right: 22px;
    height: 22px;
  }
}

@media print {
  .pdf-download {
    display: none;
  }

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