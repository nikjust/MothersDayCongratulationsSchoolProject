
let i = 0
let c = 0
let ParticleContainer = document.getElementById("particle-container")
let list = [
    ["M1.png", "Люблю свою семью<br>  и готовить<br>    десерты", 0.35,0.19],
    ["M2.png", "Люблю огород,<br>своих двух собак<br>  и чистоту.", 0.01,0.34],
    ["M3.png", "Пою, Вяжу, Люблю<br> путешествовать", 0.01,0.04],
    ["M4.png", "Всегда готова<br>Помочь", 0.47,0.42],
    ["M5.png", "Люблю <br>путешествовать,<br>   пробовать<br>        новое", 0.69,0.04],
    ["M6.png", "Люблю готовить<br>и слушать музыку", 0.69,0.34],
    ["M7.png", "Люблю свою семью<br>и лошадей", 0.01,0.64],
    ["M8.png", "Люблю свою семью<br>Люблю готовить", 0.69,0.64],
    ["M10.png", "Я люблю свою <br>семью, увлекаюсь<br> автомобилями.", 0.24,0.71],
    ["M11.png", "Люблю свою семью", 0.48,0.71],
    ["M12.png", "Люблю готовить<br> делать разные<br>  изделия", 0.24,0.42],
    ["M13.png", "Люблю свою семью,<br>пробовать новое", 0.48,0],
    ["M14.png", "Люблю готовить", 0.24,0],
    ["M15.png", "Люблю свою семью", 0.54,0.22],
    ["M16.png", "Люблю животных", 0.16,0.22],
]
let SchoolMom = ["M9.png", "Люблю животных,<br>своих учеников<br>       вяжу", 0.35, 0.19];

let OpeningEnded = false;
let CardSpawnEnded = false

let Text = ("Знаешь, мама, день обычный\n" +
    "Без тебя нам не прожить!\n" +
    "Слово мама так привычно\n" +
    "С первых дней нам говорить!\n" +
    "Стоит только приглядеться, –\n" +
    "Целый мир согрет вокруг\n" +
    "Теплотою маминого сердца,\n" +
    "Нежных, добрых рук...\n" +
    "Мама, – друга нет дороже –\n" +
    "Веришь ты в наш каждый взлет!\n" +
    "Кто еще, как ты, поможет?!\n" +
    "Кто еще, как ты, поймет?!").split("\n")
let TextElement = document.getElementById("text")





function ToEnding() {
    document.getElementById("start-middle").classList.add("ended")
    document.getElementById("end").style.display = "block"
    setTimeout(()=>{
        document.getElementById("start-middle").style.display = "none"

    }, 2000)
}

