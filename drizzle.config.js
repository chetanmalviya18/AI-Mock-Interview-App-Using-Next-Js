/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://prepview_owner:gTy3lPHChNw8@ep-rapid-dew-a5uoxhhz.us-east-2.aws.neon.tech/prepview?sslmode=require",
  },
};
