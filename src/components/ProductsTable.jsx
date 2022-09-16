import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Chip } from '@mantine/core';
import { useEffect } from 'react';
import { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';


const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

  const ProductsTable = () => {
    const [checked, setChecked] = useState(false);
    const { getProducts, products } = useContext(productsContext);
    
    useEffect(() => {
      getProducts();
    }, []);
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === products.length ? [] : products.map((item) => item.id)));

  const rows = products.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Avatar size={40} src={item.image} radius={26} />
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
          </Group>
        </td>
        <td>
          <Chip
            color={checked ? 'green' : 'red'}
            variant='filled'
          checked={false}
          onChange={() => setChecked(false)}
          >
          {item.status}
          </Chip>
          </td>
        <td>{item.price}</td>
      </tr>
    );
  });
  return (
    <ScrollArea>
      <Table sx={{ minWidth: "50rem" }} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === products.length}
                indeterminate={selection.length > 0 && selection.length !== products.length}
                transitionDuration={0}
              />
            </th>
            <th>Название</th>
            <th>Статус</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
 

export default ProductsTable;