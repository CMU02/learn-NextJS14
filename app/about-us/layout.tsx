import Navigation from "../../components/navigation";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children} <Navigation />
      &copy; Next JS is great!
    </div>
  );
}
