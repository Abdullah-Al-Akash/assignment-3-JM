function hotelCost(day){
    var totalCost = 1;
    if(day < 0){
        return "Your Day's Number is Negative. Please input a positive value!";
    }
    else if(day == 0){
        return "Your have no Cost for Payment as Your Day is 0.";
    }
    else{
        if(day <= 10){
            totalCost = day * 100;
        }
        else if(day > 10 && day <= 20){
            var first10Day = 10 * 100;
            var remaining = day - 10;
            var second10Day = remaining * 80;
            totalCost = first10Day + second10Day;
        }
        else{
            var first10Day = 10 * 100;
            var second10Day = 10 * 80;
            var remaining = day - 20;
            var thirdAllDay = remaining * 50;
            totalCost = first10Day + second10Day + thirdAllDay;
        }
        return totalCost;
    }
    
}
result = hotelCost(21);
console.log(result);