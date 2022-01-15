import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return params.slug;
};
