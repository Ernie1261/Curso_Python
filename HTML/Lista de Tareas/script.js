

                
        function eliminarElemento() {
            let ul = document.getElementById("lista");
            ul.removeChild(ul.lastChild);
            
                }        
        function agregarElementoDesdeFormulario() {
            let input = document.getElementById("newItem");
            if (input.value===""){
                alert("Por favor, introduzca un producto");

            }
            else
           
            event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
            let ul = document.getElementById("lista");
            let li = document.createElement("li");

            li.innerHTML = input.value;
            let span = document.createElement("span");
            // Permite agregar literalmente una sentencia html
            span.innerHTML =`<img src = "icons8-eliminar-papelera-24.png">`
            span.onclick = function(){
                this.parentElement.remove();
            }
            li.appendChild(document.createTextNode(input.value));
            li.appendChild(span);
            ul.appendChild(li);
            // document.getElementById("agregarItem").value = "";
            input.value="";
        }
