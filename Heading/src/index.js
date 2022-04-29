import Heading from "./component/Heading/Heading";

const heading = new Heading();
heading.render()

import('HelloCardApp/HelloCard').then((HelloCardModule) => {
  const HelloCard = HelloCardModule.default;
  const helloCard = new HelloCard()
  helloCard.render('charles')
})