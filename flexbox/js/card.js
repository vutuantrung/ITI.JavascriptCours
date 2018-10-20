(function(){
    let actions = {
        first: null,
        last: null
    };
    let gridCount = 8;
    let currentGame = {};
    let games = [];

    newGame(gridCount);

    $("body").on("click", ".card", function(){
        if($(this).hasClass("flip")) return;
        
        if(!actions.first) {
            actions.first = this;
            $(this).addClass("flip");
        } else if(!actions.last) {
            actions.last = this;
            $(this).addClass("flip");
            
            $(this).one("transitionend", function(){
                currentGame.attempts.push(new Date());
                currentGame.messages.push( currentGame.attempts.length +  " tentatives");
                
                if(match(actions)) {
                    let m = $(actions.first).attr("data-value");
                    currentGame.messages.push("Paire trouvé :" + m);
                    currentGame.matches.push(m);
                    $(actions.first).addClass("match");
                    $(actions.last).addClass("match");
                    
                    if(currentGame.matches.length == gridCount / 2){
                        currentGame.end = new Date();
                        games.push(currentGame);
                        renderGames(games);

                        alert("Gagner !");
                        newGame(gridCount);
                    }
                    
                } else {
                    $(actions.first).removeClass("flip");
                    $(actions.last).removeClass("flip");
                }

                renderMessages(currentGame.messages);
                actions = {
                    first: null,
                    last: null
                };
            });
        }
    });

    function newGame( gridCount){
        currentGame = {
            start: new Date(),
            end: null,
            messages: [],
            matches: [],
            attempts: [],
        };
         actions = {
            first: null,
            last: null
        };

        renderMessages(currentGame.messages);
        renderCards(gridCount);
    }

    function renderMessages(messages){
        $(".messages").html("");

        for(let i = messages.length - 1; i >= 0; i--){
            let child = $('<div class="message">' + messages[i] + '</div>');
            $(".messages").append(child);
        }
    }

    function renderGames(games){
        $(".games").html("");

        for(let i = games.length -1; i >= 0; i--) {
            let builder = [
                '<div class="game">',
                '<div class="game-score"><b>Score</b> ',
                 Math.round(games[i].matches.length /  games[i].attempts.length *  games[i].matches.length * 200),
                '</div>',
                '<div class="game-attemps"><b>Tentatives</b> ',
                 games[i].attempts.length,
                '</div>',
                '<div class="game-duration"><b>Durée</b> ',
                (( games[i].end.getTime() - games[i].start.getTime()) / (1000 * 60)).toPrecision(2),
                ' minutes </div>',
                '</div>'
            ];

            let child = $(builder.join(""));
            $(".games").append(child);
        }
    }

    function match(actions){
        return $(actions.first).attr("data-value") === $(actions.last).attr("data-value");
    }

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
     
    function renderCards(count) {
        if(count % 2 === 0) {
            let values = [];
            for(let i = 0; i < count; i++){
               values.push( i % (count / 2) + 1);
            }

            shuffle(values);
             $(".content").html("");

            for(let i = 0; i < values.length; i++){
                let child = $('<div class="card" data-value="' + values[i] + '"><div class="front">'+ values[i] + '</div><div class="back"></div></div>');
                $(".content").append(child);
            }
        } else {
            console.error("nope");
        }
    }
})();

$(function(){
    $('#overlay').click(function(){
         $('.messages').removeClass('show');
         $('.games').removeClass('show');
         $(this).removeClass('show');
    });
    $('#bottom-btn').click(function(e) {
        $('#overlay').addClass('show');
        $('.messages').addClass('show');
    });
    $('#right-btn').click(function(e) {
        $('#overlay').addClass('show');
        $('.games').addClass('show');
    });
});