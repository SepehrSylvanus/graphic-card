const itemImg1 = require("./stats/imgs/itemsImg/item1.jpg");
const itemImg2 = require("./stats/imgs/itemsImg/item2.jpg");
const itemImg3 = require("./stats/imgs/itemsImg/item3.jpg");
const itemImg4 = require("./stats/imgs/itemsImg/item4.jpg");
const itemImg5 = require("./stats/imgs/itemsImg/item5.jpg");
const itemImg6 = require("./stats/imgs/itemsImg/item6.jpg");
const projectImg1 = require("./stats/imgs/projectsImg/project1.jpg");
const projectImg2 = require("./stats/imgs/projectsImg/project2.jpg");
const projectImg3 = require("./stats/imgs/projectsImg/project3.jpg");
const projectImg4 = require("./stats/imgs/projectsImg/project4.jpg");
const projectImg5 = require("./stats/imgs/projectsImg/project5.jpg");
const projectImg6 = require("./stats/imgs/projectsImg/project6.jpg");
const gallerItemsDatas = [
  {
    title: "تصویر اول",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg1,
  },
  {
    title: "تصویر دوم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg2,
  },
  {
    title: "تصویر سوم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg3,
  },
  {
    title: "تصویر چهارم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg4,
  },
  {
    title: "تصویر پنجم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg5,
  },
  {
    title: "تصویر ششم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
    
یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    itemImg: itemImg6,
  },
];
const prohectItemsData = [
  {
    title: "پروژه‌ی اول",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg1,
  },
  {
    title: "پروژه‌ی دوم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg2,
  },
  {
    title: "پروژه‌ی سوم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg3,
  },
  {
    title: "پروژه‌ی چهارم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg4,
  },
  {
    title: "پروژه‌ی پنجم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg5,
  },
  {
    title: "پروژه‌ی ششم",
    description: `به سایت‌هایی که کارایی در حد رساندن اطلاعات ارتباطی دارن و همین تنها وظیفه رو به نحو احسن انجام میدن ، کارت ویزیت دیجیتال گفته می‌شه.
    
    تا به حال براتون پیش نیومده که بعد از چاپ کارت، آدرس یا شماره تلفن شما تغییر کرده باشه و کلی کارت روی دستتون بمونه؟
        
    یا تا به حال براتون پیش نیومده که توی یه موقعیت حساس دست توی جیب کنید و متوجه بشید کارت‌ها تموم شده و قبلا آخرین کارتتون رو بازی کردید؟`,
    projectImg: projectImg6,
  },
];
module.exports = {
  gallerItemsDatas,
  prohectItemsData,
};
