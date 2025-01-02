import  Box  from '@mui/material/Box';
import React from 'react';
import Image from  "next/image"
import  Typography  from '@mui/material/Typography';

import CustomLink from './Link';

const links=[{
    linkTitle:"Github", link:"https://github.com"
},
{
    linkTitle:"FrontendMentor", link:"https://frotnendmentor.com"
},
{
    linkTitle:"LinkedIn", link:"https://linkedin.com"
},
{
    linkTitle:"Twitter", link:"https://twitter.com"
},
{
    linkTitle:"Instagram", link:"https://instagram.com"
},

]
const Card=()=>{
    return (
        <Box className="cardBackground" sx={{padding:"2rem", borderRadius:"0.5rem",display:'flex' , flexDirection:"column", justifyContent:"center" ,alignItems:"center"}}>
            <Image src="/assets/images/avatar-jessica.jpeg" alt="profile image" height={88} width={88} style={{borderRadius:"50%",marginBottom:"1.5rem"}}/>
            <Typography variant="h1" sx={{fontSize:"2.25rem",marginBottom:"0.25rem" }}>Jessica Randall</Typography>
            <Typography className='neon' variant="h2" sx={{fontSize:"1.3125rem" ,fontWeight:"600",marginBottom:"1.5rem"}}>London, United Kingdom</Typography>
            <Typography sx={{fontSize:"1.3125rem", marginBottom:"1.5rem"}}>"Front-end developer and avid reader."</Typography>
            {links.map((link)=>{
                return <CustomLink linkData={link} key={link.link}/>
            })}

        </Box>
    )
}

export default Card