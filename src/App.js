import Header from "./Component/Header";
import Section from "./Component/Section";
import Nav from "./Component/Nav";
import Show from "./Component/Show";



export default function app() {
  return (
    <div>
      <Header>
        <Section>
          <Nav />
          <Show />
        </Section>
      </Header>
    </div>
  );
}
