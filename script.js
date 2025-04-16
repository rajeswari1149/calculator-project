let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let memory = 0;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (value === '√') {
            let num = parseFloat(string) || 0;
            string = Math.sqrt(num).toString();
            input.value = string;
        } else if (value === '%') {
            let num = parseFloat(string) || 0;
            string = (num / 100).toString();
            input.value = string;
        } else if (value === 'M+') {
            if (string !== "") {
                memory += parseFloat(string);
            }
            input.value = memory;
        } else if (value === 'M-') {
            if (string !== "") {
                memory -= parseFloat(string);
            }
            input.value = memory;
        } else if (value === 'MR') {
            string = memory.toString();
            input.value = string;
        } else if (value === 'MC') {
            memory = 0;
            input.value = "";
        } else {
            string += value;
            input.value = string;
        }
    });
});
