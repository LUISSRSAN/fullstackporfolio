function Hotel (name ,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailability=function(){
        return this.rooms - this.booked;
    }
}
var trumpHotel = new Hotel("Trump Tower",50,40);
var dreamHotel = new Hotel ("Dream",250,50);
var mariotHotel = new Hotel("Mariot",200,100);

var HotelName1  =document.getElementById('hotel1');
HotelName1.innerHTML = trumpHotel.name;

