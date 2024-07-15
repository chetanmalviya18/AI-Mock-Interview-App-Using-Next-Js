/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://prepview_owner:zVg36ikqSUAI@ep-rapid-dew-a5uoxhhz.us-east-2.aws.neon.tech/prepview?sslmode=require",
  },
};
