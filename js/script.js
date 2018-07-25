// Navigation methods

/*
    - Remove open-nav-button
    - Push main-container 15% to the left
    - Display side navigation
 */
openNav = function () {
    document.getElementById('open-nav-button').style.display = 'none';
    document.getElementById('main-container').style.marginLeft = '15%';
    document.getElementById('side-nav').style.display = 'inline-block';
};

/*
    - Display open-nav-button
    - Display main-container full screen
    - Remove side-nav
 */
closeNav = function () {
    document.getElementById('open-nav-button').style.display = 'inline';
    document.getElementById('main-container').style.marginLeft = '0%';
    document.getElementById('side-nav').style.display = 'none';
};