import { supabase } from "../../lib/supabaseClient";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  // Authenticate the user with Clerk
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Optionally, you can insert or update the user in Supabase
  const { error } = await supabase
    .from("users")
    .upsert({ id: userId }, { onConflict: "id" });

  if (error) {
    return res.status(500).json({ error: "Supabase error: " + error.message });
  }

  res.status(200).json({ message: "User authenticated with Clerk and Supabase!" });
}
