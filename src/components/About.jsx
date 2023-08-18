import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { services } from '../constants'
import { fadeIn } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import Heading from './Heading'

const SerciceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="title"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <SectionWrapper>
      <Heading
        id="about"
        subtitle="Introduction"
        title="Overview."
      />

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        I'm a frontend / web developer looking for first experience, passionate about developing websites and web applications. I am very familiar with currently used technologies. I am constantly developing my skills and learning new technologies.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <SerciceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default About
