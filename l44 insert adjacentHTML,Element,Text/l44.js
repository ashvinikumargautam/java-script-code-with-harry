let d = document.getElementById("first");

d.insertAdjacentHTML("beforeend","<div class='test'>beforeend</div>")
d.insertAdjacentHTML("beforebegin","<div class='test'>beforebegin</div>")
d.insertAdjacentHTML("afterbegin","<div class='test'>afterbegin</div>")
d.insertAdjacentHTML("afterend","<div class='test'>afterend</div>")

d.remove();