let vopros = prompt('сколько вам лет?')
function year(vopros) {
    if (vopros > 18) {
        alert('проходи')

    } else if (vopros < 18){
        alert('иди отсюда')
    } else {
        alert('дибил')
    }

    
    
}
console.log(
    year(vopros)
);
function max_name(names) {
return names.reduce((long, smoll) => {
        if (smoll.length > long.length) {
            return smoll
        } else {
           return long
        }
    });
}
console.log(
    max_name('Alex', 'George', 'Michael')
);




