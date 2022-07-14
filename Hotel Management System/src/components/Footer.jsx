import React from 'react'
import { FaFacebookSquare} from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => 
{
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                    <small style={{fontSize:"18px"}}>Copyright &copy; 2022, By Mohammad Faraz</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100074298470471">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a target='_blank' href="https://github.com/faraz186">
                                <AiOutlineGithub className="connect text-dark" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/mohammad-faraz-37abb8206/">
                                <AiFillLinkedin className="connect text-dark" /></a>
                            <a target='_blank' href="https://www.youtube.com/channel/UCPSMZKIfIfMvf_r0wlaq3VQ">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer