const words = [
    ['1', '۱'],
    ['2', '۲'],
    ['3', '۳'],
    ['4', '۴'],
    ['5', '۵'],
    ['6', '۶'],
    ['7', '۷'],
    ['8', '۸'],
    ['9', '۹']
]

window.onload = async () => {
    document.getElementById("close-alert-box-btn").addEventListener("click", () => {
        document.getElementById("alert-box").classList.add("remove-anim"); 
        setTimeout(() => document.getElementById("alert-box").classList.add('hidden'), 500)
    })    
    const questions = document.querySelectorAll(".question");
    for (const question of questions){
        question.addEventListener("click", (event) => {
            event.target.classList.toggle("active-faq");
      
            if (event.target.nextElementSibling.style.maxHeight == 0) event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
            else event.target.nextElementSibling.style.maxHeight = "";
        });
     }

    setTimeout(async () => {
        let versionName = await getStableVersion()
        // https://python-bale-bot.ir/changelog#v-2-4-8

        if (versionName == null) return;
        versionName = versionName.toLowerCase()
        const alertBox = document.getElementById("alert-box")
        const element = alertBox.children[0];
        element.innerHTML = replaceWords(`نسخه رسمی ${versionName.toLowerCase().replaceAll('v', '')} منتشر شد!`);
        element.addEventListener('click', () => open(`/changelog#${versionName.replaceAll('v', 'v-').replaceAll('.', '-')}`, '_blank'))
        alertBox.classList.remove('hidden')
    }, 1500)
}

async function getStableVersion(){
    const response = await fetch('https://api.github.com/repos/python-bale-bot/python-bale-bot/releases')
    const json = await response.json()
    if (Object.keys(json).length >= 1){
        return json[0].tag_name
    } else return null
}

function replaceWords(element){
    for (let index in words){
        element = element.replaceAll(words[index][0], words[index][1])
    }
    return element
}