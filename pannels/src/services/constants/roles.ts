import { IRules } from "./models";

const rules: IRules = {
  user: {
    static: [],
  },
  company: {
    static: ["company:signup"],
  },
  admin: {
    static: [
      "main-site:edit",
      "company:create",
      "category:update",
      "category:read",
      "category:delete",
      "category:create",
    ],
  },
};

export default rules;
