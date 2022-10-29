import s from './Operators.module.scss'

type Props = {
  operators: string[];
  updateCalc: (val: string) => void;
  percentage: () => void;
  reset: () => void;
  deleteLast: () => void;
}

const Operators = (props: Props) => {
  return (
    <div className={s.operators}>
          {props.operators.slice(0, -1).map(op => (
            <button key={op} onClick={() => props.updateCalc(op)}>
              {op}
            </button>
          ))}

          <button onClick={props.percentage}>%</button>
          <button onClick={props.reset}>C</button>
          <button onClick={props.deleteLast}>{'<='}</button>
        </div>
  )
}

export default Operators