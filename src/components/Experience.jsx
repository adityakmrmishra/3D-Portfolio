
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

import PropTypes from "prop-types";


// Render a point string but convert any http(s) URLs into clickable links
const renderPointText = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, idx) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline break-words"
        >
          {part}
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

const ExperienceCard =({experience})=>(
  <VerticalTimelineElement
      contentStyle={{
        background: "#181818",
        color: "#fff",
        // prevent horizontal overflow and allow long words to wrap inside the card
        overflowX: 'hidden',
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        // allow the content box to shrink in flex layouts
        minWidth: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #181818" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold break-words'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold break-words'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            // ensure long words or links wrap instead of causing horizontal overflow
            className='text-white-100 text-[14px] pl-1 tracking-wider break-words whitespace-normal'
          >
            {renderPointText(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index) =>(
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const WrappedExperience = SectionWrapper(Experience, 'work');
export default WrappedExperience;