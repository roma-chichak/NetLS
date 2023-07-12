let chooseStorona = function() {
    let str = prompt("Введіть довжину сторін квадрата");

    square = {
        A : {
            x1 : 0,
            y1 : 0
        },
        B : {
            x2 : str,
            y2 : 0
        },
        C : {
            x3 : str,
            y3 : -str
        },
        D : {
            x4 : 0,
            y4 : -str
        }
    }
    console.log(square);
}

let chooseKoord = function() {
    koord = {
        X : prompt("Вкажіть вісь Х для вашої координати"),
        Y : prompt("Вкажіть вісь Y для вашої координати")
    }

    if (koord.X >= square.A.x1 && koord.X <= square.B.x2 && koord.X <= square.C.x3 && koord.X >= square.D.x4
        && koord.Y <= square.A.y1 && koord.Y <= square.B.y2 && koord.Y >= square.C.y3 && koord.Y >= square.D.y4){
        console.log("Точка знаходиться в квадраті");
    } else {
        console.log("Точка не знаходиться в квадраті");
    }
    
}

chooseStorona();
chooseKoord();