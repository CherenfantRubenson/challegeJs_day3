let char = "hidden lavi Ayiti endpass";

let receiver;

tab = [];

char = char.split(" ")

for (let el of char) {

    if (el == 'endpass') {

        continue;
    }

    if (el == 'hidden') {

        continue;
    }
    tab.push(el);
}


console.log(tab.join(' '));
