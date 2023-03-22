import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles/styles"
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={(textVariant())}>
        <h2 className={`${styles.sectionHeadText}`}><span className=" border-b-4 border-solid border-jsf-blue text-jsf-blue">JSF</span> Contabilidade e Assessoria</h2>
      </motion.div>

      <motion.p
        className="text-justify"
        variants={fadeIn('', '', 0.2, 1)}
      >
        Presentes no mercado contábil desde 1982 no mesmo endereço, apaixonados pelo que fazemos, prestando serviço 
        com extrema eficiência e estando sempre ao lado de nossos clientes e parceiros.
      </motion.p>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.2, 1)}
      >
      Nos dedicamos a oferecer um serviço de contabilidade personalizado, de acordo com as necessidades de cada cliente, simplificando toda a burocracia contábil imposta pelo fisco de 
      forma que o empresário possa focar na gestão de sua empresa e ter o mínimo de trabalho com tais burocracias, o mínimo de custos tributários, 
      a menor preocupação possível e consequentemente o maior resultado possível no empenho de suas funções.
      </motion.p>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
      Oferecemos também auxílio na gestão do seu negócio, uma vez que nossa equipe também é capacitada e diplomada para administração e gestão de empresas.
      </motion.p>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
      Estamos prontos para atendê-lo, sejam quais forem suas necessidades contábeis, em nossa sede em Nova Friburgo – RJ ou em qualquer lugar do estado do Rio de Janeiro, seja remota ou presencialmente.
    </motion.p>

      <motion.div variants={(textVariant())}>
        <h3 className={`${styles.sectionSubText} mt-4`}><span className=" border-b-4 border-solid border-jsf-blue">Missão</span></h3>
      </motion.div>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
       Usar todo nosso conhecimento para ajudar o sucesso da sua empresa, descomplicando a contabilidade e a aplicando da forma mais produtiva e menos custosa as empresas, permitindo que o gestor se dedique na gestão e não nas burocracias estatais.
      </motion.p>

      <motion.div variants={(textVariant())}>
        <h3 className={`${styles.sectionSubText} mt-4`}><span className=" border-b-4 border-solid border-jsf-blue">Visão</span></h3>
      </motion.div>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
      Estar ao lado dos empresários, os auxiliando e impulsionando a chegar ao tão sonhado sucesso.
      </motion.p>

      <motion.div variants={(textVariant())}>
        <h3 className={`${styles.sectionSubText} mt-4`}><span className=" border-b-4 border-solid border-jsf-blue">Valores</span></h3>
      </motion.div>

      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
      Ética profissional, comprometimento, profissionalismo e primor pela qualidade em todos os serviços prestados.
      </motion.p>
    </>
    
  )
}

export default SectionWrapper(About, 'about')