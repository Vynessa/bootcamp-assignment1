var expect = require('expect');

var Phone = require('../app/phone.js');

describe("Phone test", function () {
    it("should be an instance of the Phone class", function() {
        var iPhone = new Phone("iPhone");
        expect(iPhone).toBeA(Phone);
    });

    it("should set Phone instance properties correctly", function() {
        var iPhone = new Phone("iPhone", 6000, 100);
        expect(iPhone.model).toEqual("iPhone");
        expect(iPhone.cost).toEqual(6000);
        expect(iPhone.volume).toEqual(100);
    });

    it("should be have model 'Nokia' if no model was passed as an argument", function() {
        var nokia = new Phone();
        expect(nokia.model).toEqual('Nokia');
    });

    it("should be have cost of '2000' if no cost was passed as an argument", function() {
        var phone = new Phone('Nokia');
        expect(phone.cost).toEqual(2000);
    });

    it("should be have volume of '0' if no volume was passed as an argument", function() {
        var phone = new Phone('Nokia', 4000);
        expect(phone.volume).toEqual(0);
    });

    it("should be have volume of '100' if setVolume is called with '100' as argument", function() {
        var phone = new Phone('Nokia', 4000);
        expect(phone.volume).toEqual(0);
        phone.setVolume(100);
        expect(phone.volume).toEqual(100);
    });
});


