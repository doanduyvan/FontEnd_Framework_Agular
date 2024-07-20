


let monhoc = {
    3 : [7.4,9.3,10.0,9.8,9.1,9.4,9.7,9.5,10.0,8.7,9.7,10.0,9.0,8.7,8.3,10.0,9.2,10.0,9.7],
    2 : [8.9],
}

let sumdiem = 0;
let sumtinchi = 0;
for (let key in monhoc) {
    sumtinchi += key * monhoc[key].length
    sumdiem += monhoc[key].reduce((a,b) => a + (b * key), 0)
}

console.log(sumdiem)
console.log(sumtinchi)

let diemtb = sumdiem / sumtinchi

console.log("diem trung binh la: ",diemtb)