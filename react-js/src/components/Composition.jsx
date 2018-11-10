import React from 'react';

function Header() {
  return (
    <header>
      <h1>Heading</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Title</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quia ullam quidem inventore unde placeat possimus id blanditiis repudiandae, facilis voluptatum architecto? Architecto, quo. Reprehenderit consequatur officiis unde eius. Beatae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore sapiente quam. Hic eos rerum eius nobis rem, excepturi unde dolores voluptatibus facere enim repellat quasi inventore explicabo, delectus est.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur commodi voluptatum non reiciendis sint, quam asperiores quidem sapiente nostrum, rem nemo quisquam id quaerat tempore doloremque corrupti. Dolorem, suscipit corrupti!</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}

function WebPage() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default WebPage;
