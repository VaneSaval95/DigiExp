//import { connect } from "@tursodatabase/serverless";
import { connect } from "@tursodatabase/database";

/*const client = connect({
  url: Deno.env.get("TURSO_DATABASE_URL")!,
  authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
});*/
const client =  await connect("./db1.sql")

export default client