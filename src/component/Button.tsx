import styles from './Button.module.css';

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
// NIVEL 1-FUNDAMENTO
// 1-INICIANDO COM REACT
// 4-APRIMORANDO APLICAÇÃO
// 3-EXTENSÃO DE INTERFACE
export function Button({children, ...rest}: Props) {
    return(
        <button className={styles.container} {...rest}>
            {children}
        </button>
    )
}