function calculate(data) {
    //проверка, что данные введены верно
    if (check(data)){ 

        let A = data.input2.value;
        let b;
        let a;

        let output = document.getElementById('output');
        output.innerHTML = "<p>Результат:</p>";

        //в первом случае вычисляем основание
        if (data.input[0].checked){ 
            b = data.input1.value;
            a = Math.cos(3.14 * A/180)*2*b;
        }
        //во втором случае вычисляем сторону
        else {  
            a = data.input1.value;
            b = a/(2*Math.cos(3.14 * A/180));
        }

        //если нужно вычислить стороны
        if (data.task1.checked) { 
            if (data.input[0].checked)
                print('a', a, output);
            else
                print('b', b, output);

            print('c', b, output);
        }

        //если нужно вычислить радиус
        if (data.task2.checked) { 
            let p = (a + b*2)/2;
            let hB = Math.sin(3.14 * A/180)*b;
            let S = hB*A;
            let r = S/p;
        
            print('r', r, output);
        }

        //если нужно вычислить высоты
        if (data.task3.checked) {
            let hB = Math.sin(3.14 * A/180)*b;
            let hA = Math.sin(3.14 * A/180)*a;
            let hC = hA;
            print('hB', hB, output);
            print('hA', hA, output);
            print('hC', hC, output);

        }

        return true;
    }
};


//вывод результатов
function print(name, value, output){
    let newElement1 = document.createElement('p');
    newElement1.innerHTML = `${name} = ` + Math.round(value*1000)/1000;
    output.appendChild(newElement1);
    return true;
};

//отчиста формы
function clearData(data){
    data.input1.value = '';
    data.input2.value = '';

    data.task1.checked = false;
    data.task2.checked = false;
    data.task3.checked = false;

    input1.classList.remove('error');
    input2.classList.remove('error');

    document.getElementById('find').classList.remove('error2');

    //отчистка результата
    let output = document.getElementById('output');
    while (output.children.length>0) {
        output.firstElementChild.remove();
    }

    return true;

};

//смена картинки в входных данных
function showImg(data){
    let img = document.getElementsByTagName('img')[0];
    img.src = data.input[0].checked ? 'pict_1.png' : 'pict_2.png';

    let label = document.getElementsByTagName('label')[0].firstChild;
    label.textContent = data.input[0].checked ? 'b = ' : 'a = ';
    return true;
   
};

//проверка данных
function check(data){
    let first = data.input1.value;
    let second = data.input2.value;

    if (Number(first) <= 0 || isNaN(first)) {
        data.input1.classList.add("error");
        return false;
    }
    if (Number(second) <= 0 || isNaN(second)) {
        data.input2.classList.add("error");
        return false;
    }
    if (!data.task1.checked && !data.task2.checked && !data.task3.checked){
        let text =  document.getElementById('find');
        text.classList.add("error2");
        return false;
    }

    return true;

};

//удаление класса ошибки 
let input1 = document.getElementById('input1');
input1.onfocus = function() {
 this.classList.remove('error');
};

let input2 = document.getElementById('input2');
input2.onfocus = function() {
 this.classList.remove('error');
};


let text =  document.getElementById('find');

document.forms[0].task1.onfocus = function() {
    text.classList.remove('error2');
};
document.forms[0].task2.onfocus = function() {
    text.classList.remove('error2');
};
document.forms[0].task3.onfocus = function() {
    text.classList.remove('error2');
};
       