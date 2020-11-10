import React from 'react'
import Card from './Card'
import logo from './Assets/Explore_it_logo.jpg'
import { motion, AnimatePresence } from "framer-motion";

class LandingPage extends React.Component {

render() {
        return (
        <motion.div
                exit={{ x: "-100vh" }}
                animate={{ x: 0 }}
                initial={{ x: "-100vw" }}
                transition={{ transition: "lineair" }}
                className="container"
        >
                <img className="logo" src={logo} alt="logo" />
                <Card />
        </motion.div>
        )
    } 
}
export default LandingPage; 