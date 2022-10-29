import { Fragment, useState } from 'react'
import Card from './UI/Card/Card'

import Operators from './components/Operators'
import Digits from './components/Digits'

const App = () => {
  const digits: number[] = []

  for (let i = 1; i < 10; i++) {
    digits.push(i)
  }
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const [dotted, setDotted] = useState(false)

  const operators = ['/', '*', '+', '-', '.']

  const updateCalc = (value: string) => {
    if (value === '.') {
      setDotted(true)
    } else if (
      value === '/' ||
      value === '*' ||
      value === '+' ||
      value === '-'
    ) {
      setDotted(false)
    }

    if (dotted && value === '') {
      return
    }

    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      if (
        calc !== '' &&
        operators.includes(value) &&
        value !== calc.slice(-1)
      ) {
        setCalc((prevState: string) => {
          return prevState.slice(0, -1) + value
        })
      }
      return
    }

    console.log(dotted)

    setCalc(calc + value)

    if (!operators.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString())
  }

  const reset = () => {
    setCalc('')
    setResult('')
    setDotted(false)
  }

  const deleteLast = () => {
    if (calc === '') {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const percentage = () => {
    const percent = parseFloat(result) / 100
    setCalc(percent.toString())
    setResult(percent.toString())
  }

  return (
    <Fragment>
      <h1>Great calculator!</h1>
      <Card className='calculator'>
        <div className={`display ${result && 'span'}`}>
          {result ? <span>({result})</span> : ''} <h3>{calc || '0'}&nbsp;</h3>
        </div>
        <Operators
          operators={operators}
          updateCalc={updateCalc}
          percentage={percentage}
          reset={reset}
          deleteLast={deleteLast}
        />
        <Digits dotted={dotted} updateCalc={updateCalc} calculate={calculate} />
      </Card>
    </Fragment>
  )
}

export default App
