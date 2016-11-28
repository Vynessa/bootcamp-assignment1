var Phone = function (model, cost, volume){
    this.model = model || 'Nokia';
    this.cost = cost || 2000;
    this.volume = volume || 0;
};


Phone.prototype.setVolume = function(volume) {
  this.volume = volume;
};

module.exports = Phone;
