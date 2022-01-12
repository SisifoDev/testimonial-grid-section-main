import styled from "styled-components";

import Card from "./components/Card";

function App() {
  const quotes = [
    {
      id: 1,
      author: "Daniel Clifford",
      imageURL: "img/image-daniel.jpg",
      verifedGraduate: true,
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      quote: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
      transition and have heard some people who had an amazing experience here. I signed up 
      for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
      The next 12 weeks was the best - and most grueling - time of my life. Since completing 
      the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."`,
    },
    {
      id: 2,
      author: "Jonathan Walters",
      imageURL: "img/image-jonathan.jpg",
      verifedGraduate: true,
      title: "The team was very supportive and kept me motivated",
      quote: `“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
      for a big company. This was one of the best investments I’ve made in myself. ”`,
    },
    {
      id: 3,
      author: "Kira Whittle",
      imageURL: "img/image-kira.jpg",
      verifedGraduate: true,
      title: "Such a life-changing experience. Highly recommended!",
      quote: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
      professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
      student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
      did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
      project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
      could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
      experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
      100% recommend! ”`,
    },
    {
      id: 5,
      author: "Jeanette Harmon",
      imageURL: "img/image-jeanette.jpg",
      verifedGraduate: true,
      title: "An overall wonderful and rewarding experience",
      quote: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
      while doing something I love. ”`,
    },
    {
      id: 4,
      author: "Patrick Abrams",
      imageURL: "img/image-patrick.jpg",
      verifedGraduate: true,
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      quote: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
      gave me the confidence necessary to be able to go out in the world and present myself as a capable 
      junior developer. The standard is above the rest. You will get the personal attention you need from 
      an incredible community of smart and amazing people. ”`,
    },
  ];
  return (
    <Main>
      <QuoteContainer>
        {quotes.map((quote) => (
          <Card
            key={quote.id}
            quote={quote.quote}
            title={quote.title}
            author={quote.author}
            image={quote.imageURL}
            graduate={quote.verifedGraduate}
          ></Card>
        ))}
      </QuoteContainer>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{"  "}
        <a href="https://github.com/SisifoDev" target="_blank" rel="noreferrer">
          Héctor Manuel Perdomo
        </a>
        .
      </div>
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const QuoteContainer = styled.div`
  display: grid;
  /* place-items: center; */
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(260px, 1fr));
  /* grid-auto-flow: row dense; */
  padding: 170px;

  @media (max-width: 1199.98px) {
    display: flex;
    flex-wrap: wrap;
    padding: 120px 20px;
  }

  @media (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    padding: 120px 20px;
  }
`;
