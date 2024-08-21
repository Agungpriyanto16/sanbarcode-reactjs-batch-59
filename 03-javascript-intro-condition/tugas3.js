//soal 1//
let namaLengkap = "Agung Priyanto";
console.log("soal 1:", namaLengkap)

//soal 2//
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word + ' ' + second + ' ' + third;
console.log("soal 2:",outputGabunganVariable)

//soal 3//
let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello}${world}`;
console.log("soal 3:",output);

//soal 4//
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let panjang = parseInt(panjangPersegiPanjang);
let lebar = parseInt(lebarPersegiPanjang);

let kelilingPersegiPanjang = 2 * (panjang + lebar);

console.log("soal 4:",kelilingPersegiPanjang);

//soal 5//
let sentences = 'wah javascript itu keren sekali';

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18); 
let fourthWords = sentences.substring(19, 24); 
let fifthWords = sentences.substring(25, 31); 

console.log("soal 5:");
console.log('Kata Pertama: ' + firstWords);
console.log('Kata Kedua: ' + secondWords);
console.log('Kata Ketiga: ' + thirdWords);
console.log('Kata Keempat: ' + fourthWords);
console.log('Kata Kelima: ' + fifthWords);

//soal 6//
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];  // 'going'
var fourthWord = sentence[11] + sentence[12]; // 'to'
var fifthWord = sentence[14] + sentence[15]; // 'be'
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // 'React'
var seventhWord = sentence[23] + sentence[24]; // 'JS'
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log("soal 6:");
console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//soal 7//
let txt = "I can eat bananas all day";
let hasil = '"' + txt.slice(10, 17) + '";';

console.log("soal 7:", hasil);

//soal 8//
var nilaiDoe = 50;
var indeks;

if (nilaiDoe >= 80) {
    indeks = 'A';
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
    indeks = 'B';
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
    indeks = 'C';
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
    indeks = 'D';
} else {
    indeks = 'E';
}

console.log("soal 8:", indeks);

//soal 9//
let angka = 2;

angka === 2 ? console.log("soal 9:", "angka nya 2") : console.log("bukan angka 2");

//soal 10//
var traffic_lights = "red";

console.log("soal 10:");
switch (traffic_lights) {
    case "red":
        console.log("berhenti");
        break;
    case "yellow":
        console.log("hati-hati");
        break;
    case "green":
        console.log("berjalan");
        break;
    default:
        console.log("warna lampu tidak dikenal");
}
