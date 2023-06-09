import Head from "next/head";
import { ReactNode, FC, useState } from "react";
import {
  IconButton,
  Stack,
  Typography,
  Box,
  Paper,
  AppBar,
} from "@mui/material";
import {
  orkesConductorClient,
  Workflow,
  HumanTaskTemplateEntry,
  HumanTaskEntry,
  HumanExecutor,
} from "@io-orkes/conductor-javascript";
import { GetServerSidePropsContext } from "next";
import getConfig from "next/config";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";
import { FormDisplay } from "@/components/FormDisplay";
import CloseIcon from "@mui/icons-material/Close";

import {
  MainTitle,
  SubText1,
  SubText2,
  TitleInTitleBar,
} from "@/components/elements/texts/Typographys";
export const TitleBar: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <AppBar color="inherit" variant="elevation" elevation={3}>
      {children}
    </AppBar>
  );
};

const ClosableTitleBar = ({ title }: { title: string }) => {
  return (
    <TitleBar>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          padding: "20px",
        }}
      >
        <img
          src="/orkesLogo.png"
          style={{ width: "140px", marginRight: "30px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "140px", // this is not ok should use gird instead
          }}
        >
          <TitleInTitleBar>{title}</TitleInTitleBar>
        </Box>
        <Box
          sx={{
            border: "1px solid #000000",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton href="/">
            <CloseIcon
              sx={{
                color: "#000000",
              }}
            />
          </IconButton>
        </Box>
      </Stack>
    </TitleBar>
  );
};
type Props = {
  children: ReactNode;
  title: string;
};

export default function MainLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClosableTitleBar title={title} />
      <main style={{
        marginTop: "160px",
      }}>
        <Box p={10}>
          {children}
        </Box>
      </main>
    </>
  );
}
