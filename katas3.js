const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n) {
    const result = document.getElementById('results');
    const katas = document.createElement('div');
    const title = document.createElement('h2')
    title.innerText = n[0];
    katas.innerText = n[1];
    result.appendChild(title)
    result.appendChild(katas)


}

function kata1() {

    const title = 'Katas 1'
    let result = [];

    for (let i = 1; i <= 25; i++) {
        result += i + ' ';
    }

    if (result[result.length - 1] === ' ') {
        result = result.slice(0, result.length-1) 
    }

    result = result.split(' ').join(', ')

    return [title, result]
}

showResults(kata1())




function kata2() {
    
    const title = 'Kata 2';
    let result = [];

    for (let i = 25; i >= 1; i--) {
        result += i + ' ';
    }

    if (result[result.length - 1] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    result = result.split(' ').join(', ')

    return [title, result]

}

showResults(kata2())

function kata3() {

    const title = 'Kata 3';
    let result = [];

    for (let i = -1; i >= -25; i--) {
        result += i + ' ';
    }

    if (result[result.length - 1] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    result = result.split(' ').join(', ');

    return [title, result]
}

showResults(kata3())



function kata4() {

    const title = 'Kata 4'
    let result = [];

    for (let i = -25; i <= -1; i++) {
        result += i + ' ';
    }

    if (result[result.length - 1] === ' ') { 
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]

}

showResults(kata4())



function kata5() {

    const title = 'Kata 5';
    let result = [];

    for (let i = 25; i >= -25; i--) {
        result += i + ' '
    }

    if (result[result.length - 1] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata5())



function kata6() {

    const title = 'Kata 6';
    let result = [];

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0) {
            result += i + ' '
        }
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]

}

showResults(kata6())



function kata7() {

    const title = 'Kata 7';
    let result = [];

    for (let i = 1; i <= 100; i++) {

        if (i % 7 === 0) {
            result += i + ' '
        }
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata7())



function kata8() {
    const title = 'Kata 8';
    let result = [];

    for (let i = 100; i >= 1; i--) {

        if (i % 3 === 0) {
            result += i + ' '
        } else if (i % 7 === 0) {
            result += i + ' '
        }
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata8())



function kata9() {
    
    const title = 'Kata 9';
    let result = [];

    for (let i = 5; i <= 100; i += 10) {

        result += i + ' '
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata9())



function kata10() {

    const title = 'Kata 10';
    let result = [];

    for (let i = 0; i < sampleArray.length; i++) {

        result += sampleArray[i] + ' '
        
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]

}

showResults(kata10())



function kata11() {

    const title = 'Kata 11';
    let result = [];

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 === 0) {
            result += sampleArray[i] + ' '
        }
        
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]

}

showResults(kata11())



function kata12() {
    
    const title = 'Kata 12';
    let result = [];

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 !== 0) {
            result += sampleArray[i] + ' '
        }
        
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]

}

showResults(kata12())

function kata13() {
    
    const title = 'Kata 13';
    let result = [];

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 8 === 0) {
            result += sampleArray[i] + ' '
        }
        
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata13())

function kata14() {
    
    const title = 'Kata 14';
    let result = [];

    for (let i = 0; i < sampleArray.length; i++) {

            result += sampleArray[i] ** 2 + ' '        
    }

    if (result[result.length - 1 ] === ' ') {
        result = result.slice(0, result.length - 1)
    }

    return [title, result.split(' ').join(', ')]
}

showResults(kata14())



function kata15() {

    const title = 'Kata 15';
    let result = 0;

    for (let i = 1; i <= 20; i++) {

        result += i
    }

    return [title, result]
}

showResults(kata15())



function kata16() {
    
    const title = 'Kata 16';
    let result = 0;

    for (let i = 0; i < sampleArray.length; i++) {

        result += sampleArray[i]
    }

    return [title, result]
}

showResults(kata16())



function kata17() {
    
    const title = 'Kata 17';
    let result = sampleArray[0];

    for (let i = 0; i < sampleArray.length; i++) {
        if (result > sampleArray[i]) {
            result = sampleArray[i]
        }
    }

    return [title, result]
}

showResults(kata17())



function kata18() {
    
    const title = 'Kata 18';
    let result = sampleArray[0];

    for (let i = 0; i < sampleArray.length; i++) {
        if (result < sampleArray[i]) {
            result = sampleArray[i];
        }
    }

    return [title, result]
}

showResults(kata18())





/**
 * Daqui em diante são os bônus, por sua conta e risco
 */




   


    


function kataBonus1() {

    const boxHolder = document.getElementById('boxHolder');
    const title = document.createElement('h2');
    title.innerText = 'Kata Bonus 1';
    boxHolder.appendChild(title)

    for (let i = 0; i < 20; i++) { 
        const box = document.createElement('div');
        box.classList.add('box');
        boxHolder.appendChild(box)
    }
}

kataBonus1()




function kataBonus2() {

    const boxHolder = document.getElementById('boxHolder');
    const title = document.createElement('h2');
    title.innerText = 'Kata Bonus 2';
    boxHolder.appendChild(title)
    let width = [105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200]

    
    for (let i = 0; i < 20; i++) { 
        const box = document.createElement('div');
        box.classList.add('box2');


        box.style.width = `${width[i]}px`;
        boxHolder.appendChild(box)
        
        
        
    }

}

kataBonus2()



function kataBonus3() {

    const boxHolder = document.getElementById('boxHolder');
    const title = document.createElement('h2');
    title.innerText = 'Kata Bonus 3';
    boxHolder.appendChild(title)

    for (let i = 0; i < 20; i++) { 
        const box = document.createElement('div');
        box.classList.add('box3');
        box.style.width = `${sampleArray[i]}px`;
        boxHolder.appendChild(box)
    }
}

kataBonus3()



function kataBonus4() {
    
    const boxHolder = document.getElementById('boxHolder');
    const title = document.createElement('h2');
    title.innerText = 'Kata Bonus 4';
    boxHolder.appendChild(title)
    
    for (let i = 0; i < 20; i++) { 
        const box = document.createElement('div');
        box.classList.add('box4');
        
        box.style.width = `${sampleArray[i]}px`;
    
        if (i % 2 === 0) {
            box.style.backgroundColor = 'gray';
        }
    
        boxHolder.appendChild(box)
    }
}

kataBonus4()

function kataBonus5() {
    
    const boxHolder = document.getElementById('boxHolder');
    const title = document.createElement('h2');
    title.innerText = 'Kata Bonus 5';
    boxHolder.appendChild(title)
    
    for (let i = 0; i < 20; i++) { 
        const box = document.createElement('div');
        box.classList.add('box5');
        box.style.width = `${sampleArray[i]}px`;

        if (sampleArray[i] % 2 === 0) {
            box.style.backgroundColor = 'red'
        }

        boxHolder.appendChild(box)
    }
}

kataBonus5()
