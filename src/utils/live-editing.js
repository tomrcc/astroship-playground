import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import Cta from "@/components/cta.astro";
import Features from "@/components/features.astro";
import Hero from "@/components/hero.astro";
import Logos from "@/components/logos.astro";
import Grid from "@/components/grid.astro"
import Grid2 from "@/components/grid2.astro"
import Grid3 from "@/components/grid3.astro"
import Grid4 from "@/components/grid4.astro"
import Grid4Item from "@/components/grid4Item.astro"

registerAstroComponent("cta", Cta);
registerAstroComponent("features", Features);
registerAstroComponent("hero", Hero);
registerAstroComponent("logos", Logos);
registerAstroComponent("grid", Grid);
registerAstroComponent("grid2", Grid2);
registerAstroComponent("grid3", Grid3);
registerAstroComponent("grid4", Grid4);
registerAstroComponent("grid4item", Grid4Item);