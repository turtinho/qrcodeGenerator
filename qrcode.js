//Utilizando com google charts
function gerarQrCode(){
    let inputCode = document.querySelector('textarea').value;
    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    let conteudoQrCode = GoogleChartAPI + inputCode;
    document.querySelector('#qrCodeImage').src = conteudoQrCode
}