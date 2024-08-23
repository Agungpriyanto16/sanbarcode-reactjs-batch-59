//soal 1//
console.log("soal 1:")
for (let angka = 0; angka < 10; angka++){
    console.log(angka)
}

//soal 2//
console.log("soal 2:")
for(let angka = 0; angka < 10; angka++){
    if(angka % 2 !== 0)
        console.log(angka)
}

//soal 3//
console.log("soal 3:")
for(let angka = 0; angka < 10; angka++){
    if(angka % 2 === 0)
        console.log(angka)
}

//soal 4//
let array1 = [1,2,3,4,5,6]
console.log("soal 4:", array1 [5])

//soal 5//
let array2 = [5,2,4,1,3,5]
array2.sort()
console.log("soal 5:", array2)

//soal 6//
console.log("soal 6:")
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for(let i = 0; i < array3.length; i++){
    console.log(array3[i])
}

//soal 7//
console.log("soal 7:")
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for(let angka = 0; angka < array4.length; angka++){
    if(array4[angka] % 2 === 0){
        console.log(array4[angka])
    }
}

//soal 8//
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
let ungkapan = kalimat.join(" ")
console.log("soal 8:", ungkapan)

//soal 9//
console.log("soal 9:")
var sayuran = []
sayuran.push("Kangkung")
sayuran.push("Bayam")
sayuran.push("Buncis")
sayuran.push("Kubis")
sayuran.push("Timun")
sayuran.push("Seledri")
sayuran.push("Tauge")
console.log(sayuran)