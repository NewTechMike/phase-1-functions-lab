// Code your solution in this file!
//First
function distanceFromHqInBlocks(pick){
   const dis = pick - 42;
    if(dis < 0){
        return dis * -1;
    }
    else
        return dis;
}

//Second
function distanceFromHqInFeet(pick) {
    return (distanceFromHqInBlocks(pick)*264);    
}

//Third
function distanceTravelledInFeet(beg, des){
    const dis = des - beg;
    if(dis < 0){
        return (dis * -1) * 264;
    }    
    else
        return dis * 264;
}

//Fourth
function calculatesFarePrice(beg, des){
    const dis = distanceTravelledInFeet(beg, des);
    
    if(dis <= 400){
        return 0;
    }
    else if(dis > 400 && dis < 2000){
        return (dis - 400) * .02;
    }
    else if(dis > 2000 && dis < 2500){
        return 25;
    }
    else if(dis > 2500){
        return "cannot travel that far";
    }
}

