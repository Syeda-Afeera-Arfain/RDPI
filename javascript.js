	function add()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 + num2;
    myform.result.value = result;
    return result;
}
function Sub()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 - num2;
    myform.result.value = result;
    return result;
}
function Mul()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 * num2;
    myform.result.value = result;
    return result;
}
function Divide()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = num1 / num2;
    myform.result.value = result;
    return result;
}
function per()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = (num1/100)*num2;
    myform.result.value = result;
    return result;
}
function Abso()
{
    num1 = parseInt(myform.num1.value);
    num2 = parseInt(myform.num2.value);
    result = Math.abs(num1 - num2);
    myform.result.value = result;
    return result;
}
function Square_Root()
{
    num1 = parseInt(myform.num1.value);
    results= Math.sqrt(num1);
    result = results.toFixed(3)
    myform.result.value = result;
    return result;   
}




function pal(){
    var word = document.getElementById("word").value;
    var x = /[\W_]/g;
    var y = word.toLowerCase().replace(x,"");
    console.log(y);
    var reversed = y.split("").reverse().join("");
    if (reversed == y){
        document.getElementById("check").innerHTML = " Yay!!It's a Palindrome";
        return true;
    }
    else{
        document.getElementById("check").innerHTML = " Oops! It's not a Palindrome";
        return false;
    }
}
function ana(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    str1 = str1.replace(/[^\w]/g, '').toLowerCase()
    str2 = str2.replace(/[^\w]/g, '').toLowerCase()

    if (str1.length !== str2.length) {
        document.getElementById("check1").innerHTML = "Oops Not an Anagram";
        return false
    }

    let pro = str2.split("")

    for (let char of str1 ){ 
        if (!pro.includes(char)) {
            document.getElementById("check1").innerHTML = "Oops Not an Anagram";
            return false;
            break;
        } else {
            pro.splice(pro.indexOf(char), 1)
        }
    }
    document.getElementById("check1").innerHTML = "Yay!! It's an Anagram";
    return true;
};
function func1(){
    var p = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value1").value = p;
    return p;
}

function func2(){
    var q = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value2").value = q;
    return q;
}
function win(f1,f2){

    var map = new Map();

    map.set(0,'Human');
    map.set(1,'Cockroach');
    map.set(2,'Nuclear Bomb');

    a = f1 % 3;
    b = f2% 3;

    if (a == 0 && b == 0){
        document.getElementById("id2").innerHTML = map.get(0)+" v/s "+map.get(0);
        document.getElementById("id1").value = "Tie";
        return "It's a Tie";
    }
    else if (a == 0 && b == 1) {
        document.getElementById("id2").innerHTML = map.get(0)+" v/s "+map.get(1);
        document.getElementById("id1").value = "Human";
        return " And the Winner is:  Human";
    }
    else if (a == 0 && b == 2) {
        document.getElementById("id2").innerHTML = map.get(0)+" v/s "+map.get(2);
        document.getElementById("id1").value = "Nuclear Bomb";
        return "And the Winner is: Nuclear Bomb";
    }
    else if (a == 1 && b == 0) {
        document.getElementById("id2").innerHTML = map.get(1)+" v/s "+map.get(0);
        document.getElementById("id1").value = "Human";
        return "And the Winner is : Human";
    }
    else if (a == 1 && b == 1) {
        document.getElementById("id2").innerHTML = map.get(1)+" v/s "+map.get(1);
        document.getElementById("id1").value = "Tie";
        return "It's a Tie";
    }
    else if (a == 1 && b == 2) {
        document.getElementById("id2").innerHTML = map.get(1)+" v/s "+map.get(2);
        document.getElementById("id1").value = "Cockroach";
        return "And the Winner is: Cockroach";
    }
    else if (a == 2 && b == 0) {
        document.getElementById("id2").innerHTML = map.get(2)+" v/s "+map.get(0);
        document.getElementById("id1").value = "Nuclear Bomb";
        return "And the Winner is: Nuclear Bomb";
    }
    else if (a == 2 && b == 1) {
        document.getElementById("id2").innerHTML = map.get(2)+" v/s "+map.get(1);
        document.getElementById("id1").value = "Cockroach";
        return "And the Winner is: Cockroach";
    }
    else (a == 2 && b == 2) 
    {
        document.getElementById("id2").innerHTML = map.get(2)+" v/s "+map.get(2);
        document.getElementById("id1").value = "Tie";
        return "It's a Tie";
    }
}



function validation(){
      var user =document.getElementById('user').value;
      var number =document.getElementById('num').value;
       var email =document.getElementById('email').value;

     if (user == ""){
     document.getElementById('username').innerHTML="**Please Enter your Name";
     return false;
	}
	
	if(!isNaN(user)){
     document.getElementById('username').innerHTML="**Only Characters are allowed";
		return false;
	}
		if (number== ""){
		document.getElementById('mobilenum').innerHTML="**Please Enter 10 digit valid number";
		return false;
	}
       if(isNaN(number)){
       	document.getElementById('mobilenum').innerHTML="**Please enter valid mobile number";
		return false;
       }
       if(number.length!=10){
       		document.getElementById('mobilenum').innerHTML="**Mobile number must be 10 digits only ";
		return false;
       }

		if(email == ""){
		document.getElementById('emailid').innerHTML="**Please Enter your Email ID";
		return false;
	}
      if(email.indexOf('@') <= 0){
      	document.getElementById('emailid').innerHTML="**Invalid Email ID";
		return false;
      }
      if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
      	document.getElementById('emailid').innerHTML="**Invalid Email ID";
		return false;

      }


}