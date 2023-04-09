-- CreateTable
CREATE TABLE "Productor" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "shop_description" TEXT NOT NULL,
    "name_seller" TEXT NOT NULL,
    "email_seller" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Productor_pkey" PRIMARY KEY ("id")
);
