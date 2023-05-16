// import axios from 'axios';


  function dataCheck() {
    const CheckName = document.getElementById("name").value;
    const Checkalias = document.getElementById("Alias").value;
    const CheckEmail = document.getElementById("Email").value;
    const CheckRut = document.getElementById("RUT").value;
    const regex = /@/;    
    
    if (CheckName == "")alert("Para continuar debes indicar tu nombre y apellido");
    if (CheckRut[CheckRut.length - 2]!= "-") alert("el formato de rut no es valido");
    if (Checkalias.length < 5) alert("el alias debe ser mayor a 5 digitos");
    if (!regex.test(CheckEmail)) alert("El correo debe contener el símbolo @"); 
  }


  axios.get('http://localhost:8080/region')
  .then(function (response) {
    // La solicitud fue exitosa y aquí puedes manejar los datos de la respuesta
    console.log(response.data);
  })
  .catch(function (error) {
    // Ocurrió un error durante la solicitud
    console.log(error);
  });
