describe("Paciente", function() {
	it("Deve calcular o IMC", function(){
		var paciente = new Paciente("Guilherme", 28, 72, 1.82);
		var imc = paciente.imc();
		expect(imc).toEqual(72 / (1.82*1.82));
	});

	it("Deve calcular os batimentos cardíacos totais do paciente", function() {
		var paciente = new Paciente("Guilherme", 29, 72, 1.82);
		var batimentos = paciente.batimentos();
		expect(batimentos).toEqual(29 * 365 * 24 * 60 * 80);
	});
});		