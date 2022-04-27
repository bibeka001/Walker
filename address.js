class Address {
  constructor(place, qrno, landmark, nearby) {
    this.Place = place;
    this.Qrno = qrno;
    this.Landmark = landmark;
    this.Nearby = nearby;
  }
}
let dude= new Address('jaleswar', 9211, 'NH4', 'bengal');
// console.log(dude);
module.exports = Address;
