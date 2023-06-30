const testimonials = [
  {
    name: 'Sarah Johnson',
    package: 'Island Tours',
    imagePath: 'src/img/face 2.jpg',
    testimonial: "I had an amazing time exploring the Caribbean with Island Tours. Our guide was knowledgeable and friendly, and we saw some of the most beautiful sights I've ever seen. I highly recommend this tour!",
  },
  {
    name: 'John Smith',
    package: 'Beach Packages',
    imagePath: 'src/img/face 3.jpg',
    testimonial: "The Beach Package I booked with this travel agency was everything I hoped for and more. The beaches were pristine and the water was crystal clear. I can't wait to book another trip!",
  },
  {
    name: 'Maria Rodriguez',
    package: 'Flight Bookings',
    imagePath: 'src/img/face 6.jpg',
    testimonial: "Booking my flights to the Caribbean with this travel agency was a breeze. The staff was friendly and helpful, and I got a great deal on my tickets. I'll definitely book with them again!",
  },
  {
    name: 'David Lee',
    package: 'Hotel Reservations',
    imagePath: 'src/img/face 4.jpg',
    testimonial: "I stayed at a wonderful resort in the Caribbean that this travel agency recommended. The staff was friendly, the amenities were great, and the views were breathtaking. I can't wait to go back!",
  },
  {
    name: 'Emily Scott',
    package: 'Cruise Packages',
    imagePath: 'src/img/face 5.jpg',
    testimonial: 'I had an incredible time on my Caribbean cruise thanks to this travel agency. The ship was beautiful, the food was delicious, and the ports of call were amazing. I highly recommend this cruise package!',
  },
  {
    name: 'Liu Chan',
    package: 'Island Adventures',
    imagePath: 'src/img/face 1.jpg',
    testimonial: "Island Adventures was the highlight of my Caribbean trip. We went snorkeling, hiking, and even visited a local market. Our guide was fantastic and made the experience unforgettable. I can't wait to go back and explore more islands with this agency!",
  },
];

function generateProjectCards() {
  const cardsSection = document.getElementById('cards');

  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.classList.add('desktop-version');

    card.innerHTML = `
      <div class="cards">
          <img class="cards-img" src="${testimonial.imagePath}" alt="customer">
          <div>
              <h3 class="card-title"> ${testimonial.name} </h3>
              <span class="package">${testimonial.package}</span>
              <hr class="names-line" align="left">
              <p class="card-paragraph">${testimonial.testimonial}</p>
          </div>
      </div>        `;
    cardsSection.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', generateProjectCards());
