describe("Consulta", function() {
	it("nao deve cobrar nada se a consulta for um retorno", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, [], true, true);
		expect(consulta.preco()).toEqual(0);
	});

	it("Deve cobrar 25 por cada procedimento comum", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

		expect(consulta.preco()).toEqual(50);

	});

	it("Deve dobrar o valor da consulta particular", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
		
		expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
	});
})