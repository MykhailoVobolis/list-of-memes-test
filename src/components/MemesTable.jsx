'use client';

import {
  Button,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const columns = [
  { key: 'name', label: 'NAME' },
  { key: 'image', label: 'IMAGE' },
  { key: 'likes', label: 'LIKES' },
  { key: 'actions', label: 'ACTIONS' },
];

export default function MemesTable() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const { data } = await axios.get('/api/memes/load');
        setMemes(data.memes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  return loading ? (
    <Loader />
  ) : (
    <Table aria-label="Memes collection table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={memes}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {columnKey === 'actions' ? (
                  <Button
                    color="default"
                    size="sm"
                    // onPress={() => console.log('Action for', item)}
                  >
                    Edit
                  </Button>
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
