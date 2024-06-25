import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryota Ikezawa" },
    { name: "description", content: "Welcome to my portfolio." },
  ];
};

export default function Index() {
  return <Hero/>
}
