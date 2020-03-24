import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';

import { Welcome, Button, Input, Label, Strong } from '../../components';
import { Container, Form } from './styles';

export default function Forms() {
   const formRef = useRef(null);

   useEffect(() => {
      setTimeout(() => {
         formRef.current.setData({
            cpf: '063.432.093-95'
            // Ex.: Com dados que possuem relação
            // address: {
            //    city: 'São Miguel'
            // }
         })
      }, 1000)
   }, []);

   async function handleSubmit(data, { reset }) {
      try {
         const schema = Yup.object().shape({
            cpf: Yup.string().required('O CPF é obrigatório').min(14, 'O CPF deve possuir 11 caracteres')
            // Ex.: Com dados que possuem relação
            // address: Yup.object().shape({
            //    city: Yup.string().min(3, 'No mínimo 3  caracteres').required('A cidade é obrigatória')
            // })
         });

         // Quando tipo de formulario for muitos campos por tela, colocar abortEarly false.
         //
         await schema.validate(data, {
            abortEarly: true
         });

         formRef.current.setErrors({});

         reset();
      } catch (error) {
         if (error instanceof Yup.ValidationError) {
            
            const errorMessages = {};
            
            // Quando tipo de formulario for muitos campos por tela, fazer um forEach para pegar todos os erros.
            //
            // error.inner.forEach(err => {
            //    errorMessages[err.path] = err.message;
            // });
           
            errorMessages[error.path] = error.message;

            formRef.current.setErrors(errorMessages);
         }
      }
   }

   return (
      <Welcome form>
         <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
               <Label>
                  Informe seu <Strong>CPF</Strong>
               </Label>

               <Input
                  name="cpf"
                  masked
                  type={"cpf"}
               />

               <Button
                  icon
                  onPress={() => formRef.current.submitForm()}
               >
                  Continuar
            </Button>
            </Form>
         </Container>
      </Welcome>
   );
}