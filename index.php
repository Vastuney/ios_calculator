<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap" rel="stylesheet">
    <link href="reset.css" rel="stylesheet">
    <link href="style.css?ver=1" rel="stylesheet">
  </head>
  <body>
    <main>
      <div id="calculator">
        <div class="main_calculations">
          <p id="calculations">0</p>
        </div>
        <button data-type="clear" class="button color_grey">AC</button>
        <button data-type="exchange" class="button color_grey">+/-</button>
        <button data-value="%" data-type="operator" class="button color_grey"><i class="fas fa-percentage"></i></button>
        <button data-value="/" data-type="operator" class="button color_yellow"><i class="fas fa-divide"></i></button>
        <button data-value="7" data-type="number" class="button">7</button>
        <button data-value="8" data-type="number" class="button">8</button>
        <button data-value="9" data-type="number" class="button">9</button>
        <button data-value="*" data-type="operator" class="button color_yellow"><i class="fas fa-times"></i></button>
        <button data-value="4" data-type="number" class="button">4</button>
        <button data-value="5" data-type="number" class="button">5</button>
        <button data-value="6" data-type="number" class="button">6</button>
        <button data-value="-" data-type="operator" class="button color_yellow"><i class="fas fa-minus"></i></button>
        <button data-value="1" data-type="number" class="button">1</button>
        <button data-value="2" data-type="number" class="button">2</button>
        <button data-value="3" data-type="number" class="button">3</button>
        <button data-value="+" data-type="operator" class="button color_yellow"><i class="fas fa-plus"></i></button>
        <button data-value="0" data-type="number" class="button double_button">0</button>
        <button data-value="." data-type="number" class="button">.</button>
        <button data-value="=" data-type="equals" class="button color_yellow"><i class="fas fa-equals"></i></button>
      </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
  </body>
</html>
