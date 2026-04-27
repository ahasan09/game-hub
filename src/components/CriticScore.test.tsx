import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import CriticScore from './CriticScore'

const renderWithChakra = (ui: React.ReactElement) =>
  render(<ChakraProvider>{ui}</ChakraProvider>)

describe('CriticScore', () => {
  it('renders the score', () => {
    renderWithChakra(<CriticScore score={88} />)
    expect(screen.getByText('88')).toBeInTheDocument()
  })

  it('renders any numeric score passed in', () => {
    renderWithChakra(<CriticScore score={50} />)
    expect(screen.getByText('50')).toBeInTheDocument()
  })
})
