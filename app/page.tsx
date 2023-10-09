import { PageTitle } from "./components/PageTitle";

export default async function Home() {
  return (
    <section className="flex flex-col">
      <PageTitle pageTitle="Welcome to Fakebook" />
      <p>
        This is an example site to display nested routing and error boundary
        with NextJS 13 app router
      </p>
    </section>
  );
}
