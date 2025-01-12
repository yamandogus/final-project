import { useEffect, useState } from "react";
import { SearchPropsPt } from "../../services/Type";
import { Backdrop, Box, ClickAwayListener, InputAdornment, List, ListItem, Modal, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { base_url, photo_url } from "../Bestseller/BestsellerPage";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDebounce } from "../Navbar/Navbar";


const SearchModal = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState<SearchPropsPt[]>([]);
    const debouncedSearch = useDebounce(search, 1000);
    const [debounced, setDebounced] = useState("");
    const [anchorEl, setAnchorEl] = useState(false);
    
    const handleSearchResults = async () => {
        try {
          const response = await fetch(
            base_url + `/products/?limit=1000&search=${debouncedSearch}`
          );
          const responseJson = await response.json();
    
          if (responseJson.data.results.length === 0) {
            setDebounced(`${debouncedSearch} adında bir ürün bulunamadı.`);
          } else {
            setSearchResults(responseJson.data.results);
            setDebounced("");
          }
        } catch (error) {
          console.log(error);
          setSearchResults([]);
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
        if(search.length >= 1){
          setAnchorEl(true);
        }
      };
    
      useEffect(() => {
        if (debouncedSearch) {
          handleSearchResults();
        } else {
          setSearchResults([]);
        }
      }, [debouncedSearch]);

      const handleClosePopper = () => {
        setAnchorEl(false);
        console.log("girdi");
        
        setSearch("");
      };


  return (
    <ClickAwayListener onClickAway={handleClosePopper}>
      <Box>
        <TextField
          id="searchTextField"
          className="mobileSearch"
          size="small"
          placeholder="Aradığınız Ürünü Yazınız"
          value={search}
          onChange={handleSearchChange}
          sx={{
            zIndex: 1600,
            my: 1,
            width: "100%",
            maxWidth: "100%",
          }}
          InputProps={{
            sx: {
              borderRadius: 35,
              backgroundColor: "white",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Modal
          open={anchorEl}
          onClose={handleClosePopper}
          style={{ width: "100%" }}
          slots={{
            backdrop: Backdrop,
          }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          disableAutoFocus={true}
          disableEnforceFocus={true}
        >
          {searchResults.length > 0 ? (
            <Box>
              <List
                sx={{
                  left: "2.5%",
                  width: "95%",
                  marginTop: 1,
                  padding: 0,
                  top: 110,
                  zIndex: 1500,
                  backgroundColor: "#F4FAFF",
                  maxHeight: "400px",
                  overflow: "auto",
                  borderRadius: 2,
                }}
              >
                {searchResults.map((product, index) => (
                  <ListItem
                    key={index}
                    sx={{ borderBottom: "1px solid gray", color: "black" }}
                    to={`/products/${product.slug}`}
                    component={Link}
                    onClick={handleClosePopper}
                  >
                    <img
                      style={{ margin: "0 10px 0 5px" }}
                      width={50}
                      src={photo_url + product.photo_src}
                      alt={product.name}
                    />
                    {product.name}
                  </ListItem>
                ))}
                {searchResults ? (
                  <Link
                    to={"/AllProducts"}
                    onClick={() => {
                      setAnchorEl(false);
                      setSearch("");
                    }}
                    style={{
                      margin: 5,
                      display: "flex",
                      textDecoration: "none",
                      textTransform: "none",
                      color: "red",
                    }}
                  >
                    Tüm Ürünler <NavigateNextIcon style={{ fontSize: 20 }} />
                  </Link>
                ) : (
                  ""
                )}
              </List>
            </Box>
          ) : (
            <div>
              {!debouncedSearch ? (
                " "
              ) : (
                <div
                  style={{
                    position: "absolute",
                    top: "12%",
                    padding: 10,
                    display: "flex",
                    width: "95%",
                    borderRadius: 5,
                    transform: "translate(-50%)",
                    left: "50%",
                    backgroundColor: "white",
                    zIndex: 1855,
                  }}
                >
                  {debounced ? <Typography>{debounced}</Typography> : null}
                </div>
              )}
            </div>
          )}
        </Modal>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchModal;
