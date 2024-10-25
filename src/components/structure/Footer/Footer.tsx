import IconUff from "../../icons/icons"; // Certifique-se de que este caminho está correto
import { Container, Toolbar } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div className="static border-t-4">
            <Container maxWidth="lg" className="pb-7">
                <Toolbar className="justify-center flex">
                    <IconUff styles='relative right-8 top-2'/> 
                </Toolbar>
            </Container>
        </div>
    );
};

export default React.memo(Footer);
