/*
===============================================================
 RIDZ EASY EDIT FILE — main business content.
===============================================================
*/
const SITE = {
  tagline: "Nails, lashes and little details made to help you look good and feel even better.",
  about: "Ridz Nails & Lash Bar is your little beauty escape — relaxed appointments, beautiful finishes and details designed around you.",

  bookingUrl: "https://book.squareup.com/appointments/6xhs5nzu3koi71/location/LN51J7HS6NRA7/services",
  instagramUrl: "https://www.instagram.com/ridz_nail_bar",
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ridz%20Nails%20%26%20Lash%20Bar&query_place_id=ChIJrbPFPJWL1moRl3ztAEu5Uo8",

  phoneDisplay: "0421 202 594",
  phoneDial: "+61421202594",
  location: "11 Lowland Cres, Truganina VIC 3029",
  hours: "Open daily · 9:00 am – 9:00 pm",

  serviceGroups: [
    {name:"Shellac",services:[
      {name:"Shellac — Hands",duration:"45 min",price:"$30",note:"A glossy, polished finish for your hands."},
      {name:"Shellac — Toes",duration:"45 min",price:"$30",note:"Fresh colour and shine for your toes."},
      {name:"Shellac + Art",duration:"1 hr",price:"Variable",note:"Shellac with custom art and extra detail."},
      {name:"Shellac Take-Off",duration:"30 min",price:"$20",note:"Careful removal of existing Shellac."},
      {name:"Shellac Take-Off + Redo",duration:"1 hr",price:"$45",note:"Removal followed by a fresh Shellac set."}
    ]},
    {name:"Gel-X Extension",services:[
      {name:"Gel-X Full Set",duration:"1 hr",price:"$50",note:"A fresh Gel-X extension set tailored to your style."},
      {name:"Gel-X — Toes",duration:"1 hr",price:"$50",note:"Gel-X service for toes."},
      {name:"Gel-X + Art",duration:"1 hr 30 min",price:"Variable",note:"Gel-X with custom art and extra detail."},
      {name:"Gel-X Take-Off",duration:"1 hr",price:"$25",note:"Careful removal of your existing Gel-X set."},
      {name:"Gel-X Take-Off + Re-done",duration:"2 hrs",price:"$75",note:"Removal followed by a completely fresh Gel-X set."}
    ]},
    {name:"Eyelash Extensions",services:[
      {name:"Classic",duration:"1 hr 15 min",price:"<s>$70</s> $55",note:"A clean, timeless lash enhancement."},
      {name:"Hybrid",duration:"1 hr 30 min",price:"<s>$85</s> $70",note:"A balanced blend of definition and fullness."},
      {name:"Volume",duration:"1 hr 45 min",price:"<s>$90</s> $75",note:"Soft, fuller lashes with added dimension."},
      {name:"Mega Volume",duration:"2 hrs",price:"<s>$130</s> $110",note:"Maximum fullness for a bold lash look."},
      {name:"Anime Extension",duration:"2 hrs",price:"<s>$110</s> $90",note:"An elongated lash shape with lifted outer corners."},
      {name:"Wispy Classic",duration:"1 hr 30 min",price:"<s>$100</s> $85",note:"A textured, airy Classic set with wispy definition."},
      {name:"Wispy Hybrid",duration:"1 hr 30 min",price:"<s>$110</s> $90",note:"A textured Hybrid set with soft wispy definition."},
      {name:"Wispy Volume",duration:"1 hr 30 min",price:"<s>$130</s> $110",note:"A fuller Volume set with a wispy finish."},
      {name:"Refill",duration:"45 min",price:"Variable",note:"Refresh and rebalance your existing lash set."},
      {name:"Removal",duration:"30 min",price:"$20",note:"Gentle removal of your existing lash extensions."},
      {name:"Extra",duration:"30 min",price:"$20",note:"Additional lash service time where required."}
    ]}
  ],

  rewards: [
    {title:"Nail Lover",text:"Complete 5 nail appointments",reward:"$20 off your next appointment"},
    {title:"Lash Lover",text:"Complete 3 eyelash appointments",reward:"$25 off your next appointment"},
    {title:"The Ridz Treat",text:"Book services together with a combined service value over $200.",reward:"$30 off"}
  ],
  rewardNote:"Offer eligibility and conditions are confirmed by Ridz Nails & Lash Bar at booking. Offers are subject to change.",

  reviews: [
    {name:"Tanisha Kamra",text:"I recently got my nails done by her for the first time, and I’m honestly so impressed with her work. She was very professional, friendly, and made me feel comfortable throughout the whole appointment. She paid attention to every small detail and made sure the shape, design, and finishing were perfect. Everything was done very neatly and hygienically. My nails look beautiful, clean, and long-lasting. I’ve already received so many compliments. Definitely recommending her to anyone looking for amazing nail services!"},
    {name:"Vaishnavi Kataria",text:"I’m honestly so happy with my nails! 💅 My previous nails were really damaged and unhealthy, but she took the time to understand them, guided me properly, and helped me get them back on track. She did such a beautiful job on my natural nails without compromising their health, and I absolutely love how they turned out! 🤍 You can genuinely tell she cares about the health of your nails and not just how they look. Highly recommend her! ✨"},
    {name:"Sehajpreet Kaur",text:"Highly recommended. I have been doing my nails from her from last 6 months. She is so nice and friendly ❤️"},
    {name:"Nguyen Christo",text:"Absolutely love my nails! 💅✨ The service was amazing, very professional and friendly. She took her time and paid so much attention to every little detail. My nails came out exactly how I wanted them — beautiful, clean and perfectly shaped. The salon was also lovely and relaxing. Such a great experience from start to finish. I’m so happy with the result and will definitely be coming back! Highly recommend! 🤍"},
    {name:"Jayshree Sagar",text:"She is amazing and did her job perfectly. She’s sweet, kind and makes sure that you are comfortable. I genuinely loved her work. Best of the nail artist in Melbourne. Must visit place. Thank you Ridz ❤️"},
    {name:"Komal Popli",text:"Such a lovely experience at Ridz Nails & Lashes! She is honestly so sweet, welcoming and easy to talk to, which made the whole appointment feel so comfortable. She puts so much care into her work and my nails/lashes turned out beautiful. You can really tell she cares about her clients and what she does. Would definitely recommend her and I’ll absolutely be coming back!"},
    {name:"Talky.tales96",text:"Had such a lovely experience at Ridz Nail & Lashes! 💕 The service was amazing, everyone was so friendly and welcoming, and I absolutely loved how my lashes turned out. The attention to detail was really good and they made sure everything was exactly how I wanted. Definitely recommend them if you’re looking for a nice, relaxing experience with beautiful results."},
    {name:"Yashika Arora",text:"I loved the overall experience. Riddhi is too good in her work. Love the finishing & attention to detail. She was genuinely so sweet & attentive throughout. I’m honestly obsessed with how my nails turned out … exactly how i wanted it to be. If you are looking for beautiful nails in a comfortable & personalised experience.. definitely check her out."},
    {name:"Reena Llanillo",text:"Ridz was absolutely amazing!! I contacted her last minute and she was kind enough to open her studio for me ❤️ she was so pleasant and professional all throughout!! Highly recommend her ❤️"}
  ]};
