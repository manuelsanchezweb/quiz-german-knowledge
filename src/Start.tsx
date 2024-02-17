import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { QUESTIONS_LIMIT } from './constants/constants'
import { useUserStore } from './store/user'
import { useRef, useState } from 'react'

const Start = ({ data }: { data: any }) => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  // const name = useUserStore((state) => state.name)
  const setUserName = useUserStore((state) => state.setUserName)
  const setUserId = useUserStore((state) => state.setUserId)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleClick = () => {
    setUserId(crypto.randomUUID())

    if (nameRef.current?.querySelector('input')) {
      const name = nameRef.current.querySelector('input')?.value
      if (name) setUserName(name)
    } else {
      setUserName('Anónimo')
    }

    fetchQuestions(QUESTIONS_LIMIT)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value

    // Check if the name exists in the database
    const nameExists = data.some(
      (item: { id: number; name: string; score: number }) => item.name === name
    )
    if (nameExists) {
      setErrorMessage('Bitte, benutzen Sie einen anderen Benutzername.')
      setIsDisabled(true)
    } else {
      setErrorMessage(null)
      if (name?.length > 3) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }
  }

  return (
    <>
      <Typography
        className="text-left"
        variant="body1"
        sx={{ marginBottom: 6 }}
      >
        Testen Sie Ihr Wissen über die deutschen Sprachkenntnisse mit diesem
        inoffiziellen Test, der auf den Fragen aus dem Buch „Wie gust ist Ihr
        Deutsch“ von Bastian Sick basiert.
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 'fit-content', mx: 'auto' }}>
        <FormControl error={!!errorMessage}>
          <InputLabel htmlFor="name">Wie heißen Sie?</InputLabel>
          <Input
            ref={nameRef}
            id="name"
            placeholder="Maximilian Mustermann"
            onChange={handleNameChange}
          />
        </FormControl>
        <Button onClick={handleClick} disabled={isDisabled} variant="contained">
          Los geht's!
        </Button>
      </Stack>
    </>
  )
}

export default Start
