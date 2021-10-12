var MODEL = (function(){
    var homeContent = `<div class="home"> <!-- Beginning of Home class div -->
    <section class="hero">
        <div class="hero-text">
            <h1>travel-fly</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat aliquid minus nemo sed est.</h2>
        </div>
        <div class="read-more">
            Read More
        </div>
    </section>
    <section class="promo-tours">
        <div class="tour-item">
            <img src="images/tours/israel.png" alt="Israel tour">
            <h1>Israel</h1>
            <h2>from $1000</h2>
            <div class="tour-button">learn more</div>
        </div>
        <div class="tour-item">
            <img src="images/tours/usa.png" alt="USA tour">
            <h1>USA</h1>
            <h2>from $1500</h2>
            <div class="tour-button">learn more</div>
        </div>
        <div class="tour-item">
            <img src="images/tours/australia.png" alt="Australia tour">
            <h1>Australia</h1>
            <h2>from $1800</h2>
            <div class="tour-button">learn more</div>
        </div>
    </section>
    <section class="booking">
        <div class="booking-wrapper">
            <h1>Booking form</h1>
            <div class="short-input">
                <input type="text" class="short-input-left" placeholder="name..." name="booking-name">
                <input type="email" class="short-input-right" placeholder="email..." name="booking-email">
            </div>
            <div class="short-input">
                <input type="text" class="short-input-left" placeholder="country..." name="booking-country">
                <input type="text" class="short-input-right" placeholder="hotel..." name="booking-hotel">
            </div>

            <div class="long-input">
                <label for="check-in-date">Check-in</label>
                <input type="date" placeholder="05/10/2020" name="booking-check-in-date">
            </div>
            <div class="long-input">
                <label for="check-out-date">Check-out</label>
                <input type="date" placeholder="05/20/2020" name="booking-check-out-date">
            </div>
            <div class="booking-dropdowns">
                <div class="dropdown-item">
                    <label for="booking-num-adult">Adult</label>
                    <select name="booking-num-adult" id="booking-num-adult">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8+">8+</option>
                    </select>
                </div>
                <div class="dropdown-item">
                    <label for="booking-num-child">Children</label>
                    <select name="booking-num-child" id="booking-num-child">
                        <option value="0" selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8+">8+</option>
                    </select>
                </div>
                <div class="dropdown-item">
                    <label for="booking-num-rooms">Rooms</label>
                    <select name="booking-num-rooms" id="booking-num-rooms">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                </div>
            </div>
            <textarea class="booking-message" name="booking-message" id="booking-message" cols="30" rows="10" placeholder="message..."></textarea>
            <input class="booking-submit" type="submit" value="Submit">
        </div>
    </section>
</div> <!-- End of Home class div -->`;
    var aboutContent = `<div class="about"> <!-- Begin About content div -->
    <div class="about-main">
        <div class="about-header">
            <h1>About:</h1>
        </div>
        <div class="about-p">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                 voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis
                   et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                     aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="client-quotes">
        <h2>Client Quotes:</h2>
        <div class="about-person">
            <div class="person-img">
                <img src="images/about/miranda-brown.jpg" alt="Miranda Brown">
            </div>
            <div class="person-p">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam
                     rem aperiam, eaque ipsa quae ab illo inventore
                </p>
            </div>
            <div class="person-name">
                - Miranda Brown
            </div>
        </div>
        <div class="about-person">
            <div class="person-img">
                <img src="images/about/johnathan-wes.jpg" alt="Johnathan Wes">
            </div>
            <div class="person-p">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam
                     rem aperiam, eaque ipsa quae ab illo inventore
                </p>
            </div>
            <div class="person-name">
                - Johnathan Wes
            </div>
        </div>
    </div>
</div> <!-- End About content div -->`;
    var toursContent = `<div class="tours"> <!-- Begin Tours Page Content -->
    <div class="hero">
        <h1>Tours:</h1>
    </div>
    
    <div class="tours-container">
        <div class="tour-item">
            <img src="images/tours/israel.png" alt="Israel tours">
            <h1>Israel</h1>
            <h2>from $1000</h2>
            <div class="tour-button">
                <a id="israelTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/usa.png" alt="USA tours">
            <h1>U.S.A</h1>
            <h2>from $1500</h2>
            <div class="tour-button">
                <a id="usaTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/australia.png" alt="Australia tours">
            <h1>Australia</h1>
            <h2>from $1800</h2>
            <div class="tour-button">
                <a id="australiaTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/new-zealand.png" alt="New Zealand tours">
            <h1>New Zealand</h1>
            <h2>from $1200</h2>
            <div class="tour-button">
                <a id="newZealandTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/france.png" alt="France tours">
            <h1>France</h1>
            <h2>from $2500</h2>
            <div class="tour-button">
                <a id="franceTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/egypt.png" alt="Egypt tours">
            <h1>Egypt</h1>
            <h2>from $900</h2>
            <div class="tour-button">
                <a id="egyptTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/japan.png" alt="Japan tours">
            <h1>Japan</h1>
            <h2>from $1300</h2>
            <div class="tour-button">
                <a id="japanTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/canada.png" alt="Canada tours">
            <h1>Canada</h1>
            <h2>from $2000</h2>
            <div class="tour-button">
                <a id="canadaTour" href="#">Learn More</a>
            </div>
        </div>
        <div class="tour-item">
            <img src="images/tours/uae.png" alt="UAE tours">
            <h1>U.A.E</h1>
            <h2>from $3000</h2>
            <div class="tour-button">
                <a id="uaeTour" href="#">Learn More</a>
            </div>
        </div>
    </div>
</div> <!-- End Tours Page Content-->`;
    var specialOfferContent = `<div class="special-offer"> <!-- Begin Special Offer content -->
    <div class="so-header">
        <h2>Special Offer(s):</h2>
    </div>
    <div class="so-item">
        <div class="so-img">
            <img src="images/so-barcelona.jpg" alt="Barcelona, Spain">
        </div>
        <div class="so-info">
            <h2>Barcelona, Spain</h2>
            <h3>(20% off!)</h3>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                 voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa
            </p>
            <div class="so-button">
                Learn More
            </div>
        </div>
    </div>
    <div class="so-item">
        <div class="so-item">
            <div class="so-img">
                <img src="images/so-bangkok.jpg" alt="Bangkok, Thailand">
            </div>
            <div class="so-info">
                <h2>Bangkok, Thailand</h2>
                <h3>(10% off!)</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam
                      rem aperiam, eaque ipsa
                </p>
                <div class="so-button">
                    Learn More
                </div>
            </div>
        </div>
    </div>
</div> <!-- End Special Offer content -->`;
    var blogContent = `<div class="blog"> <!-- Begin Blog page content -->
    <div class="blog-header">
        Blog:
    </div>
    <div class="blog-item">
        <div class="blog-date">
            <h1>06</h1>
            <h2>Jun</h2>
        </div>
        <div class="blog-main">
            <img src="images/blog-img.jpg" alt="Blog image">
            <h3>Sed et persipiatis unde</h3>
            <p>
                Sed ut perspiciatis unde omnis iste natus error
                 sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore
                   veritatis et quasi
            </p>
        </div>
    </div>
    <div class="blog-item">
        <div class="blog-date">
            <h1>23</h1>
            <h2>Jul</h2>
        </div>
        <div class="blog-main">
            <img src="images/blog-img.jpg" alt="Blog image">
            <h3>Sed et persipiatis unde</h3>
            <p>
                Sed ut perspiciatis unde omnis iste natus error
                 sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore
                   veritatis et quasi
            </p>
        </div>
    </div>
</div> <!-- End Blog page content -->`;
    var contactContent = `<div class="contact"> <!-- Begin Contact page content-->
    <div class="contact-header">
        <h2>Contact Us:</h2>
    </div>
    <div class="contact-container">
        <div class="map-info">
            <img src="images/contact-map.jpg" alt="Location map">
            <p>
                travel-fly Inc.<br>
                8901 Marmora Road,<br>
                Glasgow, D04 89GR.<br>
                Freephone:+1 800 559 6580<br>
                Telephone:+1 800 603 6035<br>
                FAX:+1 800 889 9898<br>
                E-mail: mail@travelfly.org
            </p>
        </div>
        <div class="contact-form">
            <input type="text" placeholder="Your name...">
            <input type="email" placeholder="Email Address...">
            <input type="text" placeholder="Company...">
            <textarea name="contact-message" id="contact-message" cols="30" rows="10" placeholder="Message..."></textarea>
            <div class="contact-submit">Send message</div>
        </div>
    </div>
</div> <!-- End Contact page content -->`;
    var australiaTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>Australia tour package:</h1>
        <h2>Starting from $1800</h2>
        <img src="images/tours/australia/australia-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/australia/australia-one.jpg" alt="">
        <img src="images/tours/australia/australia-two.jpg" alt="">
        <img src="images/tours/australia/australia-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var canadaTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>Canada tour package:</h1>
        <h2>Starting from $2000</h2>
        <img src="images/tours/canada/canada-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/canada/canada-one.jpg" alt="">
        <img src="images/tours/canada/canada-two.jpg" alt="">
        <img src="images/tours/canada/canada-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var egyptTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>Egypt tour package:</h1>
        <h2>Starting from $900</h2>
        <img src="images/tours/egypt/egypt-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/egypt/egypt-one.jpg" alt="">
        <img src="images/tours/egypt/egypt-two.jpg" alt="">
        <img src="images/tours/egypt/egypt-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var franceTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>France tour package:</h1>
        <h2>Starting from $2500</h2>
        <img src="images/tours/france/france-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/france/france-one.jpg" alt="">
        <img src="images/tours/france/france-two.jpg" alt="">
        <img src="images/tours/france/france-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var israelTourContent = ` <div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>Israel tour package:</h1>
        <h2>Starting from $1000</h2>
        <img src="images/tours/israel/israel-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/israel/israel-one.jpg" alt="">
        <img src="images/tours/israel/israel-two.jpg" alt="">
        <img src="images/tours/israel/israel-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var japanTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>Japan tour package:</h1>
        <h2>Starting from $1300</h2>
        <img src="images/tours/japan/japan-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/japan/japan-one.jpg" alt="">
        <img src="images/tours/japan/japan-two.jpg" alt="">
        <img src="images/tours/japan/japan-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var newZealandTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>New Zealand tour package:</h1>
        <h2>Starting from $1200</h2>
        <img src="images/tours/new-zealand/new-zealand-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/new-zealand/new-zealand-one.jpg" alt="">
        <img src="images/tours/new-zealand/new-zealand-two.jpg" alt="">
        <img src="images/tours/new-zealand/new-zealand-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var uaeTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>U.A.E. tour package:</h1>
        <h2>Starting from $3000</h2>
        <img src="images/tours/uae/uae-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/uae/uae-one.jpg" alt="">
        <img src="images/tours/uae/uae-two.jpg" alt="">
        <img src="images/tours/uae/uae-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;
    var usaTourContent = `<div class="tour-page"> <!-- Begin Tour-Page Content -->
    <div class="hero">
        <h1>U.S.A. tour package:</h1>
        <h2>Starting from $1500</h2>
        <img src="images/tours/usa/usa-hero.jpg" alt="">
    </div>
    <div class="photo-container">
        <img src="images/tours/usa/usa-one.jpg" alt="">
        <img src="images/tours/usa/usa-two.jpg" alt="">
        <img src="images/tours/usa/usa-three.jpg" alt="">
    </div>
    <div class="itinerary-container">
        <div class="itinerary-item">
            <h1>Day # 1:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 2:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
        <div class="itinerary-item">
            <h1>Day # 3:</h1>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
        </div>
    </div>
    <div class="book-now">
        <div class="book-button">
            Book Now
        </div>
    </div>
</div> <!-- End Tour-Page Content -->`;

    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

        if (pageName == "home"){
            $("#nav").removeClass("commonNav");
            $("#nav-bottom-line").removeClass("commonNavBorder");
            $("#nav-logo").removeClass("commonNavLogo");
            $("#nav-links").removeClass("commonNavLinks");
            $("#nav-logo").addClass("homeNavLogo");
        } else {
            $("#nav").addClass("commonNav");
            $("#nav-bottom-line").addClass("commonNavBorder");
            $("#nav-logo").addClass("commonNavLogo");
            $("#nav-links").addClass("commonNavLinks");
            $("#nav-logo").removeClass("homeNavLogo");
        }
    };

    return {
        changePageContent: _changePageContent,
    };
})();