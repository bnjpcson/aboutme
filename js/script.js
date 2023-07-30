// alert("hello");
var doc = document;

doc.getElementById('image').addEventListener('click', (ev) => {
    alert("Hello World");
});

doc.addEventListener('contextmenu', event => event.preventDefault());

doc.onkeydown = function (e) {
    if (
        (e.keyCode == 123) || // disable F12 key
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // disable I key
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // disable J key
        (e.ctrlKey && e.keyCode == 85) // disable U key
    ) {
        return false;
    }
}