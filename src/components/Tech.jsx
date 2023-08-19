import { BallCanvas } from './canvas'
import { technologies } from '../constants'

import Heading from './Heading'
import { SectionWrapper } from '../hoc'

const Tech = () => {
  return (
    <SectionWrapper>
      <Heading
        subtitle="What I can do"
        title="My Skills."
      />
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-center mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Tech
