"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
  githubEnabled: boolean;
  entraIdEnabled: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[300px]">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={"5102.png"} />
          </Avatar>
          <span className="text-red">{AI_NAME}</span>
        </CardTitle>
        <CardDescription>
          Login com a conta Microsoft 365
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {props.githubEnabled && (
          <Button onClick={() => signIn("github")}>GitHub</Button>
        )}
        {props.entraIdEnabled && (
          <Button onClick={() => signIn("azure-ad")} className="bg-red-500 text-white hover:bg-red-700">Microsoft 365</Button>
        )}
        {props.isDevMode && (
          <Button onClick={() => signIn("localdev")}>
            Basic Auth (DEV ONLY)
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
