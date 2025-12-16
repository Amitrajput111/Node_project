# TODO: Fix Home and Booking Pages

## Steps to Complete
- [x] Add root route "/" in routes/storeRouter.js to render home page
- [x] Fix HTML structure in views/partials/nav.ejs and correct booking link to /bookings
- [x] Update back link in views/store/booking.ejs from "/" to "/homes"

## Followup
- [ ] Start server with `npm start` or `nodemon`
- [ ] Test root URL http://localhost:3000/ shows home page
- [ ] Test /bookings shows booking page
- [ ] Verify nav links work correctly

## Image Fixes Completed
- [x] Updated airbnbDp/data/homes.json to use existing image files (house1.png, house2.png) instead of non-existent house5.png, house6.png.
- [x] Fixed typo in ch-15-Intro-to-Sql/views/store/index.ejs: changed photoURl to photoUrl and corrected img tag formatting.
- [x] Fixed typos in ch-15-Intro-to-Sql/views/store/home-list.ejs: corrected alt attribute (houseNamr to houseName), fixed div class (p-4>), and corrected href attribute.
- [x] Verified that app.js already serves static files from public directory.
