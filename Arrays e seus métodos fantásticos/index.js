function principal() {
    escolha = parseInt(prompt("Olá! Escolha uma das opções: \n 1- Array até 20 numeros \n 2- 2 arrays | -50 | +50 \n 3- Inventario dos Aventureiros \n 4- Sair"));

    switch (escolha) {
        case 1:
            ex1();
            break;
        case 2:
            ex2();
            break;
        case 3:
            ex3();
            break;
        case 4:
            sair();
            break;
        default:
            alert("Digite uma opção Válida!!!");
            principal();
            break;
    }
}

function ex1() {
    number = 0;
    count = [];

    while (number < 20) {
        num = parseInt(prompt("Escreva um numero:"));
        count.push(num);
        number++
    }

    document.write(count);
}

function ex2() {
    number = 0;
    countLessThan50 = [];
    countMoreThan50 = [];


    while (number <= 12) {
        num = parseInt(prompt("Escreva um numero:"));
        if (num == isNaN || num <= 0) {
            alert("Algum número está fora dos padrões! ");
            principal();
        } else {
            if (num <= 50) {
                countLessThan50.push(num);
                number++;
            } else {
                countMoreThan50.push(num);
                number++;
            }
        }


    }

    document.write("Array com os números até 50: " + countLessThan50 + "<br/>");
    document.write("Array com os números maiores que 50: " + countMoreThan50);
}

function ex3(){
    DrofoInventory = [" <br/> anel da invisibilidade <br/> ","par de botas mágicas <br/> " ,"par de botas mágicas <br/> " ,"poção do sono <br/> " , "poção da inocência <br/> " , "poção da inocência <br/>" ];
    
    TopperInventory = [" <br/> capa da invisibilidade <br/> ", "pedra do despertar <br/> ","varinha das varinhas <br/> ","poção da inocência <br/> ","poção da mentira <br/>","poção da mentira <br/>","poção anti-inteligencia <br/>" ]
    document.write(`INVENTÁRIO DO DROFO ANTES DAS ALTERAÇÕES = ${DrofoInventory} <br/><br/>`);
    document.write(`INVENTÁRIO DO TOPPER ANTES DAS ALTERAÇÕES = ${TopperInventory} <br/><br/>`);

    //splice() altera o conteúdo de uma array, adiciona novos e remove valores antigos
    document.write("-------------ALTERANDO-------------- <br/>"); 
    //Topper consome uma poçao da mentira
    TopperInventory.splice(4,1);
     //Perdeu a pedra
    TopperInventory.splice(1,1);
     //Drofo doa Par de botas 
    DrofoInventory.splice(1,1);
    //Topper recebe botas
    TopperInventory.push (" par de botas mágicas ");  
    //Topper acha escudo mágico
    TopperInventory.push ("<br/> escudo mágico "); 
    //Topper acha espada mágica
    TopperInventory.push ("<br/> espada mágica "); 
    //Drofo ganha par de botas
    DrofoInventory.push("  par de botas mágicas "); 
    //Drofo usa a poção do sono 
    DrofoInventory.splice(3,1);
    // Tooper deu a poção anti-inteligencia para Drofo
    TopperInventory.splice(6,1);
     // Drofo recebeu a poção 
    DrofoInventory.push (" <br/> poção anti-inteligencia ");
     //Drofo usa  a poção anti-inteligencia
    DrofoInventory.splice(6,1);
     // Drofo acha o ovo de dragão
    DrofoInventory.push(" <br/> Ovo de Dragão " );
    // Drofo acha a coxinha
    DrofoInventory.push(" <br/> Coxinha "); 

    document.write(`<br/> INVETÁRIO DO DROFO = ${DrofoInventory} <br/>`);
    document.write(`<br/> INVENTÁRIO DO TOPPER = ${TopperInventory}`);
}
function sair(){
    alert("Até Logo!");
    window.close();
}
principal();