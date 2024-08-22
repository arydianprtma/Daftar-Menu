document.addEventListener("DOMContentLoaded", function () {
  // Show Makanan list on menu click
  document.getElementById("menuMakanan").addEventListener("click", function () {
    document.getElementById("makananList").classList.remove("d-none");
    document.getElementById("minumanList").classList.add("d-none");
  });

  // Show Minuman list on menu click
  document.getElementById("menuMinuman").addEventListener("click", function () {
    document.getElementById("makananList").classList.add("d-none");
    document.getElementById("minumanList").classList.remove("d-none");
  });

  // Handle Pesan button click
  document.querySelectorAll(".btn-pesan").forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("namaMakanan").value =
        this.getAttribute("data-nama");
      document.getElementById("hargaMakanan").value =
        this.getAttribute("data-harga");
      document.getElementById("topping").value = "0"; // Reset topping field
      document.getElementById("modalImage").src =
        this.getAttribute("data-gambar");
      $("#pesanModal").modal("show");
    });
  });

  // Handle Form submission
  document.getElementById("pesanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const namaMakanan = document.getElementById("namaMakanan").value;
    const hargaMakanan = parseInt(
      document.getElementById("hargaMakanan").value
    );
    const namaPembeli = document.getElementById("namaPembeli").value;
    const toppingValue = parseInt(document.getElementById("topping").value);

    let toppingText = "Tanpa Topping";
    if (toppingValue === 3000) {
      toppingText = "Telor Dadar/Mata Sapi";
    } else if (toppingValue === 1500) {
      toppingText = "Es Batu";
    }

    const totalHarga = hargaMakanan + toppingValue; // Menghitung total harga

    const whatsappUrl = `https://wa.me/?text=Pesanan%20Makanan:%0ANama%20Makanan:%20${encodeURIComponent(
      namaMakanan
    )}%0ATotal%20Harga:%20${encodeURIComponent(
      totalHarga
    )}%0ANama%20Pembeli:%20${encodeURIComponent(
      namaPembeli
    )}%0ATopping:%20${encodeURIComponent(toppingText)}`;

    window.open(whatsappUrl, "_blank");
    $("#pesanModal").modal("hide");
  });
});
