import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import Cta from "@/components/cta.astro";
import Features from "@/components/features.astro";
import Hero from "@/components/hero.astro";
import Logos from "@/components/logos.astro";

registerAstroComponent("cta", Cta);
registerAstroComponent("features", Features);
registerAstroComponent("hero", Hero);
registerAstroComponent("logos", Logos);