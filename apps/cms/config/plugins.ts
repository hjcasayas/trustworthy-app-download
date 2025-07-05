export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("MINIO_ACCESS_KEY"),
          secretAccessKey: env("MINIO_SECRET_KEY"),
        },
        endpoint: env("MINIO_ENDPOINT"),
        params: {
          Bucket: env("MINIO_BUCKET"),
        },
      },
    },
  },
});
