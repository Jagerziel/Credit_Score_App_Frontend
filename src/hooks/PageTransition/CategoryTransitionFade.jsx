// Import Framer-Motion
import { motion } from "framer-motion";

// Export ProjectTransitionFade Function
export default function ProjectTransitionFade( { children , index , delayModifier } ) {
    const animations = {
        initial: { opacity: 0 , x: 0 },
        animate: { opacity: 1 , x: 0 },
        exit: { opacity: 0 , x: 0 }
    }

    // Return Div for ProjectTransitionFade Container
    return (
        <motion.div
            variants={animations}
            key={index}
            custom={index}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={ { 
                duration: .25, 
                ease: "linear", 
                type: "tween" , 
                delay:  delayModifier * 0.15 ,
            } }
        >
            { children }
        </motion.div>
    );
}