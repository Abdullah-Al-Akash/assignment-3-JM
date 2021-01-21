function budgetCalculator(clock,phone,laptop){
    var clockPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    
    if(clock<0){
        return "Your Clock Number is Negative. Please Input a Valid Number!";
    }
    if(phone<0){
        return "Your Phone Number is Negative. Please Input a Valid Number!";
    }
    if(laptop<0){
        return "Your Laptop Number is Negative. Please Input a Valid Number!";
    }
    else{
        if(clock >= 0){
            var clockCost = clock * clockPrice;        
        }
        if(phone >= 0){
            var phoneCost = phone * phonePrice;        
        }
        if(laptop >= 0){
            var laptopCost = laptop * laptopPrice;
        }
    }
    return clockCost+phoneCost+laptopCost;
}
result = budgetCalculator(5,0,1);
console.log(result);