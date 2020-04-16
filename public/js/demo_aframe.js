// Component to change to a sequential color on click.
// AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//         var lastIndex = -1;
//         var COLORS = ['red', 'green', 'blue'];
//         this.el.addEventListener('mouseenter', function (evt) {
//             lastIndex = (lastIndex + 1) % COLORS.length;
//             this.setAttribute('material', 'color', COLORS[lastIndex]);
//             console.log('I was clicked at: ', evt.detail.intersection.point);
//         });
//     }
// });
// var playerEl = document.querySelector('[camera]');
// var box = document.querySelector('#box');
// console.log(box)
// // console.log(playerEl)
// playerEl.addEventListener('collide', function (e) {
//     console.log('Player has collided with body #' + e.detail.body.id);
//     alert()
//     e.detail.target.el;  // Original entity (playerEl).
//     e.detail.body.el;    // Other entity, which playerEl touched.
//     e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
//     e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
// });
// document.addEventListener('keydown', function(event) {
//     if(event.key === 'a' || event.key === 'ArrowLeft') {
//         alert('Left was pressed');
//     }
//     else if(event.key == 'w') {
//         playerPos = playerEl .getAttribute('position');
//         boxPos = box .getAttribute('position');
//         console.log(playerPos.distanceTo(boxPos));
//     }
// });
var playerEl = document.querySelector("[camera]");
playerEl.addEventListener("collide", function(e) {
    console.log("Player has collided with body #" + e.detail.targetEl.id);
    e.detail.targetEl; // Other entity, which playerEl touched.
});