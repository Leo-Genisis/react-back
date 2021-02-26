import Image from 'next/image';
import styles from './home.module.css';

export default function Slogan (){
    return(
        <div className={styles.slogan}>
          
            <div >
              <h1>Bem vindo a nova central de desenvolvimento tecnológico !!</h1>
            </div>
            <div>
              <p>Aqui você encontrará a aplicações Web, Redes, Banco de dados e muito mais.</p>
              <p>Contando com os melhores desenvolvedores do Brasil</p>   

            </div>
            
         
        </div>
    )
}