import styles from './Avatar.module.css'

export function Avatar(props) {
  return (
    <div>
       <img 
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar } 
        src={props.src}
      />
    </div>
  )
}