function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
    alert("¡Mensaje copiado con éxito!");
}