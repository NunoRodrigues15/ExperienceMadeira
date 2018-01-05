@extends('layouts.app')
@section('content')
<style>
input[type=text], select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=number], select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 50%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    display: flex;
    flex-flow: column;
    border-radius: 5px;
    background-color: #f2f2f2;
    margin: 1em;
}
</style>
<body>
<div>
  <form action="">
      <div class="">
          <label for="name">Nome da Localização:</label>
          <input type="text" id="name" name="name" placeholder="O nome da sua localização.."  required>
      </div>
<div class="">
    <h1>Selecione no mapa o local a adicionar:</h1>
    <div id="map" style="width:400px;height:400px;background:yellow" onclick="myMap()" required></div><br>
</div>
<div class="">
    <label for="typical_weather">Clima típico:</label>
    <input type="text" id="typical_weather" name="typical_weather" placeholder="Ex: Ameno" required>
</div>

        <input type="submit" value="Submeter">
</form>

@endsection
