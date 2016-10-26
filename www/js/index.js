var app = {
    // Construtor do Aplicativo
    initialize: function() {
        this.bindEvents();
    },
	
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
};
// Evento para chmar uma função quando o dispositivo estiver pronto
document.addEventListener("deviceready", function(){
	
	//Evento para chamar uma função quando o documento/app estiver pronto
	$(document).ready(function() {
		
		//Escondendo as tags <p>'s
		$(".ps").hide(1);
		
		//O plugin globalization obtém as informações de acordo com a localização do dispositivo e suas configurações
		//O plugin define o objeto navigator.globalization
		//Cada método do plugin receber argumentos successCallback e errorCallback
		
		//Função para pegar o idioma e o país
		$("#idioma").click(function(){
			navigator.globalization.getPreferredLanguage(
				function (language) { // Função para successCallback
					$("#id").html('Idioma-País: ' + language.value + '\n'); // Mostrar informações no html 
					$("#id").toggle(); // Mostrar/Esconder o elemento
				},
				function () {alert('Error getting language\n');} // Função para errorCallback
			); 	
		});
		
		//Função para pegar a Data e a Hora
		$("#data").click(function(){
			navigator.globalization.dateToString(
				new Date(),
				function (date) { // Função para successCallback
					$("#dt").html('Data-Hora: ' + date.value + '\n');  // Mostrar informações no html 
					$("#dt").toggle(); // Mostrar/Esconder o elemento
				},
				function () { alert('Error getting dateString\n'); } // Função para errorCallback
			);
		});
		
		//Função para saber se o horario de verão está ativo. Retorná 'true' para 'sim' e 'false' para 'nao'
		$("#horarioVerao").click(function(){
			navigator.globalization.isDayLightSavingsTime(
				new Date(),
				function (date) { // Função para successCallback
					$("#hv").html('Horário de Verão: ' + date.dst + '\n');  // Mostrar informações no html 
					$("#hv").toggle();// Mostrar/Esconder o elemento
				},
				function () {alert('Error getting names\n');} // Função para errorCallback
			);
		});
		
		//Função para pegar o dia da semana
		$("#nomeDia").click(function(){
			navigator.globalization.getDateNames(
				function (names) { // Função para successCallback
					for (var i = 0; i < names.value.length; i++) {
						$("#nd").html('Dia da Semana: ' + names.value[i] + '\n'); // Mostrar informações no html 
					}
					$("#nd").toggle();// Mostrar/Esconder o elemento
				},
				function () { alert('Error getting names\n'); }, // Função para errorCallback
				{ type: 'wide', item: 'days' } // Argumento adicional para a função
			);
		});
		
		//Função para pegar o fuso horário
		$("#fusoHorario").click(function(){
			navigator.globalization.getDatePattern(
				function (date) { // Função para successCallback
					$("#fs").html('Fuso Horário: ' + date.timezone + '\n');  // Mostrar informações no html 
					$("#fs").toggle();// Mostrar/Esconder o elemento
				},
				function () { alert('Error getting timezone\n');} // Função para errorCallback
			);
		});
		
    });
});
app.initialize(); // Inicializando o app