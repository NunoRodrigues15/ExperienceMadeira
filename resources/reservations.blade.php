@extends('layouts.app')

@section('content')
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <td>ID</td>
            <td>Data de início</td>
            <td>Data de fim</td>
            <td>N. Pessoas</td>
            <td>Utilizador que Reservou</td>
            <td>Experiência Reservada</td>
            <td>Criado a:</td>
            <td>Alterado a:</td>
        </tr>
    </thead>
    <tbody>
    @foreach($reservations as $key => $value)
        <tr>
            <td>{{ $value->id }}</td>
            <td>{{ $value->start_date }}</td>
            <td>{{ $value->end_date }}</td>
            <td>{{ $value->number_people }}</td>
            <td>{{ $value->user_id }}</td>
            <td>{{ $value->experiences_id }}</td>
            <td>{{ $value->created_at }}</td>
            <td>{{ $value->updated_at }}</td>
            </tr>
   @endforeach
   </tbody>
</table>
@endsection
