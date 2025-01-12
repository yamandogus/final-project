import { Box, Typography, Button } from "@mui/material";
import CustomAccordion from "./CustomAccordion";

interface ShippingSectionProps {
  expanded: string | false;
  handleChangePanel: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  selectedAddress: string;
}

const ShippingSection: React.FC<ShippingSectionProps> = ({
  expanded,
  handleChangePanel,
  selectedAddress
}) => {

  return (
    <CustomAccordion
      expanded={expanded === "panel2"}
      onChange={handleChangePanel("panel2")}
      title="Kargo"
      panelNumber={2}
    >
      {selectedAddress && (
        <Box px={2}>
          <Box
            sx={{
              borderRadius: 1,
              my: 2,
              padding: "20px 10px",
              border: "1px solid blue",
            }}
          >
            <Typography variant="subtitle1"><strong>Teslimat Adresi: </strong>{selectedAddress}</Typography>
          </Box>
        </Box>
      )}
      <Box px={2}>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => handleChangePanel("panel3")(null as any, true)}
          style={{
            marginLeft: 0,
            display: "block",
            padding: "10px 0",
            width: "100%",
            margin: "0 auto",
            color: "white",
            backgroundColor: "black",
          }}
        >
          Ödeme ile Devam Et
        </Button>
      </Box>
    </CustomAccordion>
  );
};

export default ShippingSection;