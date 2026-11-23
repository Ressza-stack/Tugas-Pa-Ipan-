const siswa = {
    nama: "putri",
    kelas: "XI RPL 1",
    nilai: 30,
}

const namaSiswa = siswa.nama;
const {nama,kelas,nilai} = siswa;
console.log(`siswa bernama ${nama} dari ${kelas} mendapat nilai ${nilai}`);