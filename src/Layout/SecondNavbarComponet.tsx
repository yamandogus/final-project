import React from "react";
import { Box, Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LinksProps } from "../services/type";


interface SecondNavbarComponentProps {
  links: LinksProps;
  onOpen: () => void;
  onClose: () => void;
  linksClose: () => void;
}



const SecondNavbarComponent: React.FC<SecondNavbarComponentProps> = ({ links, onOpen, onClose, linksClose}) => {
  const hadleClose = () =>{
    onOpen()
    onClose()
  }

  return (
    <Box width={250} sx={{px:2, zIndex:9999}}>
      <Button startIcon={<ArrowBackIcon/>} onClick={()=> hadleClose()}>GERİ</Button>
        <Typography sx={{
          fontWeight:'bolder',
          fontSize:20
        }}>{links.name}</Typography>
      {links.children && links.children.map((linkChild, index) => (
        <Box key={index}>
          <h4 style={{margin:"15px 0px", paddingBottom:2, borderBottom:"1px solid black"}}>{linkChild.name}</h4>
          <ul>
            {linkChild.sub_children.map((children, index)=>(
              <li
              style={{
                listStyle: "none",
                margin: "10px 0",
              }}
              key={index}
            >
              <Link
                onClick={()=> linksClose()}
                className="linksNavs"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to={`/products/` + children.slug }
              >
                {children.name}
              </Link>
            </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default SecondNavbarComponent;

