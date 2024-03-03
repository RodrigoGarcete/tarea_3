function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {

        document.getElementById('email_confirm').style.backgroundColor = "rgba(230,169,171,.5)"
        
        var table = document.querySelector('.contact');

        var newRow = document.createElement('tr');
        
        var cell1 = document.createElement('td');
        var parraf = document.createElement('p');
        parraf.setAttribute('for', 'newField');
        parraf.textContent = 'Eメールが一致しません';
        parraf.style.color = '#d14539';
        cell1.appendChild(parraf);
        cell1.setAttribute('colspan', '2');
        newRow.className = "Alerta";
        newRow.appendChild(cell1);

        var rows = table.getElementsByTagName('tr');
        rows[2].parentNode.insertBefore(newRow, rows[3]);


        //const element = document.createElement('p')
        //const message = document.createTextNode("Eメールが一致しません")
        //form.appendChild(element);
        //element.appendChild(message);
        //newRow.appendChild(element);
        
        /*
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
        */
      } else {
        form.submit();
      }
    });
  };
  
  window.onload = emailValidation;