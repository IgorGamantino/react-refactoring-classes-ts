import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFoodData {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean,
  image: string;
}


interface IModalEditFood {
 isOpen: boolean;
 setIsOpen: () => void;
 handleUpdateFood: (data:IFoodData) => void;
 editingFood: IFoodData;

}

export default function ModalEditFood({isOpen,setIsOpen, handleUpdateFood,editingFood  }: IModalEditFood) {
  const formRef = useRef<FormHandles>(null);

 const handleSubmit = async (data: IFoodData) => {

    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

}
