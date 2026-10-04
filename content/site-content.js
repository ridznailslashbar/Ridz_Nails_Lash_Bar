/*
===============================================================
 RIDZ EASY EDIT FILE — this is the main file your friend edits.
===============================================================
*/
const SITE = {
  tagline: "Nails, lashes and little details made to help you look good and feel even better.",
  about: "Ridz Nails & Lash Bar is your little beauty escape — relaxed appointments, beautiful finishes and details designed around you.",

  bookingUrl: "#",       // Paste Square Appointments public booking link
  payIdDisplay: "0421 202 594",
  payIdCopy: "0421202594",
  instagramUrl: "https://www.instagram.com/ridz_nail_bar",     // Paste Instagram profile link
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8", // Public Google page showing the salon's reviews
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8",  // Public Google “write a review” link
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ridz%20Nails%20%26%20Lash%20Bar&query_place_id=ChIJrbPFPJWL1moRl3ztAEu5Uo8",          // Paste Google Maps / Business Profile link

  phoneDisplay: "0421 202 594",
  phoneDial: "+61421202594",
  location: "11 Lowland Cres, Truganina VIC 3029",
  hours: "Open daily · 9:00 am – 9:00 pm",

  serviceGroups: [
    {name:"Shellac",services:[
      {name:"Shellac — Hands",duration:"30 min",price:"Ask us",note:"A glossy, polished finish for your hands."},
      {name:"Shellac — Toes",duration:"30 min",price:"Ask us",note:"Fresh colour and shine for your toes."},
      {name:"Shellac + French",duration:"45 min",price:"Ask us",note:"A timeless French finish with Shellac."},
      {name:"Shellac Take-Off",duration:"30 min",price:"Ask us",note:"Careful removal of existing Shellac."},
      {name:"Shellac Take-Off + Redo",duration:"1 hr",price:"Ask us",note:"Removal followed by a fresh Shellac set."},
      {name:"Nail Art Add-On",duration:"+30 min",price:"Ask us",note:"Add custom art and extra detail to your set."}
    ]},
    {name:"Gel-X",services:[
      {name:"Gel-X Full Set",duration:"45 min",price:"Ask us",note:"A fresh Gel-X extension set tailored to your style."},
      {name:"Gel-X — Toes",duration:"45 min",price:"Ask us",note:"Gel-X service for toes."},
      {name:"Nail Art Add-On",duration:"+30 min",price:"Ask us",note:"Add custom art and extra detail."},
      {name:"Gel-X Take-Off",duration:"45 min",price:"Ask us",note:"Careful removal of your existing Gel-X set."},
      {name:"Gel-X Take-Off + Redo",duration:"1 hr 30 min",price:"Ask us",note:"Removal followed by a completely fresh Gel-X set."}
    ]},
    {name:"Builder Gel",services:[
      {name:"Builder Gel Full Set",duration:"45 min",price:"Ask us",note:"Strength, structure and a beautifully natural finish."},
      {name:"Builder Gel — Toes",duration:"45 min",price:"Ask us",note:"Builder gel service for toes."},
      {name:"Nail Art Add-On",duration:"+30 min",price:"Ask us",note:"Add custom art and extra detail."},
      {name:"Builder Gel Take-Off",duration:"45 min",price:"Ask us",note:"Careful removal of existing builder gel."},
      {name:"Builder Gel Take-Off + Redo",duration:"1 hr 30 min",price:"Ask us",note:"Removal followed by a fresh builder gel set."}
    ]},
    {name:"Eyelashes",services:[
      {name:"Classic",duration:"1 hr",price:"Ask us",note:"A clean, timeless lash enhancement."},
      {name:"Hybrid",duration:"1 hr",price:"Ask us",note:"A balanced blend of definition and fullness."},
      {name:"Volume",duration:"1 hr 15 min",price:"Ask us",note:"Soft, fuller lashes with added dimension."},
      {name:"Mega Volume",duration:"1 hr 30 min",price:"Ask us",note:"Maximum fullness for a bold lash look."},
      {name:"Cat Eye",duration:"1 hr 30 min",price:"Ask us",note:"An elongated lash shape with lifted outer corners."},
      {name:"Wispy",duration:"1 hr 30 min",price:"Ask us",note:"Textured, airy lashes with wispy definition."},
      {name:"Refill",duration:"30–45 min",price:"Ask us",note:"Refresh and rebalance your existing lash set."},
      {name:"Removal",duration:"30 min",price:"Ask us",note:"Gentle removal of your existing lash extensions."}
    ]}
  ],

  rewards: [
    {title:"Nail Lover",text:"Complete 3 nail appointments within 3 months.",reward:"$30 off your next appointment"},
    {title:"Lash Lover",text:"Complete 3 eyelash appointments within 3 months.",reward:"$30 off your next appointment"},
    {title:"The Ridz Treat",text:"Book services together with a combined service value over $200.",reward:"$30 off"}
  ],
  rewardNote:"Offer eligibility and conditions are confirmed by Ridz Nails & Lash Bar at booking. Offers are subject to change.",

  // Featured genuine Google client reviews.
  reviews: [
    {name:"Richa A.",text:"I went to Ridhi for the first time to get my nails done for a wedding and I was absolutely impressed with the results. She is extremely patient with her clients. The design was exactly the way I wanted for my special occasion. Highly recommend her if you are looking for stunning long lasting nails."},
    {name:"Shreya P.",text:"Got my nails done and I’m in love with the results 💖❤️ The detailing, shape and finish are amazing. Super talented work — highly recommended! The finishing and attention to detail are impressive. Definitely recommend! Best ❤️❤️ Such beautiful and precise nail art ✨"},
    {name:"Bhavika K.",text:"I recently got nail extensions done and I absolutely love them! The shape, length, and finish are perfect. They look very natural and elegant. The nails are strong, smooth, and beautifully shaped. I’ve received so many compliments already! Highly recommend for anyone wanting a clean and stylish look."}
  ]
};