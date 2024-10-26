import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Link {
  to: string;
  label: string;
}

const contactLinks: Link[] = [
  { to: "/ContactUs", label: "İletişim" },
  { to: "/AboutUs", label: "Hakkımızda" },
  { to: "/SSS", label: "Sıkça Sorulan Sorular" },
  { to: "/KVKK", label: "KVKK" },
  { to: "/", label: "Çalışma İlkelerimiz" },
  { to: "/", label: "Satış Sözleşmesi" },
  { to: "/", label: "Garanti ve İade Koşulları" },
  { to: "/", label: "Gerçek Müşteri Yorumları" },
  { to: "/", label: "Blog" },
];

const popularProductsLinks: Link[] = [
  { to: "/category/38fb5754-3068-4490-a12a-169fa564c675/PROTEİN", label: "Protein" },
  { to: "/category/d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c/Spor Gıdaları", label: "Spor Gıdaları" },
  { to: "/category/8eaeff30-3138-49ac-b120-0eac18866190/Sağlık", label: "Sağlık" },
  { to: "/category/8eaeff30-3138-49ac-b120-0eac18866190/Gıda", label: "Gıda" },
  { to: "/category/cae64711-98b9-48f4-82b4-c5d460718dcf/Vitamin", label: "Vitamin" },
  { to: "/", label: "Aksesuar" },
  { to: "/AllProducts", label: "Tüm Ürünler" },
  { to: "/", label: "Paketler" },
  { to: "/", label: "Lansmana Özel Fırsatlar" },
];

const categoriesLinks: Link[] = [
  { to: "/products/whey-protein", label: "Whey Protein" },
  { to: "/products/cream-of-rice", label: "Cream of Rice" },
  { to: "/products/creatine", label: "Creatine" },
  { to: "/products/bcaa-411", label: "BCAA+" },
  { to: "/products/preworkout", label: "Pre-Workout" },
  { to: "/", label: "Fitness Paketi" },
  { to: "/products/collagen", label: "Collagen" },
  { to: "/", label: "Günlük Vitamin Paketi" },
  { to: "/products/zma", label: "ZMA" },
];

const Footer: React.FC = () => {
  const renderLink = (Links: Link[]): JSX.Element => {
    return (
      <Stack direction={"column"} spacing={1}>
        {Links.map((link, index) => (
          <Link
            className="footerLink"
            key={index}
            to={link.to}
          >
            <Typography variant="subtitle2">{link.label}</Typography>
          </Link>
        ))}
      </Stack>
    );
  };

  const accordionStyle = {
    border: "none",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    backgroundColor: "transparent",
  };

  return (
    <>
      <Box
        className="footer1"
        component={"footer"}
        sx={{ py: 6, backgroundColor: "#222222", color: "white" }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                <strong>OJS <br /> NUTRITION</strong>
              </Typography>
              <div>{renderLink(contactLinks)}</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                <strong>Popüler Ürünler</strong>
              </Typography>
              {renderLink(popularProductsLinks)}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bolder" }}>
                <strong>Kategoriler</strong>
              </Typography>
              {renderLink(categoriesLinks)}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="test" sx={{backgroundColor:'#222222'}}>
        <Container style={{border:'none !important'}}>
          <Accordion sx={accordionStyle} className="accordion">
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <strong>+ OJS <br /> NUTRITION</strong> 
            </AccordionSummary>
            <AccordionDetails>
              {renderLink(contactLinks)}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={accordionStyle} className="accordion">
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <strong>+ Popüler Ürünler</strong>
            </AccordionSummary>
            <AccordionDetails>
              {renderLink(popularProductsLinks)}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={accordionStyle} className="accordion">
            <AccordionSummary
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <strong>+ Kategoriler</strong>
            </AccordionSummary>
            <AccordionDetails>
              {renderLink(categoriesLinks)}
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </>
  );
};

export default Footer;