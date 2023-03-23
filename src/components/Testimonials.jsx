import { motion } from "framer-motion"

import { styles } from '../styles/styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from '../constants'

const TestimonialsCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'sprint', index * 0.5, 0.75)}
    className='bg-jsf-blue p-4 rounded-3xl xs-w-[320px] w-full'
  >
    <p className="text-white font-black text-[32px]">"</p>

    <div>
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] text-white-100">
            {designation} of {company}
          </p>
        </div>

        <img 
          src={image} 
          alt={`feedback by ${name}`} 
          className='w-10 h-10 rounded-full object-cover' 
        />

      </div>
    </div>


  </motion.div>
)

const Testimonials = () => {
  return (
    <div className="bg-white-100 rounded-[20px]">
      <div className={`rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionHeadText}`}>Opinião dos nossos <span className=" border-b-4 border-solid border-jsf-blue text-jsf-blue">Clientes</span></h3>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-4 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper (Testimonials, '')