import { connect } from "@tursodatabase/serverless";


const client = connect({
  url: Deno.env.get("TURSO_DATABASE_URL")!,
  authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
});


export default client