document.addEventListener('DOMContentLoaded', () => {
//minimum
//1 Створи об'єкт, що описує автомобіль (виробник, модель, рік
//випуску, середня швидкість, обсяг паливного баку, середня 
//витрата палива на 100 км., водії), і наступні методи для 
//роботи з цим об'єктом:
    // 1. Метод, який виводить на екран інформацію про автомобіль.
    // 2. Додавання ім’я водія у список
    // 3. Перевірка водія на наявність його ім’я у списку
    // 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
    let car = {
        maker: 'Audi',
        model: '80',
        year: '1988',
        avarage_speed: '120',
        tank_volume: '70',
        fuel_consumption: '8',
        driver_1: 'Андрій',
        carInfo() {
            alert(`Інформація про автомобіль: 
            Марка: ${this.maker} 
            Модель: ${this.model}
            Рік випуску: ${this.year} 
            Середня швидкість: ${this.avarage_speed}
            Обсяг паливного баку: ${this.tank_volume}
            Середня витрата палива на 100 км: ${this.fuel_consumption}
            Водій: ${this.driver_1}`);
        },
        addDriver() {
            this.driver_2 = prompt('Напишіть ім`я водія якого хотіли б додати до списку');  
        },
        findNameDriver(){
            let find_driver = prompt('Напишіть ім`я водія');
            if (find_driver == this.driver_1){
                alert('Водій є у списку');
            }
            else if(find_driver == this.driver_2){
                alert('Водій є у списку');
            }
            else alert('Водія немає у списку');
        },
        calculateRoad(){
            let distance = prompt('Скільки потрібно проїхати?');
            let trip = distance / 100 * this.fuel_consumption;
            let time = distance / this.avarage_speed;
            let trip_time = (time / 4) + time;
            alert(`Відстань: ${distance}, витрачений час: ${Math.round(trip_time)}, витрачено палива: ${trip}`);
        }
    }
    car.carInfo();
    car.addDriver();
    car.findNameDriver();
    car.calculateRoad();

//normal
//1 Створити об'єкт, що описує час (години, хвилини, секунди),
// і такі функції для роботи з цим об'єктом:
    // 1. Для виведення часу на екран.
    // 2. Зміни часу на передану кількість секунд.
    // 3. Зміни часу на передану кількість хвилин.
    // 4. Зміни часу на передану кількість годин.
    // 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
    let time = {
        hours: 15,
        minutes: 10,
        seconds: 10,
        ShowTime() {
            alert(`Час ${this.hours}:${this.minutes}:${this.seconds}`);
        },
        AddSeconds() {
            let add_seconds = +prompt('Введіть кількість секунд');
                this.seconds += add_seconds;
            if(this.seconds < 60){
                alert(`Час ${this.hours}:${this.minutes}:${this.seconds}`);
            }
            else if(this.seconds >= 60){
                this.minutes += (this.seconds/60);
                if(this.minutes < 60){
                alert(`Час ${this.hours}:${Math.round(this.minutes)}:${this.seconds%60}`); 
                }
                else if(this.minutes >= 60){
                    this.hours += (this.minutes/60);
                    alert(`Час ${Math.round(this.hours)}:${Math.round(this.minutes%60)}:${this.seconds%60}`);
                }
            }
            else return 'error';
        },
        AddMinutes(){
            let add_minutes = +prompt('Введіть кількість хвилин');
            this.minutes += add_minutes;
            if(this.minutes < 60){
                alert(`Час ${this.hours}:${this.minutes}:${this.seconds}`);
            }
            else if(this.minutes >= 60){
                this.hours += (this.minutes/60);
                if(this.hours < 23){
                    alert(`Час ${Math.round(this.hours)}:${Math.round(this.minutes%60)}:${this.seconds%60}`);
                }
                else if(this.hours >= 24){
                    this.hours = this.hours % 24;
                    alert(`Час ${Math.round(this.hours)}:${Math.round(this.minutes%60)}:${this.seconds%60}`);
                }
                else return 'error';
            }
            else return 'error';
        },
        AddHours(){
            let add_hours = +prompt('Введіть кількість годин');
            this.hours += add_hours;
            if(this.hours < 23){
                alert(`Час ${Math.round(this.hours)}:${Math.round(this.minutes%60)}:${this.seconds%60}`);
            }
            else if(this.hours >= 24){
                this.hours = this.hours % 24;
                alert(`Час ${Math.round(this.hours)}:${Math.round(this.minutes%60)}:${this.seconds%60}`);
            }
            else return 'error';
        }
    }
    time.ShowTime();
    time.AddSeconds();
    time.AddMinutes();
    time.AddHours();

//maximum
//1 Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
    // 1. Складання 2-х об'єктів-дробів.
    // 2. Віднімання 2-х об'єктів-дробів.
    // 3. Множення 2-х об'єктів-дробів.
    // 4. Ділення 2-х об'єктів-дробів.
    // 5. Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)
let Fractions = {
    fraction1: {
        upNum: 0,
        butNum: 0,
    },
    fraction2: {
        upNum: 0,
        butNum: 0,
    },
    fractionResult: {
        upNum: 0,
        butNum: 0,
    },
    showFraction(WhatFraction) {
        console.log("Ваш дріб: ", WhatFraction.upNum, "/", WhatFraction.butNum);
    },
    checkButNum(firstFraction, secondFraction) {
        if (firstFraction.butNum == 0 || secondFraction.butNum == 0) {
            return false;
        }
    },
    addFractions(firstFraction, secondFraction) {
        firstFraction.upNum = prompt('Введіть чисельник першого дробу: ');
        firstFraction.butNum = prompt('Введіть знаменник першого дробу: ');
        secondFraction.upNum = prompt('Введіть чисельник другого дробу: ');
        secondFraction.butNum = prompt('Введіть знаменник другого дробу: ');

    },
    summOfFractions(firstFraction, secondFraction, resultFraction) {
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            
        }
        else if (firstFraction.butNum == secondFraction.butNum) {
            resultFraction.upNum = parseInt(firstFraction.upNum) + parseInt(secondFraction.upNum);
            resultFraction.butNum = firstFraction.butNum;
        }
        else {
            resultFraction.upNum = (firstFraction.upNum * secondFraction.butNum) + (firstFraction.butNum * secondFraction.upNum);
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum;

        }
        console.log('Результат додавання: ', resultFraction.upNum, "/", resultFraction.butNum);

    },
    differenceOfFractions(firstFraction, secondFraction, resultFraction) {

        if (this.checkButNum(firstFraction, secondFraction) == false) {
            console.log('Невірні дані');
        }
        else if (firstFraction.butNum == secondFraction.butNum) {
            resultFraction.upNum = parseInt(firstFraction.upNum) - parseInt(secondFraction.upNum);
            resultFraction.butNum = firstFraction.butNum;
        }
        else {
            resultFraction.upNum = (firstFraction.upNum * secondFraction.butNum) - (firstFraction.butNum * secondFraction.upNum);
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum;

        }
        console.log('Результат віднімання: ', resultFraction.upNum, "/", resultFraction.butNum);
    },
    doubleOfFractions(firstFraction, secondFraction, resultFraction) {
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            console.log('Невірні дані');
        } else {
            resultFraction.upNum = firstFraction.upNum * secondFraction.upNum;
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum;
        }
        console.log('Результат множення', resultFraction.upNum, "/", resultFraction.butNum);
    },
    divisionOfFractions(firstFraction, secondFraction, resultFraction){
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            console.log('Невірні дані');
        } else {
            resultFraction.upNum = firstFraction.upNum * secondFraction.butNum;
            resultFraction.butNum = firstFraction.butNum * secondFraction.upNum;

        }
        if(resultFraction.upNum == resultFraction.butNum){
            console.log('Результат ділення', (resultFraction.upNum / resultFraction.butNum));
        }
        else{
        console.log('Результат ділення', resultFraction.upNum, "/", resultFraction.butNum);
        }
    },
    abbreviationOfFractions(firstFraction, secondFraction){
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            console.log('Невірні дані');
        } else {
                for (let i = 1; i < firstFraction.butNum; i++) {
                    if (firstFraction.upNum % i === 0 &&  firstFraction.butNum % i === 0) {
                        firstFraction.upNum /= i; 
                        firstFraction.butNum /= i;
                    } 
                }
                console.log(`Cкорочений дріб (1) ${firstFraction.upNum}/${firstFraction.butNum}`);
                for (let i = 1; i < secondFraction.butNum; i++) {
                    if (secondFraction.upNum % i === 0 &&  secondFraction.butNum % i === 0) {
                        secondFraction.upNum /= i; 
                        secondFraction.butNum /= i;
                    } 
                }
                console.log(`Cкорочений дріб (2) ${secondFraction.upNum}/${secondFraction.butNum}`);
            }
        }
}
Fractions.addFractions(Fractions.fraction1, Fractions.fraction2);
Fractions.showFraction(Fractions.fraction1);
Fractions.showFraction(Fractions.fraction2);
Fractions.summOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult);
Fractions.differenceOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult);
Fractions.doubleOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult);
Fractions.divisionOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult);
Fractions.abbreviationOfFractions(Fractions.fraction1, Fractions.fraction2);
});
