import Card from "@/components/Card";
import Box from "@mui/material/Box";

import React from "react";

const Home = () => {
  return (
    <Box className="container" sx={{backgroundColor: "#141414",display:"flex",justifyContent:"center" ,alignItems:"center" ,marginLeft:"auto",marginRight:"auto"}}>
      <Card/>
    </Box>
  );
};

export default Home;
