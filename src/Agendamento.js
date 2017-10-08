function Agendamento() {
	
	var clazz = {
		para : function(consulta) {
			var umDiaEmMilisegundo = 1000 * 60 * 60 * 24;
			var vinteDiasEmMilisegundos = umDiaEmMilisegundo * 20;
			var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilisegundos);

			while(novaData.getDay() == 0 || novaData.getDay() == 6) novaData = new Date(novaData.getTime() + umDiaEmMilisegundo); 

			var novaConsulta = new Consulta(
				consulta.getNome(),
				consulta.getProcedimentos(), 
				consulta.isParticular(), 
				consulta.isRetorno(),
				novaData);

			return novaConsulta;
		} 
	};	

	return clazz;
};