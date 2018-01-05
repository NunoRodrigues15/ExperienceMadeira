<!--
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
    width: auto;
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
    display: flex;
    flex-flow: column;
    border-radius: 5px;
    background-color: #f2f2f2;
    margin: 1em;
}
</style> -->
    @extends('layouts.app')
    @section('content')
  <form role="form" method="POST" action="{{ url('/companies') }}">
       {{ csrf_field() }}
      <div class="">
          <label for="name">Nome da Empresa:</label>
          <input type="text" id="name" name="name" required>
      </div>
      <div class="">
          <label for="description">Descrição da Empresa:</label>
          <input type="text" id="description" name="description" placeholder="Antigos Carro Rápidos" required>
      </div>
      <div class="">
          <label for="user_id">Utilizador Associado a esta Empresa:</label>
          <input type="number" id="user_id" name="user_id" placeholder="309" required>
      </div>
      <div class="">
          <label for="avatar_id">Adicione uma foto da empresa:</label><br>
          <input type="file" name="avatar_id" accept="image/*">
      </div>

        <input type="submit" value="Submeter">
</form>

@endsection
