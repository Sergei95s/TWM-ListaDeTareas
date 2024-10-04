import { Button, TextInput, Group } from '@mantine/core';
import { useField } from '@mantine/form';

function FormLis({anadir}) {
  const validateInput = (value) => {
    if (value.trim() === '') {
      return 'No se puede crear una tarea vacia :(';
    }

    anadir(value);
    field.reset();

  }

  const field = useField({

    initialValue: '',
    validate: (value) => value.trim() !== '' ? validateInput(value) : 'No se puede crear una tarea vacia :(',

  });


  return (

    <Group position="apart">

      <TextInput

        {...field.getInputProps()}
        placeholder="Añadir nueva tarea aca   [⊂•⊃_⊂•⊃]"
        mb="md"
        flex={1}
        radius="xl"
        style={{ marginTop: 17 }}
        onKeyDown={(event) => event.key === 'Enter' && field.validate()}

      />

      <Button 
      variant="filled"
      color="blue"
      size="md"
      radius="xl"
      onClick={field.validate}>Añadir 	( ˙꒳​˙ )</Button>

    </Group>

  );

}

export default FormLis;
