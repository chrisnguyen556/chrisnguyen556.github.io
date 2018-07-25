// Navigation methods

/*
    - Remove open-nav-button
    - Display side navigation
    - Push main-container 15% to the left
 */
openNav = function () {
    document.getElementById('open-nav-button').style.display = 'none';
    document.getElementById('side-nav').style.width = '15%';
    document.getElementById('main-container').style.marginLeft = '15%';
};

/*
    - Display open-nav-button
    - Display main-container full screen
    - Remove side-nav
 */
closeNav = function () {
    document.getElementById('open-nav-button').style.display = 'inline';
    document.getElementById('main-container').style.marginLeft = '0%';
    document.getElementById('side-nav').style.width = '0%';
};