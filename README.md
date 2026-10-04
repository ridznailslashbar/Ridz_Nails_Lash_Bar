# RIDZ NAILS & LASH BAR — FINAL HANDOVER

## VERIFIED BUSINESS DETAILS ALREADY WIRED IN
Business: Ridz Nails & Lash Bar
Address: 11 Lowland Cres, Truganina VIC 3029
Phone: 0421 202 594
Hours: 9:00 am–9:00 pm daily
Google rating at build time: 4.9 from 73 reviews
Instagram: @ridz_nail_bar

Google Maps, Read Reviews and Write Review buttons are already linked using the public Google Place ID.
Instagram icons in the navigation/footer are already linked.

## PUBLISH IN GITHUB
1. Unzip this ZIP.
2. Open the `ridznails` repository in the salon GitHub account.
3. Remove/replace the old website files if necessary.
4. Upload EVERYTHING INSIDE this ZIP to the repository root.
5. Commit changes.
6. Settings → Pages → Source: Deploy from a branch.
7. Branch: `main`; Folder: `/(root)` → Save.
8. Wait a few minutes and open the published site.

IMPORTANT: This package uses Jekyll for the automatic gallery. Do NOT add `.nojekyll`.

## ADD GALLERY PHOTOS — NO CODE
Open `assets/images/gallery/` in GitHub → Add file → Upload files.
Name new images sequentially:
gallery-09.jpg
gallery-10.webp
gallery-11.jpeg
etc.
Commit. GitHub rebuilds the carousel automatically.

## CHANGE COVER
Replace `assets/images/coverpic.webp` with another image using the SAME filename.

## EDIT BUSINESS CONTENT
Only edit `content/site-content.js` for services, prices, rewards, booking/payment URLs and selected testimonials.

## GOOGLE REVIEWS
READ ALL REVIEWS:
https://search.google.com/local/reviews?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8

WRITE A REVIEW:
https://search.google.com/local/writereview?placeid=ChIJrbPFPJWL1moRl3ztAEu5Uo8

MAPS:
https://www.google.com/maps/search/?api=1&query=Ridz%20Nails%20%26%20Lash%20Bar&query_place_id=ChIJrbPFPJWL1moRl3ztAEu5Uo8

No Google account password is needed for these public customer-facing links.
The displayed 4.9 / 73 badge is a snapshot and will not automatically change when new reviews arrive.

## ENQUIRY FORM
Submissions are addressed to ridznails@gmail.com via FormSubmit.
After launch, submit it once and approve the activation email sent to ridznails@gmail.com.

## BOOKING — ONLY REMAINING INTEGRATION
Square is used ONLY for appointment booking.
When Square Appointments is ready, paste its PUBLIC booking URL into:
`bookingUrl` in `content/site-content.js`.

## PAYID DEPOSIT
The PAY DEPOSIT button is already live as a website popup.
It shows:
PayID: 0421 202 594
and includes a one-tap COPY PAYID button.

The popup deliberately does NOT state a fixed deposit amount. Ridz should confirm the required amount with the customer before payment.
The PayID can later be changed in `content/site-content.js` using `payIdDisplay` and `payIdCopy`.

No payment gateway is used and the website does not collect card details.
Do not store passwords, card details or secret API keys in GitHub.
