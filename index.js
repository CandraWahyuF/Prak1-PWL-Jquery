var produk = [
  { stok: 10, nama: "Jet Tempur" },
  { stok: 1, nama: "Nuklir Hiroshima" },
  { stok: 6, nama: "Infinity Stone" },
  { stok: 5, nama: "Burj Khalifa" },
  { stok: 3, nama: "Rudal Hipersonik" },
];

$(".tambah").hide();
var data = "";

$rowNumber = $("#data_produk").length;
$maks = 1;
function delete_row(rowNumber) {
  $("#" + rowNumber).remove();
  $maks--;
}

function tampil() {
  if ($maks < 5) {
    $(".tambah").show();
  }
}

function add_row() {
  if ($maks < 5) {
    $("#data_produk tr:last").after(
      "<tr id='row" +
        $rowNumber +
        "'><td><select class ='form-control-sm' id='pilih-produk" +
        $maks +
        "' onchange=tampil()><option disabled selected>Pilih Produk</option><option value='Jet Tempur'>Jet Tempur</option><option value='Nuklir Hiroshima'>Nuklir Hiroshima</option><option value='Infinity Stone'>Infinity Stone</option><option value='Burj Khalifa'>Burj Khalifa</option><option value='Rudal Hipersonik'>Rudal Hipersonik</option></select></td><td>  <input type='number' class='form-control-sm' id='jumlah" +
        $maks +
        "'> </td><td> <i class='bi bi-trash' style='color:red;' type='button' onclick=delete_row('row" +
        $rowNumber +
        "')></td></tr>"
    );
    $rowNumber = $rowNumber + 1;
    $maks += 1;
    $(".tambah").hide();
  } else {
  }
}

$(".tambah").click(function () {
  add_row();
});
$("#pesan").click(function () {
  let status = 1;
  let tampil_data_pesan = $(".tampil_data_pesan").html();
  let belanja = [];
  let stok = [];

  $("#tampil_data_pesan").html("");

  for (i = 0; i < 5; i++) {
    if (i == 0) {
      belanja[i] = $("#pilih-produk").val();
      stok[i] = $("#jumlah").val();
    } else {
      belanja[i] = $("#pilih-produk" + i).val();
      stok[i] = $("#jumlah" + i).val();
    }
  }

  let nama_pembeli = $("#nama_pembeli").val();
  $("#tampil_data_pesan").append("<h3>" + nama_pembeli + "</h3>");
  for (m = 0; m < $rowNumber; m++) {
    if (belanja[m] != null) {
      $("#tampil_data_pesan").append(
        "<li>" + belanja[m] + " (" + stok[m] + ")</li>"
      );
    }
  }
});
