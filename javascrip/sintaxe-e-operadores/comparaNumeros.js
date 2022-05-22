function comparaNum(num1, num2){
    let soma = num1 + num2;

    if (num1 == num2){
        if(soma < 10){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor 20`);
        }else if(soma > 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor 20`);
        }else if(soma == 10){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor 20`);
        }else if(soma == 20){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10`);
        }else{
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior 20`);
        }
    }else{
        if(soma < 10){
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é menor que 10 e menor 20`);
        }else if(soma > 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é maior que 10 e menor 20`);
        }else if(soma == 10){
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é menor 20`);
        }else if(soma == 20){
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é maior que 10`);
        }else{
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é maior que 10 e maior 20`);
        } 
    }


}