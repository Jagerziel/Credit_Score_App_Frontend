// Import Components

// Import React

// Import Framer-Motion
import { motion } from "framer-motion";

// Import CSS

// Export PageTransitionFade Function
export default function PageTransitionFade( { children , page } ) {
    const animations = {
        initial: { opacity: 0 , x: 0 },
        animate: { opacity: 1 , x: 0 },
        exit: { opacity: 0 , x: 0 }
    }

    // Return Div for PageTransitionFade Container
    return (
        <motion.div
            variants={animations}
            key={page}
            custom={page}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={ { 
                duration: .25 , 
                ease: "linear", 
                type: "tween" , 
            } }
        >
            { children }
        </motion.div>
    );
}