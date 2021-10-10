//write a class to calculate uber price.

class uber {

    constructor(dist,availablity,seaterNo)
    {
        
        this.dist=dist;
        this.availbilty=availablity;
        this.seaterNo=seaterNo;
    }

    cal_fare()
    {   
        const Extracharges=30;
        const perKm=5;
        const basefee=10;
        const fare=this.dist*perKm;
        if(!this.availbilty)
        {
            console.log(fare+basefee+(this.seaterNo*10)+Extracharges); 
        }
        else
        {
            console.log(fare+basefee+(this.seaterNo*10));
        }
    }
}

passenger = new uber(5,false,3);

passenger.cal_fare();
