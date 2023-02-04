import React from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./styles.css"

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; // your form submit function which will invoke after successful validation

      const handleClose = () => {
        setFormVis(false);
      }
        
      return (
        <>
          <Modal show={formVis} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body>
                <label>Nombre</label>
                <input
                  {...register("nombre", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors?.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe superar los 3 caracteres</p>
                )}
               <label>Email</label>
               <input
              className="form-control"
              type="email"
              name="email1"
              {...register("email1", { minLength: 3, required: true })}
            />
              <label>Repetir email</label>
          <input
            className="form-control"
              type="email"
              name="email2"
              {...register("email2", { minLength: 3, required: true, validate:{equalMails: mail2=>mail2 ===getValues().email1} })}
            />
            {errors?.email2?.type === "equalMails" && (
              <p>Los emails deben coincidir</p>
            )}
               
                <label>Telefono</label>
                <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}
                {errors?.phone?.type === "required" && <p>El campo telefono es requerido</p>}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className="buttonClose" onClick={handleClose}>
                  Cerrar
                </Button>
                <>
            <div className='buttons'>
                <Button className="buttonAdd" variant="primary" type ="submit">
                  Confirmar pedido
                </Button>
            </div>
            </>
              </Modal.Footer>
            </form>
          </Modal>
        </>

      );
};

export default FormComp;
