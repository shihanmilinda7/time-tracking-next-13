import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {name, username,email, password,jobrole,company} = await request.json();
  console.log("------------------------" + name + "-asaSAS------------------------------------------");

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password,
      jobrole,
      company,
    },
  });
  // console.log(newUser.error)
  let res;
  // // const users = prisma.user1.findMany();
  // const users = await prisma.user1.findMany({
  //   // where: {
  //   //   email: {
  //   //     contains: "", 
  //   //   },
  //   //   password: {
  //   //     contains: "", 
  //   //   },
  //   // },
  // });
  // if (newUser.length > 0) {
  //   res = {message:"SUCCESS",newUser}
  // }else{
  //   res = {message:"FAIL"}
  // }
  return NextResponse.json({message:"SUCCESS",newUser})
}
