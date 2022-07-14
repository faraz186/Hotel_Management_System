import React from 'react'
import Hero from '../components/Hero';
import MainHeading from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() 
{
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <MainHeading title="Luxurious Rooms" subtitle="deluxe Rooms starting at Rs.35000">
                <Link to="/rooms" className="btn btn-primary">
                      View Our Rooms
                </Link>
        </MainHeading>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
