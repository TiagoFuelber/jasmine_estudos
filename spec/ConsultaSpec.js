describe("Consulta", function() {
	
	var guilherme;

	beforeEach(function(){
		guilherme = new PacienteBuilder().constroi();
	});

	describe("Consulta de retorno", function() {
		it("nao deve cobrar nada se a consulta for um retorno", function() {
			var consulta = new Consulta(guilherme, [], true, true);
			expect(consulta.preco()).toEqual(0);
		});
	});

	describe('Consulta Comum', function() {
		it("Deve cobrar 25 por cada procedimento comum", function() {
			var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

			expect(consulta.preco()).toEqual(50);

		});
	});

	describe("Consulta particular", function() {
		it("Deve dobrar o valor da consulta particular", function() {
			var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
			
			expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
		});

		it("Deve dobrar o valor da consulta particular mesmo com procedimentos especiais", function() {
			var consulta = new Consulta(guilherme, ["raio-x", "procedimento-comum2", "gesso"], true, false);

			expect(consulta.preco()).toEqual((55 + 25 + 32) * 2);
		});
	});
});