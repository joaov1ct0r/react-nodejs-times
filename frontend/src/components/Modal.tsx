import React from "react";
import useContextStates from "../hooks/useContextStates";
import useCreateTime from "../hooks/useCreateTime";
import useFormTime from "../hooks/useFormTime";
import ICreateTime from "../interfaces/ICreateTime";

export default function Modal(): JSX.Element {
  const { handleSubmit, register, reset } = useFormTime();
  const {setShouldFetch} = useContextStates();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Crie novo time
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
            onSubmit={handleSubmit((data: ICreateTime) => {
              useCreateTime(data)
              setShouldFetch(true)
              reset();
            })}
          >
            <span className="input-group-text mb-3" id="basic-addon2">
              Escolha o nome do seu time:
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
  );
}
