;(function(root, factory) {
  root.AnongNetwork = factory();
})(this, function() {
  var AnongNetwork = {};
  var Options = AnongNetwork.options = {
    numberFormat: /^\+?(63|0)?(9\d{2})(\d{7})?$/,
    networks: {
      smart_tnt: [
        "813", "907", "908", "909", "910", "911", "912", "913", "914", "918",
        "919", "920", "921", "928", "929", "930", "938", "939", "946", "947",
        "948", "949", "989", "998", "999"
      ],
      globe_tm: [
        "817", "905", "906", "915", "916", "917", "925", "926", "927",
        "935", "936", "994", "996", "997"
      ]
    }
  };

  AnongNetwork.normalizeNumber = function(number) {
    return number.replace(/[\s-]/g, '');
  };

  AnongNetwork.validate = function(number) {
    var number = AnongNetwork.normalizeNumber(number);
    return Options.numberFormat.test(number);
  };

  AnongNetwork.getTelco = function(number) {
    var number = AnongNetwork.normalizeNumber(number);
    var parsedNumber = Options.numberFormat.exec(number);
    if(!parsedNumber){
      return null;
    }
    var prefix = parsedNumber[2];
    var telco = null;
    for(network in Options.networks) {
      if(Options.networks[network].indexOf(prefix) > -1) {
        telco = network;
      }
    }
    return telco;
  };

  return AnongNetwork;
});
