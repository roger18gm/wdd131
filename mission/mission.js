const themeSelector = document.querySelector("#theme");// replace with code to select dropdown element out of the HTML

function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const currentTheme = themeSelector.value;
    //const body = document.querySelector('body');
    //const logo = document.querySelector('.logo');

    if (currentTheme === 'dark') {
    // if the value is dark then:
        document.body.classList.add("dark");
    // add the dark class to the body
        document.querySelector('.logo').src = "byui-logo_white.png";
    // change the source of the logo to point to the white logo.
    }   else {
        // otherwise
        document.body.classList.remove("dark");
        // remove the dark class
        document.querySelector('.logo').src = "byui-logo_blue.webp";
        // make sure the logo src is the blue logo.
    }
}

themeSelector.addEventListener('change', changeTheme);
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.