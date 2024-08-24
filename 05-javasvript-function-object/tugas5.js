//soal 1//
function cetakFunction() {
    return "Hallo Nama saya Agung Priyanto";
}

console.log("soal 1:", cetakFunction());

//soal 2//
function myFunction(angka1, angka2) {
    return (angka1 + angka2).toString();
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log("soal 2:", output);

//soal 3//
const Hello = () => "Hello";

console.log("soal 3:", Hello());

//soal 4//
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
};

console.log("soal 4:", obj["bahasa"]);

//soal 5//
console.log("soal 5:")
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];

let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
};

console.log(objDaftarPeserta);

//soal 6//
let dataBuah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
];

let buahTanpaBiji = dataBuah.filter(buah => buah.adaBijinya === false);

console.log("soal 6:")
console.log("[");
buahTanpaBiji.forEach((buah, index) => {
    console.log(`  { nama: '${buah.nama}', warna: '${buah.warna}', adaBijinya: ${buah.adaBijinya}, harga: ${buah.harga} }${index < buahTanpaBiji.length - 1 ? ',' : ''}`);
});
console.log("]");

//soal 7//
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 }
 
 const { name, brand, year } = phone;
 
 console.log("soal 7:", name, brand, year);
 
 //soal 8//
console.log("soal 8:")
 let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
let buku = {
    namaBuku: "pemograman dasar",
    jumlahHalaman: 172
  }
  
let objOutput = {}
  
  objOutput = {
    ...buku,
    ...dataBukuTambahan
  };
  
console.log(objOutput)

//soal 9//
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
  }
  
const functionObject = (param) => {
    return param
  }
  
console.log("soal 9:", functionObject(mobil));
  