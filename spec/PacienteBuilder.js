function PacienteBuilder() {
	var nome = 'Guilherme';
	var idade = 28;
	var peso = 80;
	var altura = 1.76;

	var clazz = {
		constroi : function() {
			return new Paciente(nome, idade, peso, altura);
		},

		comIdade : function(valor) {
			idade = valor;
			return this;
		},

		comPeso : function(valor) {
			peso = valor;
			return this;
		},

		comAltura : function(valor) {
			altura = valor;
			return this;
		},

	};

	return clazz;
}