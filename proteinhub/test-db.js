const { Client } = require('pg');

const connectionString = "postgresql://neondb_owner:npg_QYNTlhc0O3Gt@ep-square-sea-aqwtaq0z-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require";

console.log("Testing connection to Neon...");
console.log("Host: ep-square-sea-aqwtaq0z-pooler.c-8.us-east-1.aws.neon.tech");

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    await client.connect();
    console.log('✅ Connected to Neon database successfully!');
    const res = await client.query('SELECT NOW()');
    console.log('Server time:', res.rows[0].now);
    await client.end();
  } catch (err) {
    console.error('❌ Connection failed!');
    console.error('Error name:', err.constructor.name);
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    console.error('Full error:', JSON.stringify(err, null, 2));
  }
}

test();
