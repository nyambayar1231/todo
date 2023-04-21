import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function findOrCreateUser({
  githubId,
  accessToken,
  refreshToken,
  email,
}: {
  githubId: string;
  accessToken: string;
  refreshToken: string;
  email: string;
}) {
  const user = await prisma.user.findUnique({
    where: { githubId },
  });

  if (user) {
    return user;
  }

  return prisma.user.create({
    data: {
      githubId,
      githubAccessToken: accessToken,
      githubRefreshToken: refreshToken,
      email,
    },
  });
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}
