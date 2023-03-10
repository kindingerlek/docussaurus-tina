
  import { defineConfig } from "tinacms";
  
  // Your hosting provider likely exposes this as an environment variable
  const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
  
  export default defineConfig({
    branch,
    clientId: "d3ee0d1d-aa57-4bc1-baa1-a0add291fe47",   // Get this from tina.io
    token: "21566da53487d4083e9ec0ec03bdeea669e0a124",      // Get this from tina.io
    build: {
      outputFolder: "admin",
      publicFolder: "static",
    },
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "static",
      },
    },
    schema: {
      collections: [
        {
          name: "post",
          label: "Posts",
          path: "content/posts",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
        {
          name: "docs",
          label: "Docs",
          path: "docs",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
      ],
    },
  });
  