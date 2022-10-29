import s from './Digits.module.scss'

type Props = {
  updateCalc: (val: string) => void;
  calculate: () => void;
  dotted: boolean;
}

const Digits = (props: Props) => {
  const digits: number[] = []

  for (let i = 1; i < 10; i++) {
    digits.push(i)
  }

  console.log(props.dotted)

  return (
    <div className={s.digits}>
      {digits.map(dig => (
        <button key={dig} onClick={() => props.updateCalc(dig.toString())}>
          {dig}
        </button>
      ))}
      <button onClick={() => props.updateCalc(props.dotted ? '' : '.')}>.</button>
      <button onClick={() => props.updateCalc('0')}>0</button>
      <button onClick={props.calculate}>=</button>
    </div>
  )
}

export default Digits
