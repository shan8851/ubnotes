import { Input, MultiSelect, Textarea, Select, Button, Title, Notification } from '@mantine/core';
import { useState } from 'react';
import { createNote } from './lib';

export const AddNewForm = () => {
  const [alias, setAlias] = useState('');
  const [stakes, setStakes] = useState([]);
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');
  const [showError, setShowError] = useState(false)

  const onAdd = async () => {
    if (!alias || !notes) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 3000);
    } else {
      const note = {
        alias,
        stakes,
        notes,
        tag
      }
      createNote(note)
    }
  }

  return (
    <div>
      <Title order={3}>Add new note</Title>
      {showError && (
        <Notification color='red' title="Oops, something went wrong">
          Please make sure you add at least Alias and notes.
        </Notification>
      )}
      <Input.Wrapper label="Alias" required>
        <Input
          placeholder="Enter alias"
          onChange={e => setAlias(e.target.value)}
          value={alias}
        />
      </Input.Wrapper>

      <MultiSelect
        label="Stakes they play"
        placeholder="Choose more than one"
        data={[
          { value: '4', label: '4nl' },
          { value: '10', label: '10nl' },
          { value: '25', label: '25nl' },
          { value: '50', label: '50nl' },
          { value: '100', label: '100nl' },
          { value: '200', label: '200nl' },
          { value: '400', label: '400nl' },
        ]}
        value={stakes}
        onChange={setStakes}
      />
      <Textarea
        placeholder="Notes..."
        label="Notes"
        autosize
        minRows={4}
        value={notes}
        onChange={e => setNotes(e.target.value)}
        withAsterisk
      />
      <Select
        label="Tag"
        placeholder="Pick one"
        data={[
          { value: 'whale', label: 'Whale' },
          { value: 'fish', label: 'Fish' },
          { value: 'badReg', label: 'Bad Reg' },
          { value: 'goodReg', label: 'Good Reg' },
        ]}
        value={tag}
        onChange={setTag}
      />
      <Button styles={{ root: { marginTop: 16 } }} fullWidth onClick={onAdd}>Add</Button>
    </div>
  )
}
