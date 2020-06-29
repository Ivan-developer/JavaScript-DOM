'use strict';

let makeSoldier = function(serialNo){
    return function(){
        console.log(serialNo)
    }
}

let makeArmy = function(n){
    let army = [];
    let currentNo = 0;
    while(currentNo < n){
        var soldier = makeSoldier(currentNo);
        army[currentNo] = soldier;
        currentNo++;
    }
    return army;
}

let army = makeArmy(3)

army[0]()
army[1]()