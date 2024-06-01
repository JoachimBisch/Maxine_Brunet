document.addEventListener('DOMContentLoaded', function() {
    //Get elements from the DOM
    const parallax = document.querySelector('.parallax');
    const front = document.querySelector('.front-layer');
    const back = document.querySelector('.back-layer');

    //Sensitivity for both layers

    /*
        The higher the number, 
        the lower the sensitivity
    */

    const sFront = 150;
    const sBack = 400;

    //Add a mouse move event to the whole section

    parallax.addEventListener('mousemove', e => {
        console.log('mousemove event triggered');
        //Get the X,Y mouse coordinates
        const x = e.clientX;
        const y = e.clientY;

        /*
            Using templates litterals, translate the front layer using the coordinates, and apply the front sensitivity
        */
        front.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`;
        /*
            Transform the back layer using the coordinates, and apply the back sensitivity
        */
        back.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`;
    });
});