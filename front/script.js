let button = document.getElementById("handleSubmit")

button.onclick = async function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {name,email}


    const response = await fetch('http://localhost:3001/api/store/task', {
        method: "post",
        headers: {"content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success){
        alert("Sucesso");
    }else{
        alert("Não");
    }
}