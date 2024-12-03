import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  Modal,
  Stack,
  TextField,
  Typography,
  Backdrop,
} from "@mui/material";
import { Link } from "react-router-dom";
import { base_url, photo_url } from "../Bestseller/Bestseller";
import { useDebounce } from "./Navbar";
import { SearchPropsPt } from "../../services/type";

function SearchSection() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchPropsPt[]>([]);
  const [searchModal, setSearchModal] = useState(false);
  const debouncedSearch = useDebounce(search, 1000);

  const handleSearchResults = async () => {
    if (search.length > 1) {
      try {
        const response = await fetch(
          base_url + `/products/?limit=1000&search=${debouncedSearch}`
        );
        const data = await response.json();
        setSearchResults(data.data.results);
        setSearchModal(true);
      } catch (error) {
        console.log("Ürün bulunamadı: ", error);
        setSearchResults([]);
        setSearchModal(true);
      }
    }
  };

  const handleCloseClear = () => {
    setSearchModal(false);
    setSearch("");
  };

  useEffect(()=>{
    const scrollY = window.scrollY;
    const windowHeigth = window.innerHeight;
    const documentHeigth = document.documentElement.scrollHeight;
    if(scrollY + windowHeigth >= documentHeigth -100){
      handleCloseClear()
    }
    window.addEventListener("scroll", handleCloseClear)
    return () => {
      window.removeEventListener('scroll', handleCloseClear)
    }
  },[])

  useEffect(() => {
    if (debouncedSearch) {
      handleSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (!debouncedSearch) {
      setSearchModal(false);
    }
  }, [debouncedSearch]);

  return (
    <FormGroup
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchResults();
      }}
    >
      <Box id="search-container" position={'relative'}>
        <TextField
          sx={{ zIndex: 2000, borderColor:'red'}}
          size="small"
          placeholder="Lütfen bir ürün arayınız"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchResults();
            }
          }}
          slotProps={{
            input: {
              endAdornment: (
                <Button
                  onClick={handleSearchResults} 
                  sx={{
                    zIndex: 1000,
                    mt: -0.1,
                    backgroundColor: "rgba(145, 145, 145, 1)",
                    border: "2.5px solid rgba(145, 145, 145, 1)",
                    borderRadius:"0px 2px 2px 0px"
                  }}
                  variant="contained"
                >
                  Ara
                </Button>
              ),
              sx: {
                padding: 0,
              },
            },
          }}
        />
        <Modal
          open={searchModal}
          disableScrollLock={true}
          hideBackdrop={true}
          onClose={handleCloseClear}
          slots={{
            backdrop: Backdrop,
          }}
          slotProps={{
            backdrop: {
              timeout: 500,
              style: {
                position: "fixed",
              },
            },
          }}
          sx={{
            zIndex: 1500,
            boxShadow:4 
          }}
          disableAutoFocus={true}
          disableEnforceFocus={true}
        >
          <Box
            onMouseLeave={handleCloseClear}
            sx={{
              mt: 9,
              width:{xs:"60vw", lg:"35vw"} ,
              transform: {xs:"translateX(35%)", lg:"translateX(120%)"},
              py: 1,
              backgroundColor: "white",
              borderRadius: 2,
              position: "relative",
              maxHeight: "450px",
              overflowY: "scroll",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
              "&::-webkit-scrollbar": {
                width: 0,
                background: "transparent",
              },
            }}
          >
            {searchResults.length > 0 ? (
              searchResults.map((search) => (
                <Box
                  sx={{
                    mx: 2,
                    my: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    alignItems: "self-start",
                    textTransform: "none",
                    textDecoration: "none",
                    color: "black",
                    p: 1,
                    borderRadius: 2,
                    border: "1px solid gray",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                  key={search.id}
                  onClick={handleCloseClear}
                  component={Link}
                  to={`/products/${search.slug}`}
                >
                  <Box>
                    <img
                      src={photo_url + search.photo_src}
                      alt=""
                      style={{
                        borderRadius: 5,
                        width: 90,
                        aspectRatio: 1 / 1,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="column">
                      <Typography variant="subtitle1">{search.name}</Typography>
                      <Typography
                        textTransform={"lowercase"}
                        color="gray"
                        variant="subtitle2"
                      >
                        {search.short_explanation}
                      </Typography>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      ml: "auto",
                    }}
                  >
                    <Typography fontWeight={"bolder"}>
                      {search.price_info.discounted_price
                        ? search.price_info.discounted_price
                        : search.price_info.total_price}{" "}
                      TL
                    </Typography>
                  </Stack>
                </Box>
              ))
            ) : (
              <Typography sx={{ py: 4, textAlign: "center" }}>
                {debouncedSearch} adında bir ürün bulunamadı
              </Typography>
            )}
          </Box>
        </Modal>
      </Box>
    </FormGroup>
  );
}

export default SearchSection;