import { CartItem } from "../../services/type";
import { Box, Card, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {  photo_url } from "../Bestseller/Bestseller";

interface UserCartItemsProps {
  items: CartItem[];
  onDecrease: (index: number) => void;
  onIncrease: (index: number) => void;
  onDelete: (e: React.SyntheticEvent, index: number) => void;
}

const UserCartItems = ({
  items,
  onDecrease,
  onDelete,
  onIncrease,
}: UserCartItemsProps) => {
  return (
    <>
      {items.map((basket, index) => (
        <Box mb={1} key={index}>
          <Card
            style={{
              padding: "5px 0",
              backgroundColor: "rgb(247, 247, 247)",
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <img
                style={{
                  width: 90,
                  height: 90,
                  aspectRatio: 1 / 1,
                  objectFit: "cover",
                }}
                src={photo_url + basket.product_variant_detail.photo_src}
                alt="Product"
              />
              <Stack
                direction={"row"}
                spacing={2}
                width="100%"
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography variant="subtitle1" mt={1} fontWeight={"bolder"}>
                    {basket.product}
                  </Typography>
                  <Typography variant="subtitle1">
                    {basket.product_variant_detail.aroma}
                  </Typography>
                  <Typography variant="subtitle1">
                    {basket.product_variant_detail.size.total_services
                      ? basket.product_variant_detail.size.total_services + "gr"
                      : ""}{" "}
                  </Typography>
                </Box>
                <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                  <Typography
                    sx={{
                      fontWeight: "bolder",
                      pt: 1,
                    }}
                  >
                    {(basket.unit_price * basket.pieces).toFixed(2)} TL
                  </Typography>
                  <Typography
                    borderRadius={1}
                    padding={"2px 5px"}
                    bgcolor={"white"}
                    sx={{
                      boxShadow: `0 1px 1px rgba(0,1,1,0.5)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 80,
                      maxWidth: 80,
                    }}
                  >
                    {basket.pieces > 1 ? (
                      <button
                        className="remove-button"
                        onClick={() => onDecrease(index)}
                      >
                        -
                      </button>
                    ) : (
                      <DeleteIcon
                        onClick={(e:React.SyntheticEvent) => onDelete(e, index)}
                        sx={{
                          fontSize: 20,
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      />
                    )}
                    <strong style={{ margin: "0 15px" }}>
                      {basket.pieces}
                    </strong>
                    <button
                      onClick={() => onIncrease(index)}
                      className="increase-button"
                    >
                      +
                    </button>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default UserCartItems;