import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles/styles"
import { fadeIn, textVariant } from '../utils/motion'

const Countability = () => {
  return (
    <>
      <motion.div variants={(textVariant())}>
        <h2 className={`${styles.sectionHeadText}`}>O que é <span className=" border-b-4 border-solid border-jsf-blue text-jsf-blue">Contabilidade? </span></h2>
      </motion.div>

      <motion.p
        className="text-justify"
        variants={fadeIn('', '', 0.2, 1)}
      >
        <span className="text-2xl text-jsf-blue">"</span>A Contabilidade é a ciência que estuda, interpreta e registra os 
        fenômenos que afetam o patrimônio de uma entidade. Ela alcança sua finalidade através do registro e análise de 
        todos os fatos relacionados com a formação, a movimentação e as variações do patrimônio administrativo, vinculado
         à entidade, com o fim de assegurar seu controle e fornecer a seus administradores as informações necessárias à 
         ação administrativa, bem como a seus proprietários e demais pessoas relacionadas, as informações sobre o estado 
         patrimonial e o resultado das atividades desenvolvidas pela entidade para alcançar os seus fins.
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.2, 1)}
      >
      A Contabilidade adquire cada vez maior importância no contexto atual, dado o crescimento das corporações, 
      entidades e empresas, que exige grande eficácia dos profissionais contábeis, para que sejam capazes de trabalhar a 
      infinita gama de informações que são necessárias ao estudo e controle do patrimônio das entidades.
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
       Espera-se cada vez mais um Contador capaz de atuar globalmente sem, no entanto, deixar de possuir os conhecimentos profissionais necessários para sua atuação local, além de conhecimentos e habilidades no uso de métodos quantitativos que 
       contribuam com o desenvolvimento de soluções e alternativas de decisão.
       <span className="text-2xl text-jsf-blue">"</span><span className="text-jsf-blue">(USP)</span>
      </motion.p>
    </>
  )
}

export default SectionWrapper (Countability, 'countability')