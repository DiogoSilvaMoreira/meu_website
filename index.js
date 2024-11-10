// Seleção de elementos
const contactButton = document.getElementById('contact-button');
const contactModal = document.getElementById('contactModal');
const closeModalButton = document.getElementById('close-modal');

// Função para abrir o modal de contato
function openContactModal() {
    contactModal.style.display = 'block';
}

// Função para fechar o modal de contato
function closeContactModal() {
    contactModal.style.display = 'none';
}

// Event listeners
contactButton.addEventListener('click', openContactModal);
closeModalButton.addEventListener('click', closeContactModal);

// Fecha o modal se o usuário clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
        closeContactModal();
    }
});

// Exemplo de adicionar interação para as habilidades
const skills = document.querySelectorAll('#skills-container #skill');
skills.forEach(skill => {
    skill.addEventListener('mouseover', function() {
        // Efeito ao passar o mouse sobre a habilidade
        this.style.transform = 'scale(1.05)';
    });

    skill.addEventListener('mouseout', function() {
        // Efeito de voltar ao normal
        this.style.transform = 'scale(1)';
    });
});

// Função para exibir mensagens de contato (exemplo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');

    // Aqui você pode implementar a lógica para enviar os dados
    console.log(`Nome: ${name}, Email: ${email}`);
    closeContactModal(); // Fecha o modal após o envio
});
