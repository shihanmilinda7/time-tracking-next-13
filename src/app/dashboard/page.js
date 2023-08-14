import { prisma } from "@/db";
import Card from "../components/card";
import Navbar from "../components/navbar";
import PersonalDetailCard from "../components/personal_detail_card";
import { Prisma } from "@prisma/client";
// import { setUserIdGlobal } from "../globals";

export default async function Dashboard() {


  // try {
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       userid : 6,
  //     },
  //   })

  // } catch (e) {
  //   if (e instanceof Prisma.PrismaClientKnownRequestError) {
  //     // The .code property can be accessed in a type-safe manner
  //     console.log("e is ",e);
  //     if (e.code === 'P2025') {
  //       console.log(
  //         'There is a unique constraint violation, a new user cannot be created with this email'
  //       )
  //     }
  //   }
  //  // throw e
  // }



 
  // const newUser = await prisma.user.create({
  //   data: {
  //     name:"admin",
  //     username:"admin",
  //     email:"admin@sds.com",
  //     password:"admin",
  //     jobrole:"admin",
  //     company:"sds",
  //   },
  // });
  // const name = "ghfgh"
  // const rawQuery = Prisma.sql`select * FROM user WHERE name=${name}`;
  // const timeAllocDetails = await prisma.$queryRaw(rawQuery);
  // console.log(deleteUser);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
          {/* <h1>{ window.userid}</h1> */}
        <div className="grid grid-cols-3 gap-4">
          <Card cardTitle="All Projects" description="Number of Projects - 10" style="bg-violet-700 text-white"/>
          <Card cardTitle="Ongoing Projects" description="Number of ongoing Projects - 5" style="bg-green-700 text-white"/>
          <PersonalDetailCard/>
        </div>
      </div>
    </div>
  );
}
