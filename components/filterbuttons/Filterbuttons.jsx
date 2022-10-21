
import classes from './filterbuttons.module.css'
import styles from '../../styles/containerstyle.module.css';

const filterbuttons = (props) => {
  return (
    <div className={`${classes.filter} ${styles.container}`}>

      <a href="#">
        <button  onClick={()=>{props.setsortval("htol");}}>Price - Lowest</button>
      
        </a>
      <a href="#" >
        <button onClick={()=>{props.setsortval("ltoh");}}>Price - Highest</button>
        </a>
      
     
      </div>
  )
}

export default filterbuttons
