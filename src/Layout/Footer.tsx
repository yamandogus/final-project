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
  { to: "/Principles", label: "Çalışma İlkelerimiz" },
  { to: "/SalesAgreement", label: "Satış Sözleşmesi" },
  { to: "/WarrantyReturns", label: "Garanti ve İade Koşulları" },
  { to: "/CustomerReviews", label: "Gerçek Müşteri Yorumları" },
  { to: "/Blog", label: "Blog" },
];

const popularProductsLinks: Link[] = [
  { to: "/Protein", label: "Protein" },
  { to: "/SportsNutrition", label: "Spor Gıdaları" },
  { to: "/Health", label: "Sağlık" },
  { to: "/Food", label: "Gıda" },
  { to: "/Vitamins", label: "Vitamin" },
  { to: "/Accessories", label: "Aksesuar" },
  { to: "/AllProducts", label: "Tüm Ürünler" },
  { to: "/Packages", label: "Paketler" },
  { to: "/LaunchOffers", label: "Lansmana Özel Fırsatlar" },
];

const categoriesLinks: Link[] = [
  { to: "/WheyProtein", label: "Whey Protein" },
  { to: "/CreamOfRice", label: "Cream of Rice" },
  { to: "/Creatine", label: "Creatine" },
  { to: "/BCAA", label: "BCAA+" },
  { to: "/PreWorkout", label: "Pre-Workout" },
  { to: "/FitnessPackage", label: "Fitness Paketi" },
  { to: "/Collagen", label: "Collagen" },
  { to: "/DailyVitaminPackage", label: "Günlük Vitamin Paketi" },
  { to: "/ZMA", label: "ZMA" },
];

const Footer: React.FC = () => {
  const renderLink = (Links: Link[]): JSX.Element => {
    return (
      <Stack direction={"column"} spacing={1}>
        {Links.map((link) => (
          <Link
            className="footerLink"
            key={link.to}
            to={link.to}
          >
            <Typography variant="subtitle2">{link.label}</Typography>
          </Link>
        ))}
      </Stack>
    );
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
              <Typography
                variant="h6"
                gutterBottom
              >
               <strong> OJS <br /> NUTRITION</strong> 
                
              </Typography>
              <div>{renderLink(contactLinks)}</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                gutterBottom
              >
                <strong>Popüler Ürünler</strong>
              </Typography>
              {renderLink(popularProductsLinks)}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bolder" }}
              >
                <strong>Kategoriler</strong>
              </Typography>
              {renderLink(categoriesLinks)}
            </Grid>
          </Grid>
        </Container>
      </Box>
        <Box className="test" sx={{backgroundColor:'rgb(34, 34, 34)'}}>
        <Container style={{border:'none !important'}} >
        <Accordion 
        sx={{"&:before":{backgroundColor:'transparent'}}}
        className="accordion">
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
      <Accordion
      sx={{"&:before":{backgroundColor:'transparent'}}}
      className="accordion">
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
      <Accordion 
      sx={{"&:before":{backgroundColor:'transparent'}}}
      className="accordion">
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