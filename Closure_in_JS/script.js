const myName = document.getElementById('my-name')
const btn = document.getElementById('btn')

function makeTextSizer(pixelSize) {

    function changeSize() {
        myName.style.fontSize = `${pixelSize}px`
    }

    return changeSize
}

const size12 = makeTextSizer(22)
const size70 = makeTextSizer(70)
const size10 = makeTextSizer(10)

btn.addEventListener('click', size70)