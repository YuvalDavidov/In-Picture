'use script'

var gCurrQuestIdx = 0

// var gInterval

var gQuests = [
    { id: 1, opts: ['luffy', 'courage', 'toff'], ques: 'how is this?', correctOptIndex: 1 },
    { id: 2, opts: ['hammer', 'saw', 'nail'], ques: 'what is this?', correctOptIndex: 0 },
    { id: 3, opts: ['moety', 'jerry', 'rick'], ques: 'how is this?', correctOptIndex: 2 }
]


function initGame() {
    gCurrQuestIdx = 0
    onInit()
    // creatQuests()
}

function onInit() {
    creatQuests()
    document.querySelector('.question').style.display = 'block'
    document.querySelector('.answer').style.display = 'block'
    document.querySelector('.btn-finish').style.display = 'none'
    // document.querySelector('.btn-finish').style.alineText = 'center'


    // gInterval = setInterval(() => {  }, 300);
    // gCurrQuestIdx = 0

}

function checkIfFinish() {

    if (gCurrQuestIdx === gQuests.length) {

        document.querySelector('.question').style.display = 'none'
        document.querySelector('.answer').style.display = 'none'
        var elImg = document.querySelector('.screen')

        elImg.src = `img/${4}.jpg`
        document.querySelector('.btn-finish').style.display = 'block'
    }

}

function checkIsRigth(answer) {

    // console.log(answer);
    if (answer === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        // alert('great!');
        checkIfFinish()
        creatQuests()
    }

}


function creatQuests() {
    var strAHtml = ''
    var elImg = document.querySelector('.img img')
    // console.log(elImg);
    elImg.src = `img/${gCurrQuestIdx + 1}.jpg`

    var strQHtml = `${gQuests[gCurrQuestIdx].ques}`
    var gCurrQuest = document.querySelector('.question')


    var currAnswer = document.querySelector('.answer')
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {

        strAHtml += `<button onclick="checkIsRigth(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button>`

    }

    gCurrQuest.innerHTML = strQHtml
    currAnswer.innerHTML = strAHtml
}





