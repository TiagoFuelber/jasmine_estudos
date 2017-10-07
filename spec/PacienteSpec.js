describe("Paciente", function() {
	it("Deve calcular o IMC", function(){
		var paciente = new Paciente("Guilherme", 28, 72, 1.82);
		var imc = paciente.imc();
		expect(imc).toEqual(72 / (1.82*1.82));
	});
});	