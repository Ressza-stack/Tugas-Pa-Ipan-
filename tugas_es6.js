const Garpu = {
    nama: "Garpu",
    harga: 500000
};

const Sumpit = {
    nama : "Sumpit",
    harga: 5000
};

const Emas = {
    nama: "Emas",
    harga: 20000
};

const Barang = [Garpu, Sumpit, Emas];

const promosi = Barang.map((barang) => {
    let keterangan = barang.harga > 100000 ? "Barang Mewah" : "Barang Biasa";
    
    return `Ayo beli ${barang.nama} (${keterangan}) - Rp${barang.harga}`;
});

console.log(promosi);