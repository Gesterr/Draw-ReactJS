import classes from '../square/Square.module.css'

export default function Square({onClick}) {
  
    let id = (Math.random() * (1000000 - 1) + 1).toFixed(0);
  return (
    <div key={id} id={id} onClick={() => onClick(id)} className={classes.check}></div>
  )
}
