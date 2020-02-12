var Jogando    = true;
var Vez        = "";
var level      = "";
var BT_Jogados = 0;
var finished = false;

var levels = ["easy", "hard"];
var random_level = Math.floor(Math.random() * 2) + 0;
level = levels[random_level];

var players = ["USU", "PC"];
var random_player = Math.floor(Math.random() * 2) + 0;
Vez = players[random_player];

function reset(){ window.location.reload(); }
function InformaVitoria(winner_img)	{
	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";
	if (winner_img ==Simb_USU_img) {
		//alert("Você ganhou.");
		set_result('winner');
	} else if(winner_img ==Simb_PC_img){
		//alert("Computador ganhou.");
		set_result('loser');
	}
	Ativacao_Quadro(false);
	finished = true;
}
function set_result(elem){
	$(".pc_played:not(.winner_played)").attr("src","public/images/2_loser.png");
	$(".usu_played:not(.winner_played)").attr("src","public/images/1_loser.png");
	if(elem!='tie'){
		setTimeout(function(){ 
			$('.answers_container').fadeIn();
			$('#'+elem).fadeIn();
			$('.'+elem).css('opacity', '1');
		}, 2000);
	}
	else{
		setTimeout(function(){ 
			$('.answers_container').fadeIn();
			$('#'+elem).fadeIn();
			$('.'+elem).css('opacity', '1');
		}, 2000);
	}
}
function VerResultado()	{
	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";
	// Verifica se há ganhador por colunas com X:
	for (coluna=1; coluna<4; coluna++)	{
		if(($("button[name='L[1]C["+coluna+"]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[2]C["+coluna+"]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[3]C["+coluna+"]'] img["+Simb_USU_img+"]").length > 0)){
			$("button[name='L[1]C["+coluna+"]'] img["+Simb_USU_img+"]").addClass('winner_played');
			$("button[name='L[2]C["+coluna+"]'] img["+Simb_USU_img+"]").addClass('winner_played');
			$("button[name='L[3]C["+coluna+"]'] img["+Simb_USU_img+"]").addClass('winner_played');
			InformaVitoria(Simb_USU_img);
			return true;
			//reset();
		}
	}
	for (coluna=1; coluna<4; coluna++)	{
		if(($("button[name='L[1]C["+coluna+"]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[2]C["+coluna+"]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[3]C["+coluna+"]'] img["+Simb_PC_img+"]").length > 0)){
			$("button[name='L[1]C["+coluna+"]'] img["+Simb_PC_img+"]").addClass('winner_played');
			$("button[name='L[2]C["+coluna+"]'] img["+Simb_PC_img+"]").addClass('winner_played');
			$("button[name='L[3]C["+coluna+"]'] img["+Simb_PC_img+"]").addClass('winner_played');
			InformaVitoria(Simb_PC_img);
			return true;
			//reset();
		}
	}
	// Verifica se há ganhador por linhas com X:
	for (linha=1; linha<4; linha++)	{
		if(($("button[name='L["+linha+"]C[1]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L["+linha+"]C[2]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L["+linha+"]C[3]'] img["+Simb_USU_img+"]").length > 0)){
			$("button[name='L["+linha+"]C[1]'] img["+Simb_USU_img+"]").addClass('winner_played');
			$("button[name='L["+linha+"]C[2]'] img["+Simb_USU_img+"]").addClass('winner_played');
			$("button[name='L["+linha+"]C[3]'] img["+Simb_USU_img+"]").addClass('winner_played');
			InformaVitoria(Simb_USU_img);
			return true;
			//reset();
		}
	}
	for (linha=1; linha<4; linha++)	{
		if(($("button[name='L["+linha+"]C[1]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L["+linha+"]C[2]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L["+linha+"]C[3]'] img["+Simb_PC_img+"]").length > 0)){
			$("button[name='L["+linha+"]C[1]'] img["+Simb_PC_img+"]").addClass('winner_played');
			$("button[name='L["+linha+"]C[2]'] img["+Simb_PC_img+"]").addClass('winner_played');
			$("button[name='L["+linha+"]C[3]'] img["+Simb_PC_img+"]").addClass('winner_played');
			InformaVitoria(Simb_PC_img);
			return true;
			//reset();
		}
	}
	// Verifica se há ganhador nas diagonais com X:
	if(($("button[name='L[1]C[1]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[2]C[2]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[3]C[3]'] img["+Simb_USU_img+"]").length > 0)){
		$("button[name='L[1]C[1]'] img["+Simb_USU_img+"]").addClass('winner_played');
		$("button[name='L[2]C[2]'] img["+Simb_USU_img+"]").addClass('winner_played');
		$("button[name='L[3]C[3]'] img["+Simb_USU_img+"]").addClass('winner_played');
		InformaVitoria(Simb_USU_img);
		return true;
		//reset();
	}
	if(($("button[name='L[1]C[3]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[2]C[2]'] img["+Simb_USU_img+"]").length > 0) && ($("button[name='L[3]C[1]'] img["+Simb_USU_img+"]").length > 0)){
		$("button[name='L[1]C[3]'] img["+Simb_USU_img+"]").addClass('winner_played');
		$("button[name='L[2]C[2]'] img["+Simb_USU_img+"]").addClass('winner_played');
		$("button[name='L[3]C[1]'] img["+Simb_USU_img+"]").addClass('winner_played');
		InformaVitoria(Simb_USU_img);
		return true;
		//reset();
	}
	// Verifica se há ganhador nas diagonais com O:
	if(($("button[name='L[1]C[1]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[2]C[2]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[3]C[3]'] img["+Simb_PC_img+"]").length > 0)){
		$("button[name='L[1]C[1]'] img["+Simb_PC_img+"]").addClass('winner_played');
		$("button[name='L[2]C[2]'] img["+Simb_PC_img+"]").addClass('winner_played');
		$("button[name='L[3]C[3]'] img["+Simb_PC_img+"]").addClass('winner_played');
		InformaVitoria(Simb_PC_img);
		return true;
		//reset();
	}
	if(($("button[name='L[1]C[3]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[2]C[2]'] img["+Simb_PC_img+"]").length > 0) && ($("button[name='L[3]C[1]'] img["+Simb_PC_img+"]").length > 0)){
		$("button[name='L[1]C[3]'] img["+Simb_PC_img+"]").addClass('winner_played');
		$("button[name='L[2]C[2]'] img["+Simb_PC_img+"]").addClass('winner_played');
		$("button[name='L[3]C[1]'] img["+Simb_PC_img+"]").addClass('winner_played');
		InformaVitoria(Simb_PC_img);
		return true;
		//reset();
	}
	if (BT_Jogados==9)	{
		if(!finished){
			//alert("Empate!");
			set_result('tie');
			Ativacao_Quadro(false);
			finished = true;
		}
		//reset();
	}
}
function Ver_Chances(Jogador)	{
	if (Jogador=="PC")	{
		//Op = " O ";
		Op = "src='public/images/2.png'";
	} else {
		//Op = " X ";
		Op = "src='public/images/1.png'";
	}
	Chances = new Array();
	Chances[0]  = new Array("L[1]C[1]", "L[1]C[2]", "L[1]C[3]"); // X X . (linha 1)
	Chances[1]  = new Array("L[1]C[1]", "L[1]C[3]", "L[1]C[2]"); // X . X (linha 1)
	Chances[2]  = new Array("L[1]C[2]", "L[1]C[3]", "L[1]C[1]"); // . X X (linha 1)
	Chances[3]  = new Array("L[2]C[1]", "L[2]C[2]", "L[2]C[3]"); // X X . (linha 2)
	Chances[4]  = new Array("L[2]C[1]", "L[2]C[3]", "L[2]C[2]"); // X . X (linha 2)
	Chances[5]  = new Array("L[2]C[2]", "L[2]C[3]", "L[2]C[1]"); // . X X (linha 2)
	Chances[6]  = new Array("L[3]C[1]", "L[3]C[2]", "L[3]C[3]"); // X X . (linha 3)
	Chances[7]  = new Array("L[3]C[1]", "L[3]C[3]", "L[3]C[2]"); // X . X (linha 3)
	Chances[8]  = new Array("L[3]C[2]", "L[3]C[3]", "L[3]C[1]"); // . X X (linha 3)
	Chances[9]  = new Array("L[1]C[1]", "L[2]C[1]", "L[3]C[1]"); // X X . (coluna 1)
	Chances[10] = new Array("L[1]C[1]", "L[3]C[1]", "L[2]C[1]"); // X . X (coluna 1)
	Chances[11] = new Array("L[2]C[1]", "L[3]C[1]", "L[1]C[1]"); // . X X (coluna 1)
	Chances[12] = new Array("L[1]C[2]", "L[2]C[2]", "L[3]C[2]"); // X X . (coluna 2)
	Chances[13] = new Array("L[1]C[2]", "L[3]C[2]", "L[2]C[2]"); // X . X (coluna 2)
	Chances[14] = new Array("L[2]C[2]", "L[3]C[2]", "L[1]C[2]"); // . X X (coluna 2)
	Chances[15] = new Array("L[1]C[3]", "L[2]C[3]", "L[3]C[3]"); // X X . (coluna 3)
	Chances[16] = new Array("L[1]C[3]", "L[3]C[3]", "L[2]C[3]"); // X . X (coluna 3)
	Chances[17] = new Array("L[2]C[3]", "L[3]C[3]", "L[1]C[3]"); // . X X (coluna 3)
	Chances[18] = new Array("L[1]C[1]", "L[2]C[2]", "L[3]C[3]"); // X X . (diag. esq.)
	Chances[19] = new Array("L[1]C[1]", "L[3]C[3]", "L[2]C[2]"); // X . X (diag. esq.)
	Chances[20] = new Array("L[2]C[2]", "L[3]C[3]", "L[1]C[1]"); // . X X (diag. esq.)
	Chances[21] = new Array("L[1]C[3]", "L[2]C[2]", "L[3]C[1]"); // X X . (diag. dir.)
	Chances[22] = new Array("L[1]C[3]", "L[3]C[1]", "L[2]C[2]"); // X . X (diag. dir.)
	Chances[23] = new Array("L[2]C[2]", "L[3]C[1]", "L[1]C[3]"); // . X X (diag. dir.)
	var item = 0;
	while (item < 24)	{
		if(($("button[name='"+Chances[item][0]+"'] img["+Op+"]").length > 0) && ($("button[name='"+Chances[item][1]+"'] img["+Op+"]").length > 0) && (($("button[name='"+Chances[item][2]+"']").children().length) === 0)){
			return Chances[item][2];
			break;
		}
		item++;
	}
}
function Armacoes()	{
	/* Esta função busca locais onde é possível armar jogadas para fechar 
	o jogo no próximo lance. */
	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";

	Jogadas = new Array();
	Jogadas[0]  = new Array("L[1]C[1]", "L[1]C[2]", "L[1]C[3]"); // . . X (linha 1)
	Jogadas[1]  = new Array("L[1]C[1]", "L[1]C[3]", "L[1]C[2]"); // . X . (linha 1)
	Jogadas[2]  = new Array("L[1]C[3]", "L[1]C[2]", "L[1]C[1]"); // X . . (linha 1)
	Jogadas[3]  = new Array("L[2]C[1]", "L[2]C[2]", "L[2]C[3]"); // . . X (linha 2)
	Jogadas[4]  = new Array("L[2]C[1]", "L[2]C[3]", "L[2]C[2]"); // . X . (linha 2)
	Jogadas[5]  = new Array("L[2]C[3]", "L[2]C[2]", "L[2]C[1]"); // X . . (linha 2)
	Jogadas[6]  = new Array("L[3]C[1]", "L[3]C[2]", "L[3]C[3]"); // . . X (linha 3)
	Jogadas[7]  = new Array("L[3]C[1]", "L[3]C[3]", "L[3]C[2]"); // . X . (linha 3)
	Jogadas[8]  = new Array("L[3]C[3]", "L[3]C[2]", "L[3]C[1]"); // X . . (linha 3)
	Jogadas[9]  = new Array("L[1]C[1]", "L[2]C[1]", "L[3]C[1]"); // . . X (coluna 1)
	Jogadas[10] = new Array("L[1]C[1]", "L[3]C[1]", "L[2]C[1]"); // . X . (coluna 1)
	Jogadas[11] = new Array("L[3]C[1]", "L[2]C[1]", "L[1]C[1]"); // X . . (coluna 1)
	Jogadas[12] = new Array("L[1]C[2]", "L[2]C[2]", "L[3]C[2]"); // . . X (coluna 2)
	Jogadas[13] = new Array("L[1]C[2]", "L[3]C[2]", "L[2]C[2]"); // . X . (coluna 2)
	Jogadas[14] = new Array("L[3]C[2]", "L[2]C[2]", "L[1]C[2]"); // X . . (coluna 2)
	Jogadas[15] = new Array("L[1]C[3]", "L[2]C[3]", "L[3]C[3]"); // . . X (coluna 3)
	Jogadas[16] = new Array("L[1]C[3]", "L[3]C[3]", "L[2]C[3]"); // . X . (coluna 3)
	Jogadas[17] = new Array("L[3]C[3]", "L[2]C[3]", "L[1]C[3]"); // X . . (coluna 3)
	Jogadas[18] = new Array("L[1]C[1]", "L[2]C[2]", "L[3]C[3]"); // . . X (diag. esq.)
	Jogadas[19] = new Array("L[1]C[1]", "L[3]C[3]", "L[2]C[2]"); // . X . (diag. esq.)
	Jogadas[20] = new Array("L[3]C[3]", "L[2]C[2]", "L[1]C[1]"); // X . . (diag. esq.)
	Jogadas[21] = new Array("L[1]C[3]", "L[2]C[2]", "L[3]C[1]"); // . . X (diag. dir.)
	Jogadas[22] = new Array("L[1]C[3]", "L[3]C[1]", "L[2]C[2]"); // . X . (diag. dir.)
	Jogadas[23] = new Array("L[3]C[1]", "L[2]C[2]", "L[1]C[3]"); // X . . (diag. dir.)

	// Com as jogadas armazenadas, basta buscar uma possibilidade.
	for (jog=0; jog<24; jog++)	{
		if((($("button[name='"+Jogadas[jog][0]+"']").children().length) === 0) && (($("button[name='"+Jogadas[jog][1]+"']").children().length) === 0) && ($("button[name='"+Jogadas[jog][2]+"'] img["+Simb_PC_img+"]").length > 0)){
			// Se encontrou uma jogada para armar, retorna a referência.
			return Jogadas[jog][0];
		}
	}
	return false;
}
function PC_Jogar_hard()	{
	Simb_PC  = "<img class='pc_played' src='public/images/2.png'>";
	Simb_USU = "<img class='usu_played' src='public/images/1.png'>";

	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";

	var ChancesUSU = Ver_Chances("USU");
	var ChancesPC = Ver_Chances("PC");
	if (ChancesPC)	{
			$("button[name='"+ChancesPC+"']").html(Simb_PC);
	} else {
		if (ChancesUSU)	{
			$("button[name='"+ChancesUSU+"']").html(Simb_PC);
		} else {
			if (BT_Jogados==1)	{
				if($("button[name='L[1]C[1]'] img["+Simb_USU_img+"]").length > 0 || $("button[name='L[1]C[3]'] img["+Simb_USU_img+"]").length > 0 || $("button[name='L[3]C[1]'] img["+Simb_USU_img+"]").length > 0 || $("button[name='L[3]C[3]'] img["+Simb_USU_img+"]").length > 0 ){
					/* Se o Usuário começou jogando pelos cantos, 
						o PC joga no centro.
					*/
					$("button[name='L[2]C[2]']").html(Simb_PC);
				}
				else{
					// Se não, o PC joga no canto.
					$("button[name='L[1]C[1]']").html(Simb_PC);
				}
			} else if (BT_Jogados==3) {
				// Se o computador faz o quarto lance...
				if($("button[name='L[2]C[1]'] img["+Simb_PC_img+"]").length > 0){
					if(($("button[name='L[2]C[1]']").children().length) === 0 && ($("button[name='L[2]C[3]']").children().length) === 0){
						$("button[name='L[2]C[1]']").html(Simb_PC);
					} else if (($("button[name='L[1]C[2]']").children().length) === 0 && ($("button[name='L[3]C[2]']").children().length) === 0) {
						$("button[name='L[3]C[2]']").html(Simb_PC);
					}
				}
				else {
					if(($("button[name='L[1]C[1]']").children().length) === 0){
						// Canto superior esquerdo.
						$("button[name='L[1]C[1]']").html(Simb_PC);
					} else if(($("button[name='L[1]C[3]']").children().length) === 0){
						// Canto superior direito.
						$("button[name='L[1]C[3]']").html(Simb_PC);
					} else if(($("button[name='L[3]C[1]']").children().length) === 0){
						// Canto superior direito.
						$("button[name='L[3]C[1]']").html(Simb_PC);
					} else if(($("button[name='L[3]C[3]']").children().length) === 0){
						$("button[name='L[3]C[3]']").html(Simb_PC);
					}						
				}
			} else {
				/* Para mais de 3 jogadas sem chances de vitórias para nenhum dos
				jogadores, o PC irá procurar os quadros vazios restantes para jogar.
				*/

				ProximaJog = Armacoes(); // Busca uma jogada ideal.

				if (ProximaJog)	{
					// Se há uma jogada ideal, a realiza.
					$("button[name='"+ProximaJog+"']").html(Simb_PC);
				} else {
					// Se não há uma jogada ideal, busca um quadro vazio e joga.
					// Cria o vetor com os endereços dos quadros
					xQuadros = new Array("L[1]C[1]", "L[1]C[3]", "L[3]C[1]", "L[3]C[3]", "L[1]C[2]", "L[3]C[2]", "L[2]C[1]", "L[2]C[3]");
					for (R=1; R<9; R++)	{
						if(($("button[name='"+xQuadros[R]+"']").children().length) === 0){
							// Procura um quadro vazio...e joga.
							$("button[name='"+xQuadros[R]+"']").html(Simb_PC);
							break;
						}
					}
				}
			}
		}
	}
	// Atualiza a soma dos botões jogados:
	BT_Jogados++;
	// Se jogada não resultar em vitória ou empate...
	if (!VerResultado())	{
		// Passa a vez de jogar para o usuário:
		Vez = "USU";
	}
}
function PC_Jogar_easy(){
	Jogou = false;
	Simb_PC  = "<img class='pc_played' src='public/images/2.png'>";

	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";
	for (linha=1; linha<4; linha++)	{
		for (coluna=1; coluna<4; coluna++)	{
			if (Jogou)	{
				break;
			} else {
				BOTAO = "L["+linha+"]C["+coluna+"]";
				if(($("button[name='"+BOTAO+"'] img").length <= 0)){
					$("button[name='"+BOTAO+"']").html(Simb_PC);
					Jogou = true;
				}
			}
		}
	}
	BT_Jogados++;
	if (!VerResultado())	{
		Vez = "USU";
	}
}
function Usuario_Joga(Linha, Coluna)	{
	Simb_PC_img  = "src='public/images/2.png'";
	Simb_USU_img = "src='public/images/1.png'";
	// Esta função recebe a jogada do usuário e aplica-a ao jogo.
	if (Vez=="USU")	{
	// Se for a vez do usuário jogar...
		// Cria o botão,
		BOTAO = "L[" + Linha + "]C[" + Coluna + "]";
		// Verifica se este botão já foi usado no jogo.
		if(($("button[name='"+BOTAO+"'] img["+Simb_PC_img+"]").length > 0) || ($("button[name='"+BOTAO+"'] img["+Simb_USU_img+"]").length > 0)){
			return;
		}
		else {
			// Aplica a jogada ao botão:
			$("button[name='"+BOTAO+"']").html("<img class='usu_played' src='public/images/1.png'>");
			// Atualiza a soma dos botões já utilizados no jogo:
			BT_Jogados++;
			// Se jogada não resultar em vitoria ou empate...
			if (!VerResultado())	{
				// Passa a vez de jogar para o computador:
				Vez = "PC";
				if(level=="easy"){
					setTimeout(function(){ PC_Jogar_easy(); }, 1000);
				}
				else if(level=="hard"){
					setTimeout(function(){ PC_Jogar_hard(); }, 1000);
				}
			}
		}
	} else {
		return;
	}
}
function Ativacao_Quadro(Acao)	{
	for (linha=1; linha < 4; linha++)	{
		for (coluna=1; coluna < 4; coluna++)	{
			BOTAO = "L["+linha+"]C["+coluna+"]";
			// Faz a modificação da propriedade do botão:
			document.all[BOTAO].disabled = (!Acao);
		}
	}
	BT_Jogados = 0;
} 
function IniciarJogo()	{
	$('.button_play').css('display', 'none');
	Jogando = true;
	Ativacao_Quadro(true);
	if(Vez=="PC"){
		if(level=="easy"){
			PC_Jogar_easy();
		}
		else if(level=="hard"){
			PC_Jogar_hard();
		}
	}
}