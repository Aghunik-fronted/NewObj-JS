let car = {
    producer: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2025,
    speed: 115,
    
    info: function() {
        console.log(`Производитель: ${this.producer}
        Модель: ${this.model}
        Год выпуска: ${this.year}
        Средняя скорость: ${this.speed}`);
    },

    getTime: function(distance) {
        let time = distance / this.speed;
        let rest = Math.floor(time / 4);

         if (time % 4 === 0) {
            rest--;
        }
        let totalTime = Math.round(time + rest);
        console.log(`Путь: ${distance} км
        Скорость: ${this.speed} км/ч
        Всего времени: ${totalTime} ч`);
    }
};

car.info();
car.getTime(600);


let fraction = {
    n: 4, 
    d: 8,  

    add: function(f2) {
        let resN = this.n * f2.d + f2.n * this.d;
        let resD = this.d * f2.d;
        console.log(`Результат сложения: ${resN}/${resD}`);
    },

    subtract: function(f2) {
        let resN = this.n * f2.d - f2.n * this.d;
        let resD = this.d * f2.d;
        console.log(`Результат вычитания: ${resN}/${resD}`);
    },

    multiply: function(f2) {
        let resN = this.n * f2.n;
        let resD = this.d * f2.d;
        console.log(`Результат умножения: ${resN}/${resD}`);
    },

    divide: function(f2) {
        let resN = this.n * f2.d;
        let resD = this.d * f2.n;
        console.log(`Результат деления: ${resN}/${resD}`);
    },

    simplify: function() {
        let a = this.n;
        let b = this.d;
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        let nod = a;
        this.n /= nod;
        this.d /= nod;
        console.log(`Сокращенная дробь: ${this.n}/${this.d}`);
    }
};

let fraction2 = { n: 2, d: 3 };

fraction.add(fraction2);
fraction.subtract(fraction2);
fraction.multiply(fraction2);
fraction.divide(fraction2);
fraction.simplify();

let clock = {
    h: 20,
    m: 30,
    s: 45,

    show: function() {
        let hh = this.h;
        let mm = this.m;
        let ss = this.s;

        if (hh < 10) hh = "0" + hh;
        if (mm < 10) mm = "0" + mm;
        if (ss < 10) ss = "0" + ss;

        console.log(`${hh}:${mm}:${ss}`);
    },

    addS: function(seconds) {
        this.s += seconds;
        
        if (this.s >= 60) {
            let extraMinutes = Math.floor(this.s / 60);
            this.addM(extraMinutes); 
        }
    },

    addM: function(minutes) {
        this.m += minutes;
        
        if (this.m >= 60) {
            let extraHours = Math.floor(this.m / 60);
            this.m %= 60;
            this.addH(extraHours); 
        }
    },

    addH: function(hours) {
        this.h = (this.h + hours) % 24;
    }
};

clock.show();     
clock.addM(30);
clock.show();     






