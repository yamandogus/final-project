import {
    Box,
    Button,
    Rating,
    TextField,
    Typography,
  } from "@mui/material";


const CommentsComponent = () => {
  return (
    <>
      <Rating
        id="stars"
        name="stars"
      />
      <Box mt={2}>
        <Typography variant="subtitle2">Bir Başlık Ekleyiniz</Typography>
        <TextField
          fullWidth
          size="small"
          sx={{ marginTop: 1 }}
          multiline
          id="title"
          name="title"
          required
          placeholder="Bilinmesi gereken önemli birşey nedir?"
        />
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle2">Yazılı bir yorum ekleyin</Typography>
        <TextField
          fullWidth
          sx={{ marginTop: 1 }}
          multiline
          required
          id="comment"
          name="comment"
          rows={4}
          placeholder="Ürün hakkında bilinmesini istedikleriniz nelerdir?"
        />
      </Box>
      <Box mt={2}>
        <Button
          type="submit"
          sx={{
            backgroundColor: "black",
          }}
          variant="contained"
        >
          Ekle
        </Button>
      </Box>
    </>
  );
};

export default CommentsComponent;
