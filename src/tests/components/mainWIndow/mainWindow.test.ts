import { MainInfoForm } from './../../../components/mainWindow/MainInfoForm'
import { render, screen } from '@testing-library/react'

test('On initial loding the search form is empty', () => {
  render(<MainInfoForm />)

  screen.debug()
})
