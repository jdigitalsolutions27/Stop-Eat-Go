import { MenuTabs } from "@/components/menu-tabs";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Menu | Stop. Eat . Go",
  description:
    "Explore the full Stop. Eat . Go menu in Tacloban City, including rice meals, burgers, pasta, snacks, drinks, and desserts.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Full menu"
        title="Comfort food categories made easy to browse."
        description="Search quickly, filter by guest favorites, and jump straight into the dishes that fit your appetite and pace."
      />
      <section className="section-shell pb-20 pt-10">
        <MenuTabs />
      </section>
    </>
  );
}
