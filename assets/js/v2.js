let address = { github: "github.com/python-bale-bot/python-bale-bot", github_examples: "github.com/python-bale-bot/python-bale-bot/tree/master/examples", documention: "docs.python-bale-bot.ir", bale: "bale.ai", dev_kian_ahmadian: "github.com/kian-ahmadian", dev_amin_shahrabi: "github.com/AminShahrabi", dev_kasra_gamasaee: "github.com/kasragamasaee", pypi: "pypi.org/project/python-bale-bot/", bale_bot_developers: "dev.bale.ai", bale_api_problems: "github.com/python-bale-bot/python-bale-bot/discussions/24" }
function openAddress(name){
    const key = name.replaceAll("-", "_");
    if (!address[key]) return;
    open("https://" + address[key], "_blank");
}

document.getElementById("close-alert-box-btn").addEventListener("click", () => {
    document.getElementById("alert-box").classList.add("remove-anim"); 
    setInterval(() => document.getElementById("alert-box").remove(), 500)
})