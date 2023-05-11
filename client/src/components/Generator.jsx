import Button from './Button.jsx';
import { motion } from 'framer-motion';

const Generator = ({ excuse, fetchRandomExcuse }) => {
  return (
    <article className='card'>
      <motion.h1
        variants={{
          initial: { opacity: 0 },
          final: {
            opacity: 1,
            transition: {
              duration: 1
            }
          }
        }}
        initial='initial'
        animate='final'
      >
        Dev excuses
      </motion.h1>
      <p className='text italic'>{excuse?.message}</p>
      <Button fetchRandomExcuse={fetchRandomExcuse} />
    </article>
  );
};
export default Generator;
