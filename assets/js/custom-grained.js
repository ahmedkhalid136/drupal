(function ($, Drupal) {
    Drupal.behaviors.grainEffect = {
      attach: function (context, settings) {
        once('grain-effect', '#grain-wrapper', context).forEach(function () {
          var options = {
            animate: true,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.075,
            grainDensity: 0.4,
            grainWidth: 0.4,
            grainHeight: 0.4
          };
          grained('#grain-wrapper', options);
        });
      }
    };
  })(jQuery, Drupal);