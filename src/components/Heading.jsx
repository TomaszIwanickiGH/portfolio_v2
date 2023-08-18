import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Heading = ({ id, subtitle, title }) => {
  return (
    <motion.div variants={textVariant()}>
      <span id={id}>&nbsp;</span>
      <p className={`${styles.sectionSubText}`}>{subtitle}</p>
      <h2 className={`${styles.sectionHeadText}`}>{title}</h2>
    </motion.div>
  )
}

export default Heading
