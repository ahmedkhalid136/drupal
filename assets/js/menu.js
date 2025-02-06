// (function ($, Drupal) {
//   Drupal.behaviors.typMenu = {
//     attach: function (context, settings) {
//       // Add hover event to dropdown toggle
//       $('.dropdown-toggle', context).hover(function () {
//         $(this).parent('.dropdown').addClass('active');
//       }, function () {
//         $(this).parent('.dropdown').removeClass('active');
//       });

//       // Close dropdown when clicking outside
//       $(document).on('click', function (e) {
//         if (!$(e.target).closest('.dropdown').length) {
//           $('.dropdown').removeClass('active');
//         }
//       });
//     }
//   };
// })(jQuery, Drupal);