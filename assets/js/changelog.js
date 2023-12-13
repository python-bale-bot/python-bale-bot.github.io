const words = [
    ['1', '۱'],
    ['2', '۲'],
    ['3', '۳'],
    ['4', '۴'],
    ['5', '۵'],
    ['6', '۶'],
    ['7', '۷'],
    ['8', '۸'],
    ['9', '۹'],
    ['0', '۰']
]

window.onload = () => {
    const elements = document.getElementsByClassName("version")
    for (let element of elements) element.innerHTML = replaceWords(element.innerHTML);
    const a_elements = document.getElementsByTagName('a')
    for (let element of a_elements) if (!element.getAttribute('target')) element.setAttribute('target', '_blank');
}

function replaceWords(element){
    for (let index in words){
        element = element.replaceAll(words[index][0], words[index][1])
    }
    return element
}