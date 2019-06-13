<template>
  <div>
    <a :href="pdfDownloadUrl" class="pdf-download">
      <img src="../assets/img/PDF_24.png" class="pdf-download-icon" />
      PDF Download
    </a>
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
  .pdf-download {
    display: flex;
    align-items: center;
    margin-top: 2rem;
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
}
</style>
