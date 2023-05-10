function onLoad() {
    var title = document.getElementsByClassName("accordion-title");
    var index;
    for (index = 0; index < title.length; index++) {
    title[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var currentElement = this.nextElementSibling;
        if (currentElement.style.display === "block") {
        currentElement.style.display = "none";
        } else {
        currentElement.style.display = "block";
        }
    });
    }
}
// Get references to the buttons and the content section
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const content = document.querySelector('#content');

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello My name is rahul and i create web pages"'>Click Me!</button>


function displayImage() {
	var img = document.getElementById("image");
	img.src = "twitter1.jpg";
	img.style.display = "block";
};

function displayImage() {
	var img = document.getElementById("image");
	img.src = "twitter1.jpg";
	img.style.display = "block";
};

button3.addEventListener('click', () => {
  content.innerHTML = '<p>alert("hey")</p>';
});
