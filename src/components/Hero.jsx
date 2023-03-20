import { styles } from "../styles/styles"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[300px] max-w-7xl mx-auto flex flex-col items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>JSF Contabilidade</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Deixa que a gente cuida das suas finanças.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero