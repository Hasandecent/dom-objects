/* Q NO.1 */

// i)
// var mainContent = document.getElementById("main-content");
// // ii)
// console.log(mainContent.children);
// // iii)
// var render = document.getElementsByClassName("render");
// var content1 = render[0].innerHTML;
// var content2 = render[1].innerHTML;
// var content3 = render[2].innerHTML;
// var content4 = render[3].innerHTML;
// var content5 = render[4].innerHTML;
// console.log(render);
// console.log(content1);
// console.log(content2);
// console.log(content3);
// console.log(content4);
// console.log(content5);

// iv - v)
// var firstName = document.getElementById("first-name");
// var lastName = document.getElementById("last-name");
// var email = document.getElementById("email");
// firstName.value="First Name";
// lastName.value="First Name";
// email.value="Email";

/* Q NO.2 */
// // i)
// var formContentType = document.getElementById("form-content").nodeType
// document.write("Node Type of Element having id ''form-content'' : ", formContentType)
// // ii)
// var lastName = document.getElementById("lastName")
// document.write("<br> Node Type of Element having id ''lastName'' : ", lastName.nodeType)
// // iii)
// var lastNameChild = lastName.childNodes[0] = document.createElement("h1");
// console.log(lastNameChild);
// // iv)
// var mainContent = document.getElementById("main-content");
// console.log(mainContent.firstChild);
// console.log(mainContent.lastChild);
// // v)
// var lastName = document.getElementById("last-name");
// console.log(lastName.nextElementSibling);
// console.log(lastName.previousElementSibling);

// // vi)
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);