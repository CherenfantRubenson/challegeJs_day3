let tab = [0, 1, 2, 3, 4];

let tablo = [];
let tablo2 = [];
let tablo3 = [];

console.log(tab);
tab = tab.reverse();
console.log(tab);


for (let i = 0; i < tab.length - 1; i++) {

    tablo.push(tab[i]);


}
tablo.reverse()

tablo.push(tab[tab.length - 1])

console.log(tablo)

for (let i = 0; i < tablo.length - 2; i++) {

    tablo2.push(tablo[i]);


}

tablo2.reverse();


for (let i = 2; i >= 1; i--) {

    tablo2.push(tablo[tablo.length - i])
}

console.log(tablo2)


for (let i = 0; i < tablo2.length - 2; i++) {

    tablo3.push(tablo2[i]);


}

tablo3.reverse();

for (let i = 2; i >= 1; i--) {

    tablo3.push(tablo[tablo.length - i])
}


console.log(tablo3)