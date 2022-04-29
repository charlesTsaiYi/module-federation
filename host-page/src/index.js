import './host-page.css';

import('HeadingApp/Heading').then((HeadingModule) => {
  const Heading = HeadingModule.default;
  const heading = new Heading()
  heading.render()
})

import('HelloCardApp/HelloCard').then((HelloCardModule) => {
  const HelloCard = HelloCardModule.default;
  const helloCard = new HelloCard()
  helloCard.render('charles')
})