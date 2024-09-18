"use client";

import {
  Avatar,
  Box,
  Button,
  Grid2,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/Navbar.css";
import Image from "next/image";
import Link from "next/link";

const pages = [
  "Tienda Online",
  "TV/Audio/Video",
  "Electrodomesticos",
  "Infórmatica",
  "Aire Acondicionado",
  "Soporte",
];
const settings = [
  "Tienda Online",
  "TV/Audio/Video",
  "Electrodomesticos",
  "Infórmatica",
  "Aire Acondicionado",
  "Soporte"
];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="general">
      <Grid2
        container
        className="contenido"
        sx={{
          display: "flex",
          "@media (max-width: 1510px)": {
            justifyContent: "space-between",
          },
        }}
      >
        <Grid2
          item
          size={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "100px",
            minHeight: "44px",
          }}
        >
          <Link href="/" className="ruta">
            <Image
              src="/logo-lg-100-44.svg"
              alt="logo"
              width={100}
              height={44}
            />
          </Link>
        </Grid2>
        <Grid2
          container
          size={11}
          spacing={0}
          sx={{
            display: "flex",
            "@media (max-width: 1510px)": {
              display: "none",
              visibility: "hidden",
            },
          }}
        >
          <Grid2
            container
            size={9.5}
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "left",
            }}
          >
            {pages.map((page) => (
              <Grid2
                item
                key={page}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Link href={`/pe/${page}`} className="opcion">
                  {page}
                </Link>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container size={2.5} spacing={0.5} sx={{ display: "flex" }}>
            <Grid2
              item
              size={7}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/pe/empresa" className="opcion2">
                Empresas
              </Link>
            </Grid2>
            <Grid2
              container
              size={5}
              spacing={0.5}
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid2 item size={4}>
                <Link href="/pe/buscar" className="ruta">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Link>
              </Grid2>
              <Grid2 item size={4}>
                <Link href="/pe/login" className="ruta">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Link>
              </Grid2>
              <Grid2 item size={4}>
                <Link href="/pe/card" className="ruta">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          container
          spacing={2.5}
          sx={{
            display: "none",
            "@media (max-width: 1510px)": {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          <Grid2 item>
            <Link href="/pe/buscar" className="ruta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Link>
          </Grid2>
          <Grid2 item>
            <Link href="/pe/login" className="ruta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Link>
          </Grid2>
          <Grid2 item>
            <Link href="/pe/card" className="ruta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Link>
          </Grid2>
          <Grid2 item>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className="ruta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list-nested"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                margin: "52.5px 0 0 0",
                "& .MuiPaper-root": {
                  backgroundColor: "#f0ece4",
                  padding: "20px 24px",
                  width: "450px",
                  right: 0,
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  href={`/pe/${setting}`}
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ padding: "0" }}
                  className="ruta"
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "28px",
                      color: "black",
                      margin: "1.2rem 0",
                    }}
                  >
                    {setting}
                  </Typography>
                </Link>
              ))}
              <hr style={{ border: "1px #cbc8c2 solid" }}></hr>
              <Link
                href={`/pe/empresa`}
                onClick={handleCloseUserMenu}
                className="ruta2"
              >
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "28px",
                    color: "black",
                    margin: "1.2rem 0",
                  }}
                >
                  Empresa
                </Typography>
              </Link>
              <div className="sa">
                <Link
                  href={`/pe/login`}
                  onClick={handleCloseUserMenu}
                  className="ruta"
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "20px",
                      color: "black",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <span className="log">Iniciar Sesión</span>
                  </Typography>
                </Link>
              </div>
            </Menu>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Navbar;
