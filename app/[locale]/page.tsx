import HomePage from "@/app/components/pages/home/HomePage";

export default function Home({ params }: { params: { locale: string } }) {
  return <HomePage locale={params.locale} />;
}
