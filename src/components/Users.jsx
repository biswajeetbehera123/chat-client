import React from 'react'
import "./myStyles.css"
import { IconButton } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import logo from "./live-chat_512px.png"
import { AnimatePresence, motion } from "framer-motion"

const Users_Groups = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{ease:"anticipate", duration:"0.5"}} className='list-container'>
                <div className="ug-header">
                    <img src={logo} style={{ height: "2rem", width: "2rem" }} alt='logo' />
                    <p className='ug-title'>Online Users</p>
                </div>
                <div className="sb-search">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder='Search' className='search-box' />
                </div>
                <div className="ug-list">
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="list-tem">
                        <p className='con-icon'>T</p>
                        <p className='con-title'>Test User</p>
                    </motion.div>
                    
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Users_Groups
