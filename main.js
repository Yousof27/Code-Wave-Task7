let form = document.forms[0];
let num1 = document.querySelector("input:first-of-type");
let num2 = document.querySelector("input:nth-of-type(2)");
let result = document.querySelector("label");

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function handleClick(e) {
    let n1 = num1.value || 0;
    let n2 = num2.value || 0;
    e.id === 'circ' ?
        result.innerHTML = (+n1 + +n2) * 2 :
        e.id === 'area' ?
            result.innerHTML = +n1 * +n2 :
            result.innerHTML = Math.sqrt((+n1) ** 2 + (+n2) ** 2);
}
