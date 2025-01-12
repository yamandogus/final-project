import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";

interface CustomAccordionProps {
  children: React.ReactNode;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  title: string;
  panelNumber: number;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ children, expanded, onChange, title, panelNumber }) => {
  return (
    <Accordion 
      expanded={expanded} 
      onChange={onChange}>
      <AccordionSummary
        sx={{
          borderBottom: "1px solid rgb(228, 227, 232)",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              backgroundColor: expanded ? "black": "white",
              color:expanded ? "white" :"black",
              lineHeight: "20px",
              height: "20px",
              fontSize: 12,
              left: "-25px",
              top: "4px",
              borderRadius: "50%",
              padding: "2px 6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            {panelNumber}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;