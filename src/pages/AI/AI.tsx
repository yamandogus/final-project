import { Box, Button, CircularProgress, Container, Paper, TextField, Typography, Avatar, Card, CardContent, CardActions } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { handleAIRequest } from "./ai/api";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
}

const AI = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem("chat-history");
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatHistory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError("");

    const userMessage: ChatMessage = { role: "user", content: message };
    const newHistory = [...chatHistory, userMessage];
    setChatHistory(newHistory);
    setMessage("");

    try {
      const data = await handleAIRequest(message, newHistory);
      if (data.error) {
        setError(data.error);
      } else {
        const aiMessage: ChatMessage = { role: "ai", content: data.response };
        setChatHistory((prev) => [...prev, aiMessage]);
      }
    } catch (err: unknown) {
      console.error("Hata:", err);
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
      setChatHistory(chatHistory);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ paddingTop: 3 }}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          <Typography variant="h4" align="center" sx={{ marginBottom: 2, color: "#2c3e50" }}>
            AI Sohbet Asistanı
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 1, 
              overflowY: "auto", 
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
            }}
          >
            {chatHistory.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  maxWidth: "80%",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Avatar sx={{ 
                  bgcolor: msg.role === "user" ? "#3498db" : "#2ecc71",
                  width: 35,
                  height: 35,
                }}>
                  {msg.role === "user" ? <PersonIcon /> : <SmartToyIcon />}
                </Avatar>
                <Box
                  sx={{
                    background: msg.role === "user" ? "#3498db" : "#ffffff",
                    color: msg.role === "user" ? "#ffffff" : "#2c3e50",
                    padding: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    position: "relative",
                    maxWidth: "100%",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    "& > p": {
                      margin: 0,
                      lineHeight: 1.6,
                    },
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 15,
                      [msg.role === "user" ? "right" : "left"]: -8,
                      border: "8px solid transparent",
                      borderRightColor: msg.role === "user" ? "#3498db" : "#ffffff",
                      [msg.role === "user" ? "borderRight" : "borderLeft"]: "none",
                    },
                  }}
                >
                  {msg.role === "ai" ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {msg.content.split(/\d+\.\s+\*\*/).filter(Boolean).map((product, i) => {
                        const nameMatch = product.match(/^([^*]+)\*\*/);
                        const name = nameMatch ? nameMatch[1].trim() : '';
                        const slug = name.toLowerCase().replace(/\s+/g, '-');
                        
                        return (
                          <Card 
                            key={i} 
                            sx={{ 
                              backgroundColor: '#fff',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              }
                            }}
                          >
                            <CardContent>
                              <Typography variant="h6" gutterBottom>
                                {name}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{
                                  '& strong': { color: '#2c3e50', fontWeight: 600 },
                                  display: 'block',
                                  marginBottom: 1
                                }}
                              >
                                {product.replace(/\*\*/g, '')}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button 
                                component={Link} 
                                to={`/products/${slug}`}
                                size="small" 
                                variant="contained"
                                sx={{
                                  backgroundColor: '#3498db',
                                  '&:hover': {
                                    backgroundColor: '#2980b9'
                                  }
                                }}
                              >
                                Ürüne Git
                              </Button>
                            </CardActions>
                          </Card>
                        );
                      })}
                    </Box>
                  ) : (
                    <Typography 
                      variant="body1" 
                      component="div"
                      sx={{
                        "& > *": {
                          display: "block",
                          marginBottom: "4px",
                          "&:last-child": {
                            marginBottom: 0,
                          },
                        },
                      }}
                    >
                      {msg.content.split("\n").map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
            {loading && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, alignSelf: "flex-start" }}>
                <Avatar sx={{ bgcolor: "#2ecc71", width: 35, height: 35 }}>
                  <SmartToyIcon />
                </Avatar>
                <Box sx={{ background: "#ffffff", padding: 1.5, borderRadius: 2, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                  <CircularProgress size={20} />
                </Box>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>
          <form
            onSubmit={handleSubmit}
            style={{ 
              display: "flex", 
              alignItems: "center",
              gap: 1,
              background: "#ffffff",
              padding: 1,
              borderRadius: 2,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <TextField
              label="Mesajınızı yazın"
              variant="outlined"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#3498db",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading || !message.trim()}
              sx={{
                background: "#3498db",
                "&:hover": {
                  background: "#2980b9",
                },
                minWidth: "100px",
              }}
            >
              Gönder
            </Button>
          </form>
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              sx={{ marginTop: 2 }}
            >
              {error}
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default AI;
