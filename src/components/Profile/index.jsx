import styles from "./styles.module.css"
import photo from "./clarc.jpg"


export function Profile(props) {
   return (
    <div className={styles.container}>
        <img className={styles.avatar} src={photo} alt={props.name}/>        
        <h2 className={styles.name}>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
        <div className={styles.links}>
            <a href={props.githubUrl} target="_blank">GitHub</a>
            <a href={props.linkedinUrl} target="_blank">Linkedin</a>
        </div>
    </div>
   ) 
}