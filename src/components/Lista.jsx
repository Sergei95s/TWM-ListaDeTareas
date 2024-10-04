import {Paper, Stack, Checkbox, Button} from '@mantine/core';


function listado({cosas, toggle, borrar}) {
    return (
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="flex-start"
        gap="xs"
      >
        
        {cosas.map((cosas) => (
  
          <Paper key={cosas.id} 
          shadow="xs" 
          withBorder p="xs" 
          radius="xl" 
          style={{ display: 'flex', justifyContent: 'space-between' }}>
  
            <Checkbox

              checked={cosas.completed}
              label={cosas.title}
              color="lime"
              radius="xl"
              size="lg"
              style={{ flex: 1, marginTop: 5, marginRight: 10, textDecoration: cosas.completed ? 'line-through' : 'none' }}
              onChange={() => toggle(cosas.id)}

            />
  
            <Button
  
              variant="filled"
              color="red"
              size="md"
              radius="xl"
              onClick={() => borrar(cosas.id)}
            >borrar (T^T) </Button>
  
          </Paper>

        ))}

      </Stack>

    );

  };
  
  export default listado;
  