import RootContainer from "./StyledComponents/RootContainer";
import AppRoutes from "../navigation/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from '../navigation/Menu'
import HeaderArea from './StyledComponents/HeaderArea'
import FooterArea from './StyledComponents/FooterArea'
import ContentArea from "./StyledComponents/ContentAres";

const MainLayout = (props) => { 

    return (  
        <Router>
            <RootContainer>
                <HeaderArea>
                    <Menu />                    
                </HeaderArea>                

                <ContentArea>
                    {/* Approutes er komponenten der routeren swapper valget fra menyen*/}
                    <AppRoutes />
                </ContentArea>

                <FooterArea>
                    {/* Footeren kunne vært en komponent der man skrev en ny melding?? */}
                    Footer
                </FooterArea>
            </RootContainer>
        </Router>
    );
};

export default MainLayout;