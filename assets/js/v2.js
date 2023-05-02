let address = { github: "github.com/python-bale-bot/python-bale-bot", documention: "docs.python-bale-bot.ir", bale: "bale.ai", dev_kian_ahmadian: "github.com/kian-ahmadian", dev_amin_shahrabi: "github.com/AminShahrabi" }
function openAddress(name){
    const key = name.replaceAll("-", "_");
    if (!address[key]) return;
    open("https://" + address[key], "_blank")
}