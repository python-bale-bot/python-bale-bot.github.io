const address = { github: "github.com/python-bale-bot/python-bale-bot", github_examples: "github.com/python-bale-bot/python-bale-bot/tree/master/examples", documention: "docs.python-bale-bot.ir", bale: "bale.ai", dev_kian_ahmadian: "github.com/kian-ahmadian", dev_amin_shahrabi: "github.com/AminShahrabi", dev_kasra_gamasaee: "github.com/kasragamasaee", pypi: "pypi.org/project/python-bale-bot/", bale_bot_developers: "dev.bale.ai", bale_api_problems: "github.com/python-bale-bot/python-bale-bot/discussions/24", changelog: "python-bale-bot.ir/changelog" }
function openAddress(name){
    const key = name.replaceAll("-", "_");
    if (!address[key]) return;
    open("https://" + address[key], "_blank");
}

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
        setInterval(() => document.getElementById("alert-box").remove(), 500)
    })    

    setInterval(async () => {
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