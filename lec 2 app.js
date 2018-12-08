var student={
  name: "",
  type:"student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup",keyup);

}


function keyUp(event){
  calculatorNumericOutput();
}

function calculatorNumericOutput(){
  student.name =document.getElementById('name').value;

  var totalNameValue=0;

  for (var i=0; i<student.name.length; i++){

    totalNameValue +=student.name.charCodeAt(i);
  }


  //insert result into Page

  var output ="Total Numeric value of person's name is "+totalNameValue;
  document.getElementById('output').innerText=output;
}
