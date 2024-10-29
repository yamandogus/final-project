import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Button,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CustomAccordion from "./customAccordion";
import { Link, useLoaderData } from "react-router-dom";
import { AddedAddress } from "../../services/type";
interface AddressSectionProps {
  expanded: string | false;
  handleChangePanel: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  setSelectedAddress: (address: string) => void;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  handleChangePanel,
  expanded,
  setSelectedAddress,
}) => {
  const { datas } = useLoaderData() as { datas: AddedAddress[] };
  console.log(datas);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Link to={"/Home"}>
          <img
            style={{ position: "relative", left: -20, top: 0 }}
            width={180}
            src="/images/Logo/Logo1.png"
            alt="Logo"
          />
        </Link>
        <Box>
          <strong>İsim Soyisim</strong> <br />
          isimsoyisim@mail.com
        </Box>
      </Box>
      <CustomAccordion
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
        title="Adres"
        panelNumber={1}
      >
        <Typography variant="subtitle1">Teslimat Adresi</Typography>
        <Box px={2}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Ev"
              name="radio-buttons-group"
            >
              {datas.map((address) => (
                <Box
                  key={address.id}
                  sx={{
                    px: 2,
                    borderRadius: 3,
                    border: "1px solid black",
                    my: 2,
                  }}
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <FormControlLabel
                      control={<Radio value={address.full_address} 
                      onChange={(e)=> setSelectedAddress(e.target.value)}
                      />}
                      label={address.title}
                    />
                    <Button sx={{ textTransform: "none" }}>Düzenle</Button>
                  </Box>
                  <Box>
                      <Typography variant='subtitle1'>
                        {address.full_address}
                      </Typography>
                    </Box>
                </Box>
              ))}
            </RadioGroup>
          </FormControl>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => handleChangePanel("panel2")(null as any, true)}
            style={{
              marginLeft: 0,
              display: "block",
              padding: "10px 0",
              width: "100%",
              margin: "0 auto",
              color: "white",
              backgroundColor: "black",
              textTransform:'none'
            }}
          >
            KARGO İLE DEVAM ET
          </Button>
        </Box>
      </CustomAccordion>
    </>
  );
};

export default AddressSection;
