// Shared image barrel.
//
// Every entry here is bundled whether or not it is used, because the object
// keeps a live reference to each import. Fourteen unused entries were removed
// — together they were shipping ~15.2MB, dominated by imgs1.svg (15MB), an
// old testimonial portrait whose only usage has been commented out for a
// while. Add an entry back when something actually renders it.
//
// Assets still on disk but deliberately not exported here:
//   24-7.svg, client.svg, cloud.webp, expert.png, globe.svg, hand.svg,
//   innovation.webp, rating.svg, team.svg, web.webp  — small, unused
//   logohover.png — the navbar loads public/images/logohover.png instead
//   opendoor.png / opendoor.webp — the .webp is imported directly by
//                  src/data/projects.ts
import logo from "./logo.png";
import vector from "./Vector.svg";
import app from "./app.svg";
import fb from "./fb.svg";
import twiter from "./twiter.svg";
import linkedin from "./likedin.svg";
import instagram from "./ig.svg";
import heroBg from "./herobg 1.webp";
import coltek from "./coltek-hero 1.webp";
import Adwoa from "./Adwoa.webp";
import jeffery from "./Jeffery.webp";

export const images = {
  logo,
  vector,
  app,
  fb,
  twiter,
  linkedin,
  instagram,
  heroBg,
  coltek,
  Adwoa,
  jeffery,
};

export default images;
