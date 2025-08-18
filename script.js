document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }
});