function SchoolMomSpawn(){
    let f = 0

    document.getElementById("smspawn").remove()

    console.log(ParticleContainer.childNodes)
    for (let i of ParticleContainer.children) {
        f+=1
        console.log(i)
        setTimeout(()=>{
            i.classList.add("ended")
            console.log(ParticleContainer.firstChild)
            setTimeout(()=>{ParticleContainer.removeChild(i)}, 2000)

        }, 800*f)

    }
    for (let i of TextElement.children) {
        f+=1
        console.log(i)
        setTimeout(()=>{
            i.classList.add("ended")
            console.log(TextElement.firstChild)
            setTimeout(()=>{TextElement.removeChild(i)}, 2000)

        }, 500*f)

    }
    setTimeout(()=>{document.getElementById("title").classList.add("ended"); setTimeout(()=>{document.getElementById("title").remove()}, 2000) }, 500)

    setTimeout(()=> {

        const HeartEl = "" +
            `    <div class=\"heart-particle\" style='position: absolute; left: ${SchoolMom[2] * 100}%;top: ${SchoolMom[3] * 100}%'>\n` +
            "    <div class=\"heart-c front\" >\n" +
            "        <div class=\"heart\" style=\"--rotation: 50deg\"></div>\n" +
            `        <img class=\"img\" alt='Фото'  src=\"imgs/${SchoolMom[0]}\">\n` +
            "    </div>\n" +
            "    <div class=\"heart-c back\">\n" +
            "\n" +
            "        <div class=\"heart\" style=\"--rotation: 50deg\">\n" +
            "\n" +
            "        </div>\n" +
            `        <h3 style=\"position: absolute; top: -30px; left: -25px; text-align: left; overflow: visible; white-space: nowrap;\">${SchoolMom[1]}</h3>\n` +
            "    </div>\n" +
            "    </div>\n"

        ParticleContainer.insertAdjacentHTML("beforeend", HeartEl)

        setTimeout(()=>{
            const El = "<h1 style=\"text-align: center; font-size: 4em; position: absolute; top:47%; left:28%; backdrop-filter: blur(15px);animation: ease-in-out 1s text-spawn;\">Наша 'вторая мама'<\h1> "
            ParticleContainer.insertAdjacentHTML("beforeend", El)

            const Button = "<button type=\"button\" onclick='ToEnding()' class=\"btn btn-outline-danger btn-lg\" style=\"top: 90%; left: 90%; position: absolute; animation: ease-in-out 1s text-spawn; \">\n" +
                "                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" class=\"bi bi-forward-fill\" viewBox=\"0 0 16 16\">\n" +
                "                    <path d=\"m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z\"/>\n" +
                "                </svg>\n" +
                "            </button>"

            const Photo = "<img class='image' alt='Фото класса'  src='imgs/ClassImage2.png' style='width: 80%;top: 55%;animation: ease-in-out 1s text-spawn;'>"
            ParticleContainer.insertAdjacentHTML("beforeend",Photo)

            setTimeout(()=>{ParticleContainer.insertAdjacentHTML("beforeend",Button)}, 2000)
        },10000)

    }, 4000)


}

function RecursiveCard(){
    CardSpawnEnded = true

    console.log(list)

    const HeartEl = "" +
        `    <div class=\"heart-particle\" style='position: absolute; left: ${list[c][2]*100}%;top: ${list[c][3]*100}%'>\n` +
        "    <div class=\"heart-c front\" >\n" +
        "        <div class=\"heart\" style=\"--rotation: 50deg\"></div>\n" +
        `        <img class=\"img\" alt='Фото'  src=\"imgs/${list[c][0]}\">\n` +
        "    </div>\n" +
        "    <div class=\"heart-c back\">\n" +
        "\n" +
        "        <div class=\"heart\" style=\"--rotation: 50deg\">\n" +
        "\n" +
        "        </div>\n" +
        `        <h3 style=\"position: absolute; top: -30px; left: -25px; text-align: left; overflow: visible; white-space: nowrap;\">${list[c][1]}</h3>\n` +
        "    </div>\n" +
        "    </div>\n"

    ParticleContainer.insertAdjacentHTML("beforeend",HeartEl)


    if (c < list.length-1) {
        setTimeout(RecursiveCard, 700)
    } else {
        setTimeout(() => {
            const Button = "<button type=\"button\" onclick='SchoolMomSpawn()' id='smspawn' class=\"btn btn-outline-danger btn-lg\" style=\"top: 90%; left: 90%; position: absolute; animation: ease-in-out 1s text-spawn; \">\n" +
                "                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" class=\"bi bi-forward-fill\" viewBox=\"0 0 16 16\">\n" +
                "                    <path d=\"m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z\"/>\n" +
                "                </svg>\n" +
                "            </button>"

            ParticleContainer.insertAdjacentHTML("beforeend",Button)
        }, 2000)
    }
    c+=1
}

function RecursiveText(){
    console.log(Text)

    const TextEl = `<p style="animation: ease-in-out text-spawn 1s; margin-bottom: 0.1rem">${Text[i]}</p>`

    TextElement.insertAdjacentHTML("beforeend", TextEl)

    if (i < Text.length-1){
        setTimeout(RecursiveText, 1000)
    } else {
        OpeningEnded = true
    }

    i+=1

}



document.addEventListener("DOMContentLoaded", ()=> {
    ParticleContainer = document.getElementById("particle-container")
    TextElement = document.getElementById("text")

    setTimeout(RecursiveText, 2000)

});

document.addEventListener("click", () => {
    if (OpeningEnded && !CardSpawnEnded) {
        RecursiveCard()
    }
})

