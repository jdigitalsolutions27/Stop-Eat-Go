import { OrderExperience } from "@/components/order-experience";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Order Online | Stop. Eat . Go",
  description:
    "Order Stop. Eat . Go online for delivery or pickup in Tacloban City. Review your cart, choose fulfillment, and send your order instantly.",
  path: "/order",
});

export default function OrderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Order online"
        title="Fast checkout for pickup or nearby delivery."
        description="Add signature dishes, adjust quantities, include notes, and send your order with a clean, reliable flow."
      />
      <section className="section-shell pb-32 pt-10 md:pb-20">
        <OrderExperience />
      </section>
    </>
  );
}
