import React from "react";
import IEditJogadorForm from "../interfaces/IEditJogadorForm";
import useContextStates from "../hooks/useContextStates";

export default function EditJogadorModal() {
  const { jogador, editJogador, useFormEditJogador } = useContextStates();
  
  const { handleSubmit, register, reset, errors } = useFormEditJogador();
  return (
    <div
      className="modal fade"
      id="editJogadorModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edite o seu jogador
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            className="modal-body"
            onSubmit={handleSubmit((data: IEditJogadorForm) => {
              console.log({
                id: String(jogador.id), 
                nome: data.nome, 
                idade: data.idade, 
                time_id: String(jogador.time_id)
              })
              
              editJogador({
                id: String(jogador.id), 
                nome: data.nome, 
                idade: data.idade, 
                time_id: String(jogador.time_id)
              });

              reset();
            })}
          >

            <div className="input-group mb-3">
              <input
                type="number"
                placeholder={String(jogador?.id)}
                className="form-control"
                disabled
              ></input>
            </div>

            <div className="input-group mb-3">
              <input
                type="number"
                placeholder={String(jogador?.time_id)}
                className="form-control"
                disabled
              ></input>
            </div>

            <span className="input-group-text mb-3" id="basic-addon2">
              Escolha o nome do seu jogador:
            </span>
            <div className="input-group mb-3">
              <input
                {...register("nome", {
                  required: {
                    value: true,
                    message: "Nome é obrigatorio",
                  },
                  pattern: {
                    value: /[a-z][A-Z]{1,45}$/gi,
                    message: "Nome invalido",
                  },
                })}
                type="text"
                placeholder="Nome:"
                className="form-control"
                required
              ></input>
              <br />
              <p className="text text-danger">{errors.nome?.message}</p>
            </div>

            <div className="input-group mb-3">
              <input
                {...register("idade", {
                  required: {
                    value: true,
                    message: "Idade é obrigatorio",
                  },
                  pattern: {
                    value: /[0-9]{1,3}$/,
                    message: "Idade invalida",
                  },
                })}
                type="text"
                placeholder="Idade:"
                className="form-control"
                required
              ></input>
              <br />
              <p className="text text-danger">{errors.idade?.message}</p>
            </div>

            <button
              type="button"
              className="btn btn-danger mx-2"
              data-bs-dismiss="modal"
              onClick={() => reset()}
            >
              Fechar
            </button>
            <button type="submit" className="btn btn-success">
              Criar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}