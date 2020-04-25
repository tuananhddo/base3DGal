// Component to change to a sequential color on click.

AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            // this.setAttribute('material', 'color', COLORS[lastIndex]);
            var playerEl = document.querySelector('#rig');

            // playerEl.object3D.position.x = 0;
            // playerEl.object3D.position.y = 0;
            // playerEl.object3D.position.z = 0;

            let i = {...this.getAttribute('position')};
            playerEl.setAttribute('position', this.getAttribute('position'));

            console.log( playerEl.object3D.position)

            // textEl.setAttribute('visible', !textEl.getAttribute('visible'))
        });

    }
});
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
// var playerEl = document.querySelector("[camera]");
// playerEl.addEventListener("collide", function(e) {
//     console.log("Player has collided with body #" + e.detail.targetEl.id);
//     e.detail.targetEl; // Other entity, which playerEl touched.
// });