const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const procentage = document.getElementById('procentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    console.log(idx)
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full') 
        } else {
            cup.classList.remove('full') 
        }
    })
}
