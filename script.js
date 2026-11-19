const historia = [
 {foto:"fotos/1.jpg", titulo:"2021 · Quando te conheci",
  texto:"Em 2021 a gente se conheceu. Eu era só um garoto, e nem imaginava o quanto você mudaria a minha vida."},
 {foto:"fotos/2.jpg", titulo:"Você ficou",
  texto:"Naquele mesmo ano eu sofri um acidente de moto e perdi o movimento do meu braço direito. Foi aí que você mostrou quem era: sempre esteve do meu lado e nunca me deixou."},
 {foto:"fotos/4.jpg", titulo:"Eu ainda não era suficiente",
  texto:"Eu te soltei várias vezes por achar que não era homem suficiente pra você. A gente foi e voltou, e mesmo assim o seu cuidado nunca me abandonou."},
 {foto:"fotos/3.jpg", titulo:"2024 · Eu te vi crescer",
  texto:"Depois de um tempo separados, me vi sozinho e vi você virando mulher. Comecei a me perguntar o que eu agregava na sua vida. Eu queria mudar, mas sozinho não conseguia. Foi então que conheci Jesus, o Senhor e Salvador da NOSSA vida."},
 {foto:"fotos/5.jpg", titulo:"O processo de Deus",
  texto:"No processo, a gente não sabe o que vai acontecer, mas sabemos que, tendo Deus no nosso coração e Deus no centro do nosso relacionamento, o processo vai ser lindo. Pode ser árduo, mas com Deus a gente vai conseguir avançar e chegar no lugar que Ele quer pra gente.",
  verso:"“Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.” — Provérbios 3:5-6 (NVI)"}
];
const $ = id => document.getElementById(id);
let n = 0;
function mostrar(id){
  document.querySelectorAll('.scr').forEach(e => e.classList.remove('on'));
  $(id).classList.add('on');
}
function coracoes(qtd){
  for(let i=0;i<qtd;i++){
    const h = document.createElement('div');
    h.className = 'fl'; h.textContent = '♥';
    h.style.cssText = `left:${Math.random()*100}vw;bottom:-30px;font-size:${16+Math.random()*30}px;color:${Math.random()>.5?'#ff4d79':'#ffb3c7'};animation-delay:${Math.random()*1.2}s`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4500);
  }
}
function render(){
  const s = historia[n];
  $('img').src = s.foto; $('tt').textContent = s.titulo; $('cp').textContent = s.texto;
  $('vs').textContent = s.verso || '';
  $('dots').innerHTML = historia.map((_,k) => `<i class="${k==n?'a':''}"></i>`).join('');
  $('nx').textContent = n == historia.length-1 ? 'Tenho uma pergunta ♥' : 'Continuar';
}
$('heart').onclick = () => { coracoes(25); setTimeout(() => { mostrar('st'); render(); }, 700); };
$('nx').onclick = () => { coracoes(6); if(n < historia.length-1){ n++; render(); } else mostrar('fin'); };
$('yes').onclick = () => { coracoes(80); mostrar('ok'); };
const no = $('no');
function fugir(e){
  e.preventDefault();
  no.style.position = 'fixed';
  no.style.left = Math.random()*(innerWidth-100)+'px';
  no.style.top = Math.random()*(innerHeight-60)+'px';
}
no.onmouseenter = fugir; no.ontouchstart = fugir; no.onclick = fugir;