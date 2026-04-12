import { auth } from "../lib/auth";
import { prisma } from "../lib/prisma";

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL!;
  const password = process.env.ADMIN_PASS!;
  const name = process.env.ADMIN_NAME!;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin already exists.");
    process.exit(0);
  }

  await auth.api.signUpEmail({
    body: { email, password, name },
  });

  // Then update role to ADMIN
  await prisma.user.update({
    where: { email },
    data: { role: "ADMIN" },
  });

  console.log("✅ Admin seeded successfully.");
  process.exit(0);
}

seedAdmin().catch((e) => {
  console.error(e);
  process.exit(1);
});