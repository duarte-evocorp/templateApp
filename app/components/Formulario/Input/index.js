import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, TextInput } from 'react-native';

import { Text } from '../../../components';
import { Container } from './styles';
import { theme } from '../../../styles';

export default function Input({ name, ...props }) {
   const [mask, setMask] = useState('');

   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);

   useEffect(() => {
      if (props.masked) {
         registerField({
            name: fieldName,
            ref: inputRef.current,
            path: '_input.value',
            getValue() {
               return mask;
            },
            setValue(ref, value) {
               ref._inputElement.setNativeProps({ text: value });
               ref._inputElement.value = value;
               setMask(value);
            },
            clearValue(ref) {
               ref._inputElement.setNativeProps({ text: '' });
               ref._inputElement.value = '';
               setMask('');
            }
         });
      } else {
         registerField({
            name: fieldName,
            ref: inputRef.current,
            path: '_lastNativeText',
            getValue(ref) {
               return ref._lastNativeText || '';
            },
            setValue(ref, value) {
               ref.setNativeProps({ text: value });
               ref._lastNativeText = value;
            },
            clearValue(ref) {
               ref.setNativeProps({ text: '' });
               ref._lastNativeText = '';
            }
         });
      }
   }, [fieldName, registerField, mask]);

   const configDefault = {
      ref: inputRef,
      style: styles.inputContainer,
      defaultValue: defaultValue,
      autoFocus: true,
      autoCorrect: false,
      selectionColor: theme.colors.primary
   }

   return (
      <Container>
         {props.masked &&
            <TextInputMask
               {...configDefault}
               value={mask}
               type={props.type}
               onChangeText={(e) => setMask(e)}
               {...props}
            />
         }

         {!props.masked &&
            <TextInput
               {...configDefault}
               {...props}
            />
         }

         {error && <Text h2 danger>{error}</Text>}
      </Container>
   );
}

const styles = StyleSheet.create({
   inputContainer: {
      ...theme.fonts.caption,
      color: theme.colors.white
   }
});