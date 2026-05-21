const plafond = document.getElementById("plafond");
const bunga = document.getElementById("bunga");
const notaris = document.getElementById("notaris");
const administrasi = document.getElementById("administrasi");
const materai = document.getElementById("materai");
const angsuran = document.getElementById("angsuran");
const pelunasan = document.getElementById("pelunasan");
const loadForm = document.getElementById("loan-form");
const infoPlafond = document.getElementById("info-plafond");
const infoNotaris = document.getElementById("info-notaris");
const infoAdministrasi = document.getElementById("info-administrasi");
const infoMaterai = document.getElementById("info-materai");
const infoAngsuran = document.getElementById("info-angsuran");
const infoPelunasan = document.getElementById("info-pelunasan");
const infoTerimaBersih = document.getElementById("info-terima-bersih");

loadForm.addEventListener("submit", function (e) {
  e.preventDefault();
    const p = parseFloat(plafond.value);
    const b = parseFloat(bunga.value) / 100;
    const n = parseFloat(notaris.value);
    const m = parseFloat(materai.value);
    const adm = parseFloat(administrasi.value);
    const angs = parseFloat(angsuran.value);
    const pelunasanRp = parseFloat(pelunasan.value);

    const pt = Math.ceil((p * b)/500) * 500;
    const hasil6 = Math.ceil(((((p * b) * 6) + p) / 6) / 500) * 500;
    const hasil12 = Math.ceil(((((p * b) * 12) + p) / 12) / 500) * 500;
    const hasil18 = Math.ceil(((((p * b) * 18) + p) / 18) / 500) * 500;
    const hasil24 = Math.ceil(((((p * b) * 24) + p) / 24) / 500) * 500;
    const hasil36 = Math.ceil(((((p * b) * 36) + p) / 36) / 500) * 500;
    const hasil42 = Math.ceil(((((p * b) * 42) + p) / 42) / 500) * 500;
    const hasil48 = Math.ceil(((((p * b) * 48) + p) / 48) / 500) * 500;
    const hasil54 = Math.ceil(((((p * b) * 54) + p) / 54) / 500) * 500;
    const hasil60 = Math.ceil(((((p * b) * 60) + p) / 60) / 500) * 500;

    document.getElementById("hasil-6").textContent = formatRupiah(hasil6);
    document.getElementById("hasil-12").textContent = formatRupiah(hasil12);
    document.getElementById("hasil-18").textContent = formatRupiah(hasil18);
    document.getElementById("hasil-24").textContent = formatRupiah(hasil24);
    document.getElementById("hasil-36").textContent = formatRupiah(hasil36);
    document.getElementById("hasil-42").textContent = formatRupiah(hasil42);
    document.getElementById("hasil-48").textContent = formatRupiah(hasil48);
    document.getElementById("hasil-54").textContent = formatRupiah(hasil54);
    document.getElementById("hasil-60").textContent = formatRupiah(hasil60);
    document.getElementById("pt").textContent = formatRupiah(pt);
    infoPlafond.textContent = formatRupiah(p);
    infoNotaris.textContent = formatRupiah(n);
    infoAdministrasi.textContent = formatRupiah((adm / 100) * p) + " (" + adm + "%)";
    infoMaterai.textContent = formatRupiah(m);
    infoAngsuran.textContent = formatRupiah(angs);
    infoPelunasan.textContent = formatRupiah(pelunasanRp);
    infoTerimaBersih.textContent = terimaBersih(p, angs, n, m, adm, pelunasanRp);
});

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

function terimaBersih(plafond, angsuran, notaris, materai, administrasi, totalPelunasan) {
  const administrasiRp = (administrasi / 100);
  let hasil = plafond -((plafond * administrasiRp)+notaris+materai+totalPelunasan+angsuran);
  return formatRupiah(hasil);
}