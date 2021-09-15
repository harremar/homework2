var MODEL = (function(){
    // console.log("model");
    var _myVar = "Model";
    var _historyPageInfo = `<div class="history">
    <div class="history__image"></div>

    <div class="history__title">
        <h1>This is Our History</h1>
    </div>

    <div class="history__text-holder">
        <div class="history__text-holder__left">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ut impedit est aliquid quo facere ipsum! Architecto vero debitis sapiente quisquam, totam quos, veritatis dolorum et eum magnam itaque deserunt placeat eligendi. Quam ipsa eum similique nihil nesciunt earum ea necessitatibus sapiente. Qui temporibus nemo totam, obcaecati expedita voluptatum illo laborum dolore iste error optio. Tempore corrupti illo voluptates molestiae.</p>
            <p>Accusamus nostrum est distinctio, quod quidem architecto laboriosam incidunt minima, consectetur sit tempore sint possimus! Non labore voluptates dignissimos error? Amet et obcaecati doloribus temporibus eligendi unde, debitis consequuntur, rem ratione laudantium ad aliquid excepturi totam dolorem quae. Autem minima labore debitis provident veniam alias itaque ad perferendis eveniet ullam? Repellat voluptas distinctio est facilis qui sit ad eos cum?</p>
        </div>
        <div class="history__text-holder__right">
            <p>Labore corporis quis at illo! Sint cupiditate repudiandae laborum sapiente ab consequuntur inventore, ipsum quibusdam adipisci? Rem velit autem omnis, saepe ullam voluptas ut tenetur ab! Ab quasi soluta repudiandae quas quae. Nesciunt quisquam enim cum maxime quibusdam fugiat qui eum facere illum mollitia, voluptates atque id esse. Harum consectetur perferendis doloribus quod eos beatae aliquid voluptas et sed esse?</p>
            <p>Quia, amet necessitatibus. Nulla eos eaque, praesentium, doloribus laborum iure ad commodi esse sunt quam quas obcaecati similique iusto! Nemo est iste porro iusto molestiae harum esse enim, illo ex doloremque illum nesciunt quos. Iste ut assumenda quam temporibus distinctio ad libero dolor eius! Blanditiis vero neque animi quis omnis ea corporis, suscipit ipsum dolores nesciunt aperiam eum, nostrum qui?</p>
        </div>
    </div>

    <div class="history__image2"></div>
    <div class="history__text-holder">
        <div class="history__text-holder__left">
            <p>Doloremque error tempora voluptatem quod corporis veniam porro harum dolores doloribus! Veniam unde molestias obcaecati ullam ratione, iste aliquid aliquam nostrum necessitatibus eum laboriosam, libero minima! Quibusdam tenetur quos adipisci atque optio, commodi repudiandae repellendus velit recusandae quo iure totam eligendi labore rem, maiores doloribus error nobis exercitationem similique consequatur. Neque explicabo quidem vitae quaerat, ipsum, expedita dolore officia incidunt maiores accusamus autem similique iure quasi rerum sapiente ipsam deleniti a aliquam sequi. Sapiente voluptatem suscipit adipisci esse dolores quam!</p>
        </div>
        <div class="history__text-holder__right">
            <p>Nesciunt dolores rem impedit neque reiciendis accusamus asperiores, fugit voluptates! Asperiores quibusdam mollitia in iste, deserunt neque voluptates veritatis beatae commodi iure accusamus error eaque placeat quae sit? Quo, optio? Dolore repellat odit temporibus rerum quo? Inventore mollitia similique ullam adipisci perspiciatis quo cupiditate, alias nam recusandae eos quidem quam laboriosam fugiat vitae labore enim saepe eaque quos commodi dolore molestiae! Facilis quas ipsa debitis, maxime iusto aspernatur distinctio sed impedit. Maiores consequatur asperiores non. Veritatis fugit nostrum qui minus.</p>
        </div>
    </div>

</div>`;

    var _menuPageInfo = `<div class="menu">

    <div class="menu__title">
        <h1>Our Menu</h1>
    </div>
    

    <div class="menu__item-holder">
        <div class="menu__item-holder__item">
            <div class="menu__item-holder__item__coffee"></div>
            <div class="menu__item-holder__item__btn">
                <h4>coffee</h4>
            </div>
        </div>
        <div class="menu__item-holder__item">
            <div class="menu__item-holder__item__doughnut"></div>
            <div class="menu__item-holder__item__btn">
                <h4>doughnut</h4>
            </div>
        </div>
        <div class="menu__item-holder__item">
            <div class="menu__item-holder__item__sandwich"></div>
            <div class="menu__item-holder__item__btn">
                <h4>sandwich</h4>

            </div>
        </div>
    </div>
    <div class="menu__item-holder">
        <div class="menu__item-holder__item">
            <div class="menu__item-holder__item__smoothie"></div>
            <div class="menu__item-holder__item__btn">
                <h4>smoothie</h4>
            </div>
        </div>
        <div class="menu__item-holder__item">
            <div class="menu__item-holder__item__bagel"></div>
            <div class="menu__item-holder__item__btn">
                <h4>bagel</h4>
            </div>
        </div>
        
    </div>

</div>`;

    var _sprinklePageInfo = ` <div class="sprinkle">
    <div class="sprinkle__doughnutline"></div>

    <div class="sprinkle__title"> 
        <h1>SPRINKLE</h1>
        <h2>YOUR WAY</h2>
    </div>

    <div class="sprinkle__rewards-holder">
        <div class="sprinkle__rewards-holder__rewards">
            <div class="sprinkle__rewards-holder__rewards__doughnut"></div>
            <div class="sprinkle__rewards-holder__rewards__text">
                <h1>Get Some Dough</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, enim? Reiciendis fugiat eius excepturi itaque.</p>
            </div>
        </div>

        <div class="sprinkle__rewards-holder__rewards">
            <div class="sprinkle__rewards-holder__rewards__coffee"></div>
            <div class="sprinkle__rewards-holder__rewards__text">
                <h1>Enjoy Hot or Cold</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur laborum quos doloribus eaque ab.</p>
            </div>
        </div>

        <div class="sprinkle__rewards-holder__rewards">
            <div class="sprinkle__rewards-holder__rewards__runner"></div>
            <div class="sprinkle__rewards-holder__rewards__text">
                <h1>Learn the Fast Way</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sunt magnam, molestias magni mollitia ex!</p>
            </div>
        </div>
    </div>
    <div class="sprinkle__login">
        <div class="sprinkle__login__btn1">
            <a href="#">sign in</a>
        </div>
        <div class="sprinkle__login__btn2">
            <a href="#">sign up</a>
        </div>
    </div>
    <div class="sprinkle__treats">
        <div class="sprinkle__treats__image"></div>
        <div class="sprinkle__treats__text">
            <h1>New Treats</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi, dolorum cum soluta quam minus et totam obcaecati quidem nemo ducimus adipisci voluptatem harum ipsum.</p>
            <div class="sprinkle__treats__text__btn">
                <p>treats</p>
            </div>
        </div>
        <div class="sprinkle__treats__image2"></div>

    </div>

</div>`;

    var _locationsPageInfo = ` <div class="location">
    <div class="location__title">
        <h1>Find Your Sprinkle</h1>
        <p>Get directions and Details</p>
    </div>

    <div class="location__search">
        <div class="location__search__input">
            <input type="text" size="5" maxlength="5" placeholder="46143" >
        </div>
        <div class="location__search__btn">
            <h2>search</h2>
        </div>
    </div>
    <div class="location__map"></div>
    <div class="location__results">
        <div class="location__results__header">
            <div class="location__results__header__number">
                <h1>1.</h1>
            </div>
        <div class="location__results__header__name">
            <h1>435 Southport Rd.</h1>
        </div>
        </div>
        <div class="location__results__info">
            <p>Distance: 5.02 miles</p>
            <p>Phone: 123-456-7890</p>
            <p>Open: 5:00am - 7:00pm</p>
        </div>
        
    </div>
    <div class="location__results">
        <div class="location__results__header">
            <div class="location__results__header__number">
                <h1>2.</h1>
            </div>
        <div class="location__results__header__name">
            <h1>100 Ohio Street.</h1>
        </div>
        </div>
        <div class="location__results__info">
            <p>Distance: 3.65 miles</p>
            <p>Phone: 123-456-7890</p>
            <p>Open: 5:00am - 7:00pm</p>
        </div>
        
    </div>
    <div class="location__results">
        <div class="location__results__header">
            <div class="location__results__header__number">
                <h1>3.</h1>
            </div>
        <div class="location__results__header__name">
            <h1>213 W. Washington Rd.</h1>
        </div>
        </div>
        <div class="location__results__info">
            <p>Distance: 7.80 miles</p>
            <p>Phone: 123-456-7890</p>
            <p>Open: 5:00am - 8:00pm</p>
        </div>
        
    </div>
</div>`;

    var _contactPageInfo = `<div class="contact">
    <div class="contact__image"></div>
    <div class="contact__title">
        <h1>Contact Us</h1>
    </div>
    <div class="contact__subtitle">
            <p>123-456-7890</p>
    </div>
    <div class="contact__subtitle">
        <p>weAreSprinkles@dough.org</p>
    </div>
    <div class="contact__form">
        <h2>name</h2>
        <input type="text" size="5" maxlength="40" placeholder="" >
    </div>
    <div class="contact__form">
        <h2>phone </h2>
        <input type="text" size="5" maxlength="40" placeholder="" >
    </div>
    <div class="contact__form">
        <h2>email</h2>
        <input type="text" size="5" maxlength="40" placeholder="" >
    </div>
    <div class="contact__message">
        <h2>give us a message</h2>
        <input type="text" size="5" maxlength="100" placeholder="" >
    </div>

    <div class="contact__button">
        <a href=" ">
            SUBMIT
        </a>
    </div>
</div>


</div>`;

    var _getMyVariable = function(buttonID, callback){
        console.log("Model.js 6 " + buttonID);
        let newName = "_" + buttonID + "PageInfo";
        $("#content").html(eval(newName));

        // let newName = buttonID + "Callback";
        // if(buttonID == "home"){
        //     $("#content").html(_homePageInfo);
        // }
        // else {
        //     $("#content").html(_aboutPageInfo);
        // }

        if(callback){
            callback(newName);
        }

        // return _myVar;
    };

    var _getMyFooterVariable = function(buttonID, callback){
        console.log("Model.js 21 " + buttonID);
        let newFooterName = buttonID + " Footer Callback";

        if(buttonID == "products"){
            $("#productsPage").append(buttonID);
        }
        else {
            $("#contactPage").append(buttonID);
        }

        callback(newFooterName);
    }

    return {
        getMyVariable: _getMyVariable,
        getMyFooterVariable: _getMyFooterVariable,
    };

})();
// () -- tells it to run.
//  _ means the var is private