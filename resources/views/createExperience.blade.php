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
input[type=date], select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=radio], select {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
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
    border-radius: 5px;
    background-color: #f2f2f2;
    margin: 1em;
    display: flex;
    flex-flow: column;
}
</style>
<body>

<div>
  <form action=""  method="POST" action="{{ url('/register') }}">
      <div class="">
    <label for="name">Nome da Experiência</label>
    <input type="text" id="name" name="name" placeholder="O nome da sua experiência.." required>
  </div>
  <div class="">
    <label for="short_description">Breve Descrição da Experiência</label>
    <input type="text" id="short_description" name="short_description" placeholder="Ex: Caminhada ao longo do Chão dos Louros" required>
 </div>
 <div class="">
    <label for="description">Descrição Detalhada da Experiência</label>
    <input type="text" id="description" name="description" placeholder="Ex: Iremos levar bicicletas e andar pelas ruas principais do bairro central do Vedado, em Havana.." required>
 </div>
 <div class="">
    <label for="start_date">Data de Abertura da Experiência</label>
    <input type="date" id="start_date" name="start_date" placeholder="Ex:22/12/2017" required>
</div>
<div class="">
    <label for="end_date">Data de Fecho da Experiência</label>
    <input type="date" id="end_date" name="end_date" placeholder="Ex:22/12/2018" required>
</div>
<div class="">
    <label for="weekend_open">Disponível ao Fim de Semana?</label>
    <input type="radio" id="weekend_open" name="weekend_open" value="0" required> Não
    <input type="radio" id="weekend_open" name="weekend_open" value="1" required> Sim
</div>
<div class="">
    <label for="level">Nível de Dificuldade:</label>
    <select id="level" name="level" required>
      <option value="1">1 - Muito Fácil: Apto para qualquer idade</option>
      <option value="2">2 - Fácil: Crianças maiores de 6 anos</option>
      <option value="3">3 - Mediano: Não aconselhado a pessoas com deficiência motora, crianças ou idosos</option>
      <option value="4">4 - Difícil: Necessidade de agilidade</option>
      <option value="5">5 - Extremo: Aconselhado apenas para praticantes de desporto ou profissionais</option>
    </select>
</div>
<div class="">
    <label for="duration">Duração da Atividade:</label>
    <input type="text" id="duration" name="duration" placeholder="Ex:2h" required>
</div>
<div class="">
    <label for="price">Preço da Experiência:</label>
    <input type="number" id="price" name="price" placeholder="Ex:99" required>
</div>
<div class="">
    <label for="price_unit">Moeda:</label>
    <select id="price_unit" name="price_unit" required>
      <option value="$">1 - $: Dólar Americano</option>
      <option value="€">2 - €: Euro </option>
  </select><br>
</div>
<div class="">
    <label for="max_people">Lotação Máxima para a Experiência:</label>
    <input type="number" id="max_people" name="max_people" placeholder="Ex:100" required>
</div>
<div class="">
    <label for="categories_id">Selecione a categoria da experiência:</label>
    <select id="categories_id" name="categories_id" required>
    </select><br>
</div>
<div class="">
    <label for="locations_id">Selecione a localização sua da experiência:</label>
    <select id="locations_id" name="locations_id" required>
    </select><br>
</div>
<div class="">
    <label for="requirements_id">Quais os requisitos para realizar a sua experiência?</label>
    <input id="requirements_id" type="text" name="requirements_id" placeholder="Ex: Sapatilhas de Desporto" required>
</div>
<div class="">
    <label for="experience_images_id">Adicione uma foto da sua experiência:</label><br>
    <input type="file" name="experience_images_id" accept="image/*">
</div>
    <input type="submit" value="Submeter">
  </form>
</div>

</body>
</html>


@endsection
