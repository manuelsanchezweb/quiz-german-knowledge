import { Button } from '@mui/material'
import { useQuestionsData } from './hooks/useQuestionData'
import { useQuestionsStore } from './store/questions'

export const Footer = () => {
  // Handle de las respuestas correctas, incorrectas y sin responder
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore((state) => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} richtig - ❌ ${incorrect} falsch - ❓ ${unanswered} noch nicht geantwortet`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </footer>
  )
}
