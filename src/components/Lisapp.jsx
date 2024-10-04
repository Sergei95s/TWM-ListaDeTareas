import { Container, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import Lista from './Lista';
import FormLis from './formLis';

function Lisapp() {
  const [cosas, setcosas] = useLocalStorage({ key: 'cosas', defaultValue: [] });

  const anadir = (cosas) => {
    setcosas((prevcosas) => [...prevcosas, { id: prevcosas.length, title: cosas, completed: false }]);
  }

  const toggle = (id) => {
    setcosas((prevcosas) => prevcosas.map((cosas) => cosas.id === id ? { ...cosas, completed: !cosas.completed } : cosas));
  }

  const borrar = (id) => {
    setcosas((prevcosas) => prevcosas.filter((cosas) => cosas.id !== id));
  }

  return (
    <Container size="sm">

      <Title style={{ textAlign: 'center', marginTop: 20 }}>TWM - Lista de tareas</Title>

      <FormLis anadir={anadir} />

      <Lista cosas={cosas} toggle={toggle} borrar={borrar} />

    </Container>
  );
};

export default Lisapp;
