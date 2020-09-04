$(document).ready(() => {

  $('.lazy').slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });

})

const slider = document.querySelector('section.slider')

function addSlide(imgUrl = '//placehold.it/960x350?text=unspecified-960w') {
  const slide = document.createElement('div')
  const image = document.createElement('img')

  image.setAttribute('data-lazy', imgUrl)
  image.setAttribute('data-srcset', imgUrl)
  image.setAttribute('data-sizes', '50vw')

  slide.appendChild(image)
  slider.appendChild(slide)
  // $('<img>').attr({
  //   'data-lazy': imgUrl,
  //   'data-srcset': imgUrl,
  //   'data-sizes': '100vw'
  // }).appendTo('<div>').appendTo(slider)
}

addSlide('//placehold.it/960x350/00ffc3/00a17b/?text=1-960w')
addSlide('//placehold.it/960x350/0091ff/ffffff/?text=2-960w')
addSlide('//placehold.it/960x350/ff8142/ffffff/?text=3-960w')
addSlide() // will use the default fallback image defined in the function

var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log('validating....');

  console.log('user name: ' + validateUsername());
  console.log('email: ' + validateEmail());
  console.log('password: ' + validatePassword());

  if (validateUsername() && validateEmail() && validatePassword()) {
    // add code to update registeredUsers array with new user and call render function
    registeredUsers.push({
      username: document.registration.username.value,
      firstname: document.registration.firstname.value,
      lastname: document.registration.lastname.value,
      email: document.registration.email.value
    })
    registeredUsers.length > 5 && registeredUsers.shift() // shift the array if it's larger than 5 users
    renderRegisteredUsers()
    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  $('#registered-users').empty()
  registeredUsers.forEach(function (registeredUser) {
    $(`<li>${JSON.stringify(registeredUser)}</li>`).appendTo('#registered-users')
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

function validateFirstName() {
  return !!document.registration.firstname && !!document.registration.firstname.value
}

function validateFirstName() {
  return !!document.registration.lastname && !!document.registration.lastname.value
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf('@');
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf('.');
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false 
 * 
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    return false;
  }

  if (_password.length < 8) {
    return false
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === '' || sample.indexOf(' ') > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 * 
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  return $('[name="username"]').val()
}

function getFirstName() {
  return $('[name="firstname"]').val()
}

function getLastName() {
  return $('[name="lastname"]').val()
}

function getEmail() {
  return $('[name="email"]').val()
}

function getPassword() {
  return $('[name="password"]').val()
}

function getConfirmPassword() {
  return $('[name="password_confirm"]').val()
}