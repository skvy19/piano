
function playAudio(index) { 
    const sound = document.querySelectorAll('audio')[index];
    sound.play(); 
} 

document.onkeydown = (event) => {
    const note = event.keyCode;
    
    note === 65 ? playAudio(0)
        : note === 66 ? playAudio(1)
        : note === 67 ? playAudio(2)
        : note === 68 ? playAudio(3)
        : note === 69 ? playAudio(4)
        : note === 70 ? playAudio(5)
        : note === 71 ? playAudio(6)
        : console.log(`Musiknot ${event.key} finns inte i denna piano!`)
};