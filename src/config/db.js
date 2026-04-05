import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgresql://postgres.hkupvdypvyvsnmcajkqi:yadavdec101293@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;