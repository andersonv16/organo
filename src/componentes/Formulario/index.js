import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botão from "../Botão";


const Formulario = () => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const itens = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido =>', nome, cargo, imagem, time)
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> 
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)}obrigatorio={true}label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)}label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa  valor={time} aoAlterado={valor => setTime(valor)}obrigatorio={true}label="Time" itens={itens}/>
        <Botão> Criar card</Botão>
        </form>
    </section>
  );
};

export default Formulario;
