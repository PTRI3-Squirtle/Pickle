-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "messageSender" TEXT NOT NULL,
    "timeStamp" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
