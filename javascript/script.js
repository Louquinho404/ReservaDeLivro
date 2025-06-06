document.addEventListener('DOMContentLoaded', function() {
       
        let participantes = [];
        
       
        const form = document.querySelector('form');
        const inputParticipante = document.getElementById('participante');
        const containerLista = document.querySelector('.container');
        const botaoPrioridade = document.getElementById('prioridade');
        const botaoConfirmar = document.getElementById('confirmar');
        
       
        const listaParticipantes = document.createElement('ul');
        listaParticipantes.id = 'lista-participantes';
        
        
        const tituloLista = document.querySelector('h3');
        tituloLista.insertAdjacentElement('afterend', listaParticipantes);
        
       
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const nome = inputParticipante.value.trim();
            
            if (nome) {
               
                participantes.push(nome);
              
                atualizarListaParticipantes();
           
                inputParticipante.value = '';
                inputParticipante.focus();
            }
        });
        
        function atualizarListaParticipantes() {
           
            listaParticipantes.innerHTML = '';
            
            participantes.forEach(function(participante, index) {
                const itemLista = document.createElement('li');
                itemLista.textContent = `${index + 1}. ${participante}`;
                listaParticipantes.appendChild(itemLista);
            });
        }
        
        botaoPrioridade.addEventListener('click', function() {
            const nome = inputParticipante.value.trim();
            
            if (nome) {
                participantes.unshift(nome);
                atualizarListaParticipantes();
                inputParticipante.value = '';
            }
        });
    
        botaoConfirmar.addEventListener('click', function() {
            if (participantes.length > 0) {
                const confirmado = participantes.shift();
                alert(`Participante confirmado: ${confirmado}`);
                atualizarListaParticipantes();
            } else {
                alert('Não há participantes na lista!');
            }
        });
    });
     document.getElementById('reservaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
        
            const dataRetirada = new Date(document.getElementById('dataRetirada').value);
            const dataDevolucao = new Date(document.getElementById('dataDevolucao').value);
            
            if (dataDevolucao <= dataRetirada) {
                alert('A data de devolução deve ser posterior à data de retirada!');
                return;
            }
          
            alert('Reserva realizada com sucesso!');
            this.reset();
        });
        
        window.onload = function() {
            const hoje = new Date();
            const devolucao = new Date();
            devolucao.setDate(hoje.getDate() + 7);
            
            document.getElementById('dataRetirada').valueAsDate = hoje;
            document.getElementById('dataDevolucao').valueAsDate = devolucao;
        };