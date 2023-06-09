function add(){


}

var hotel = {
    name:  "Atlantic",
}
var hotel = {
    rooms:10,
    booked:8,
    gym:true,
    pool:false,
    roomTypes:['twin','double','suite','presidential'],
    checkAvailability : ()=> {return 
    this.rooms-this.booked;}
}

hotel.name
hotel.rooms 

var car = {
    name: "impala",
}

var car ={
    color:black,
    seats:4,

}

var hotel = {


}

var house = new Object();
house.address="new york";
house.rooms = 5;
house.backyard =true;

function Hotel (name,rooms,booked){this.name =name ;this.rooms = rooms ;this.booked=booked;this.checkAvailability = function(){return this.rooms - this.booked;};
}
var dreamHotel = new Hotel ("Dream",250,50);
var mariotHotel = newHotel("Mariot",200,100);
dreamHotel.checkAvailability();
mariotHotel.booked