const petForm = document.getElementById('petForm');
const petTableBody = document.querySelector('#petTable tbody');

// Função para buscar os pets
const getPets = async () => {
    try {
      const response = await fetch('http://localhost:3000/pets');
      const pets = await response.json();
      showPets(pets);
    } catch (error) {
      console.error(error);
    }
  };

// Função para exibir os pets na tabela
const showPets = (pets) => {
  petTableBody.innerHTML = '';
  pets.forEach((pet) => {
    petTableBody.innerHTML = petTableBody.innerHTML + `
    <tr>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.breed}</td>
      <td>
        <button class="btn-delete" data-id="${pet.id}">Excluir</button>
      </td>
    </tr>
    `;
  });
};

// Função para cadastrar um novo pet
const addPet = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const breed = document.getElementById('breed').value;

  const pet = { name, age, breed };

  try {
    const response = await fetch('http://localhost:3000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar o pet.');
    }

    const newPet = await response.json();
    petTableBody.innerHTML = ''; // Limpa a tabela
    getPets(); // Recarrega os pets
    petForm.reset(); // Limpa o formulário
  } catch (error) {
    console.error(error);
  }
};


// Event listener para o formulário de cadastro
petForm.addEventListener('submit', addPet);


// Carrega os pets ao carregar a página
getPets();






















// Event listener para o botão de excluir
petTableBody.addEventListener('click', deletePet);

// Função para excluir um pet
const deletePet = async (event) => {
  if (!event.target.classList.contains('btn-delete')) {
    return;
  }

  const petId = event.target.getAttribute('data-id');

  try {
    const response = await fetch(`http://localhost:3000/pets/${petId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao excluir o pet.');
    }

    petTableBody.innerHTML = ''; // Limpa a tabela
    getPets(); // Recarrega os pets
  } catch (error) {
    console.error(error);
  }
};