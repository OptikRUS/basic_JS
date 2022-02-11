let game = {
    run() {
        do {
            let count = 0
            let questQount = questioins.length
            for (let i = 0; i < questQount; i++) {
                let answ = prompt(questioins[i].ask)
                if (answ == '0') {
                    break
                }
                else if (answ.toUpperCase() == questioins[i].right) {
                    count++
                }
            }

            console.log('Конец игры!\nКоличество верных ответов: ' + count)
        }

        while (prompt('Сыграть ещё? \n0 - нет') != '0');

    },


    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.\nДля выхода введите: 0");
    }
};

game.init();