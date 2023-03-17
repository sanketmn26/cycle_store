
// video
// https://www.cannondale.com/en-us/bikes/road/race/caad13
// https://www.youtube.com/watch?v=vVXnYdHwDqM
// https://www.youtube.com/watch?v=0b0MQtOaoQI
// https://www.youtube.com/watch?v=BEsFOchzDPc
// https://www.youtube.com/watch?v=MRmtDjuehhk

const category = [
    {
        type:"City",
        specs:["Designed for urban mobility ease", "Require minimal maintenance", "Easy to control whilst cycling"],
        description:"A city bike, sometimes called a utility bike, is a type of bike used predominantly for trips in urban areas. City bikes are built with comfort and practicality in mind and are designed to allow the rider to sit upright rather than bent forward, like on road bikes."
    },

    {
        type:"Road",
        specs:["Very lightweight frame", "Narrow wheels and tires", "Very fast on smooth pavement"],
        description:"Road bicycles are designed to be ridden fast on smooth pavement. They have smooth, skinny tires and drop handlebars, and can be used for on-road racing. They are usually lighter than other types of bicycles. They can be ridden on paved trails, but most people find them uncomfortable and unstable on unpaved trails."
    },

    {
        type:"Mountain",
        specs:["Durable for rougher trails","Have very wide tires", "Full suspension for smooth ride"],
        description:"Mountain bikes or off-road bikes are bicycles which are specially designed to run on rough and uneven terrains. Their build, look, and feel is quite different from the bikes used for cycling on the roads. For people who enjoy cycling on mountain trails or jungles, a mountain bike is the best choice."
    },

    {
        type:"Electric",
        specs:["Provide Easier Pedaling", "E-Bikes Are Versatile", "Support Quick Charging"],
        description:"An electric bike, or ebike, is a bicycle equipped with an electric bike motor to assist you when you're pedalling. The motor will get its power from a rechargeable battery mounted on the bike. To classify as an ebike, the motor has to help you rather than propel you on its own."
    }
]


const data = [

    // --city bikes
    {
        id: 1,
        new: 1,
        title: "Cannondale Bad Boy",
        category: "City",
        price: "35,927",
        value: 35927,
        img: ["https://embed.widencdn.net/img/dorelrl/bdiedksinz/1100px@1x/C20_C33100M_Bad_Boy_1_BBQ_PD.webp?color=f7f7f7&q=99", "https://embed.widencdn.net/img/dorelrl/whxcbqbnvr/1100px@1x/C20_C33100M_Bad_Boy_1_BBQ_D2.webp?color=f7f7f7&q=99", "https://embed.widencdn.net/img/dorelrl/mcsgz82nm4/1100px@1x/C20_C33100M_Bad_Boy_1_BBQ_D3.webp?color=f7f7f7&q=99"],
        specs: ["SmartForm C1 Alloy frame", "Shimano Alfine 8-speed Shifters", "Lefty LightPipe rigid Fork", "Shimano MT400 hydraulic disc brakes"],
        descripton: "The ultimate urban ride. Elegantly aggressive style. Forward-thinking features. Traffic-slaying performance. It thrives in town, leisurely rides, on crowded streets. It's built for visibility, durability."
    },

    {
        id: 2,
        new: 0,
        title: "Cannondale Tesoro Neo SL",
        category: "City",
        price: "24,800",
        value: 24800,
        img: ["https://embed.widencdn.net/img/dorelrl/vpavp58xq7/1100px@1x/C21_C66101U_Tesoro_Neo_SL_EQ_BPL_PD.webp?color=f2eff7&q=99", "https://embed.widencdn.net/img/dorelrl/vqzpfducam/1100px@1x/C21_C66101U_Tesoro_Neo_SL_EQ_BPL_3Q.webp?color=f2eff7&q=99", "https://embed.widencdn.net/img/dorelrl/gjnjlfjtlb/1100px@1x/C21_C66101U_Tesoro_Neo_SL_EQ_BPL_D3.webp?color=f2eff7&q=99"],
        specs: ["SmartForm C3 Alloy frame", "Full carbon fork", "Tektro hydraulic disc brake",  "microSHIFT Advent X, 10-Speed shifter"],
        descripton: "Life moves fast. Make the most of it on this lightweight, versatile e-bike. Power up your daily commute, speed through your errands, or explore the road less traveled. It thrives city streets and backroads. it's built for efficiency"
    },

    {
        id: 3,
        new: 0,
        title: "BMC 257 AL THREE ST",
        category: "City",
        price: "72,325",
        value: 72325,
        img: ["https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10403-014-257-al-three-st-powder-anthracite-1_1.jpg", "https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10403-014-257-al-three-st-powder-anthracite-2.jpg", "https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10403-014-257-al-three-st-powder-anthracite-3.jpg"],
        specs: ["Shimano Nexus 8", "Premium Fenders with Integrated Rear Rack", "Powder Coat Finish", "Premium Aluminium Smoothwelded Frame"],
        descripton: "With its clean looks, exacting attention to detail and functional integration, the 257 THREE ST is your urban partner in crime for daily rides. Its Premium Aluminium frame is light, versatile and powder coated for durability."
    },

    {
        id: 4,
        new: 0,
        title: "Polygon Zeta 2 (2021)",
        category: "City",
        price: "53,490",
        value: 53490,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/polygon-zeta-2-2021-new.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/polygon-zeta-2-2021-new-2.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/reviews/polygon-zeta-2-2021-review.webp"],
        specs: ["Lightweight Frame and Fork", "Powerful Hydraulic Disc Brakes", "Shimano Tiagra 10-Speed Drivetrain", "Vee Speedster 20 x 2.0 tires"],
        descripton: "This Mini Velo Urban Bicycle offers the rider a comfortable riding position, without the slightest incidence of discomfort or backache. The quality of the wheelset also assures stability of the ride and smooth performance."
    },


    {
        id: 5,
        new: 0,
        title: "Ralleyz Metropolis Crimson Red",
        category: "City",
        price: "9,999",
        value: 9999,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ralleyz-metropolis-crimson-red.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ralleyz-metropolis-crimson-red-1.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ralleyz-metropolis-crimson-red.webp"],
        specs: ["H.T.S TIG Welded Steel frame", "Double Wall Alloy Rims", "Power V-Brakes", "Rigid Fork"],
        descripton: " It's the fun and thrill that you gain when you zip zap zoom on a heavy traffic day! In that case, Ralleyz Metropolis City Bicycle is an excellent choice for your daily expeditions."
    },


    {
        id: 6,
        new: 0,
        title: "Mach City Bike",
        category: "City",
        price: "11,550",
        value: 11550,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/mach-city-ibike-w-single-speed-2022.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/mach-city-ibike-w-single-speed-2022-1.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/reviews/mach-city-ibike-w-7-speed-2018.jpg"],
        specs: ["Womens Specific City Bicycle", "Lightweight Steel Frame", "Power V-Brakes", "Single-Speed Gears"],
        descripton: "Mach City Bikes are designed for the city. It’s the perfect ride for short distance cycling. The evolved range of city terrain and touring bikes are your shortcut through traffic jams."
    },

    // --mountain bikes
    {
        id: 7,
        new: 1,
        title: "BMC Fourstroke 01 TWO",
        category: "Mountain",
        price: "1,39,500",
        value: 139500,
        img: ["https://cdn.mtbdatabase.com/wp-content/uploads/2021/08/01095304/2021-BMC-Fourstroke-01-LT-One.jpg.webp","https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-22-10503-007-bmc-fourstroke-01-two-mountain-bike-grey-01.png", "https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-22-10503-007-bmc-fourstroke-01-two-mountain-bike-grey-02.png", "https://www.bmc-switzerland.com/media/v2_widgets/story-bmc-fourstroke-02.jpg"],
        specs: ["SRAM Gx Eagle AXS Drivetrain", "DT Swiss XR 1700 Wheelset", "Fox Float Performance Elite Fork", "Premium Carbon "],
        descripton: "Exceeding the demands of the world’s top endurance racers, with 100mm of front and rear travel, and the revolutionary RAD integrated dropper post, the Fourstroke is the most innovative XC race machine."
    },


    {
        id: 8,
        new: 0,
        title: "Cannondale F-Si Hi-MOD 1",
        category: "Mountain",
        price: "1,25,000",
        value: 125000,
        img: ["https://embed.widencdn.net/img/dorelrl/zbfs8obxdz/1100px@1x/C21_C25201M_F-Si_HM_1_REP_PD.webp?color=f3f3f3&q=99", "https://embed.widencdn.net/img/dorelrl/f5mjzjj4di/1100px@1x/C21_C25201M_F-Si_HM_1_REP_3Q.webp?color=f3f3f3&q=99", "https://embed.widencdn.net/img/dorelrl/uklxpp5o0t/1100px@1x/C21_C25201M_F-Si_HM_1_REP_D4.webp?color=f3f3f3&q=99"],
        specs: ["Hi-MOD BallisTec Carbon frame", "Integrated Cannondale App connectivity", "Shimano XTR 12-speed shifting", " Lefty Ocho Carbon 100mm fork"],
        descripton: "A pure XC race mountain bike. Loaded with performance features that ensure victory, all while weighing next to nothing. It thrives in competition, up and down hills. It's built for speed, agility, handling"
    },


    {
        id: 9,
        new: 0,
        title: "Cannondale Scalpel HT Carbon 3",
        category: "Mountain",
        price: "72,800",
        value: 72800,
        img: ["https://embed.widencdn.net/img/dorelrl/r7ozljia2s/1100px@1x/C21_C25301U_Scalpel_HT_Crb_3_BLK_PD.webp?color=f3f3f3&q=99", "https://embed.widencdn.net/img/dorelrl/mfjz9i2vug/1100px@1x/C21_C25301U_Scalpel_HT_Crb_3_BLK_3Q.webp?color=f3f3f3&q=99", "https://embed.widencdn.net/img/dorelrl/ibmj9ls0cp/1100px@1x/C21_C25301U_Scalpel_HT_Crb_3_BLK_D3.webp?color=f3f3f3&q=99"],
        specs: ["Superlight carbon frame", "Shimano SLX 12-speed ", "Shimano M6100 disc brakes", "Cannondale Wheel Sensor"],
        descripton: "A whole new breed of XC Hardtail, purpose built to hurt em on the ups, drop em on the downs and propel you straight to the top step. It's built for Speed, Efficiency, and Endurance"
    },


    {
        id: 10,
        new: 0,
        title: "Cannondale Jekyll",
        category: "Mountain",
        price: "1,48,200",
        value: 148200,
        img: ["https://embed.widencdn.net/img/dorelrl/pqdgusy1hx/1100px@1x/C21_C21102U_Jekyll_1_BGN_PD.webp?color=f9ffeb&q=99", "https://embed.widencdn.net/img/dorelrl/rkeq9zkvms/1100px@1x/C21_C21102U_Jekyll_1_BGN_3Q.webp?color=f9ffeb&q=99", "https://embed.widencdn.net/img/dorelrl/whldptgqi4/1100px@1x/C21_C21102U_Jekyll_1_BGN_D2.webp?color=f9ffeb&q=99"],
        specs: ["Float Factory X2 Shock", "Code RSC hydraulic disc brakes", "SRAM GX Eagle 12-speed drivetrain", "DT Swiss Factory J -Bend Spokes"],
        descripton: "Even though Jekyll boasts a unique combo of go-fast tech that’s never been seen before, it's not a bike that talks. It’s a bike that goes. It thrives in steep, fast, rowdy mountains. It's built for enduro racing, bike park sessions, high-speed mobbing."
    },


    {
        id: 11,
        new: 0,
        title: "Giant Stance 29 2",
        category: "Mountain",
        price: "1,56,999",
        value: 156999,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/giant-stance-29-2-2022.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/giant-stance-29-2-2022-1.webp", "https://cdn.shopify.com/s/files/1/0657/9421/2059/products/BMY22026_GalleryIamge_3_1800x1800.jpg?v=1663573378"],
        specs: ["ALUXX Grade Aluminium Frame", "Hydraulic Disc Brakes", "Shimano Deore 1x10-Speed Drivetrain", "Giant Connect Trail Handlebar"],
        descripton: "Modern Mountain Bike trails are fun, flowy and challenging. This full-suspension 29er gets you in sync with the terrain, so you can ride with more confidence and have more fun.The Giant Stance 29 2 has a Giant Crest 34 RCL Front Suspension and a Flexpoint Rear Suspension."
    },


    {
        id: 12,
        new: 0,
        title: "Polygon Syncline C3 29",
        category: "Mountain",
        price: "1,56,990",
        value: 156990,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/polygon-syncline-c3-29-2023.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/polygon-syncline-c3-29-2023-1.webp", "https://media.karousell.com/media/photos/products/2020/9/23/polygon_syncline_c3_carbon_lar_1600826874_cceab12a_progressive.jpg"],
        specs: ["ACX XC Performance Frame", "Shimano Deore 1x12-Speed Drivetrain", "Hydraulic Disc Brakes", "RockShox Recon Silver RL Suspension"],
        descripton: "The Polygon Syncline C3 29 (2023) is ideal for high adrenaline Off-Road Rides and XC Racing. The Polygon Syncline C3 29 comes with a RockShox Recon Silver RL, 120mm Front Suspension. It has an ACX XC Performance Frame."
    },

    // --road bike
    {
        id: 13,
        new: 1,
        title: "Cannondale SuperSix EVO Hi-MOD 2",
        category: "Road",
        price: "3,82,750",
        value: 382750,
        img: ["https://embed.widencdn.net/img/dorelrl/orquegmbcu/1100px@1x/C23_C11202U_SuperSix_EVO_HM_2_BBQ_PD.webp?color=f7f7f7&q=99", "https://embed.widencdn.net/img/dorelrl/98ym4mecg8/1100px@1x/C23_C11202U_SuperSix_EVO_HM_2_BBQ_3Q.webp?color=f7f7f7&q=99", "https://embed.widencdn.net/img/dorelrl/0av359xxy6/1100px@1x/C23_C11202U_SuperSix_EVO_HM_2_BBQ_D6.webp?color=f7f7f7&q=99"],
        specs: ["Superlight Hi-MOD carbon Frame", "Ultegra Di2 electronic 12-speed", "HollowGram 50 R-SL carbon wheelset", "Integrated cable routing"],
        descripton: "The all-new SuperSix EVO destroys expectations. So light, so fast, and so aero, it defies logic. This is a machine built to make you faster everywhere. Speed has evolved. SuperSix EVO is a wizard. The way it blends stability and agility is surreal."
    },


    {
        id: 14,
        new: 0,
        title: "Cannondale SystemSix Carbon Ultegra",
        category: "Road",
        price: "2,21,220",
        value: 221220,
        img: ["https://embed.widencdn.net/img/dorelrl/a59pmpehnb/1100px@1x/C21_C11401M_SystemSix_Crb_Ult_CRD_PD.webp?color=eff2f4&q=99", "https://embed.widencdn.net/img/dorelrl/sugdrvdb3f/1100px@1x/C21_C11401M_SystemSix_Crb_Ult_CRD_3Q.webp?color=eff2f4&q=99", "https://embed.widencdn.net/img/dorelrl/rubjqw04gi/1100px@1x/C21_C11401M_SystemSix_Crb_Ult_CRD_D4.webp?color=eff2f4&q=99"],
        specs: ["BallisTec carbon frameset", "Integrated Cannondale App connectivity", "Ultegra hydro disc group", "Vision SC55 Carbon wheelset"],
        descripton: "SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group. It generates the least aerodynamic drag of any road bike on the market."
    },


    {
        id: 15,
        new: 0,
        title: "BMC Timemachine Road 01",
        category: "Road",
        price: "2,75,450",
        value: 275450,
        img: ["https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10616-007-timemachine-01-road-three-iron-grey-black-1_1.jpg", "https://www.bmc-switzerland.com/media/v2_widgets/story-bmc-timemachine-road-02.jpg", "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/07/BMC-Timemachine-Road-Test-Review-14.jpg"],
        specs: ["SRAM Rival eTap AXS Drivetrain", "Tubeless-Ready Wheelset", "ICS Aero Cockpit", "Advanced Aerodynamics"],
        descripton: "Take the aerodynamics of our fastest time trial bikes and mix it with the all-day comfort and climbing ability of our best road bikes, and you get the Timemachine 01 ROAD. Engineered with TCC Speed inside its Premium Carbon frame and fork."
    },

    {
        id: 16,
        new: 0,
        title: "BMC Teammachine SLR01 FOUR",
        category: "Road",
        price: "3,17,550",
        value: 317550,
        img: ["https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10608-016-teammachine-slr-01-four-arctic-silver-prisma-carbon-1_2.jpg", "https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10608-016-teammachine-slr-01-four-arctic-silver-prisma-carbon-2_1.jpg", "https://www.bmc-switzerland.com/media/catalog/product/cache/db486834651b8299de17894045ea7cde/b/m/bmc-23-10608-016-teammachine-slr-01-four-arctic-silver-prisma-carbon-3_1.jpgS"],
        specs: ["SRAM Force eTap AXS Drivetrain", "CRD-351 SL Carbon Wheelset", "ICS2 Integrated Cockpit Design", "Premium Carbon D-Shape Seatpost"],
        descripton: "The original Teammachine SLR01 created the blueprint for the modern road bike. After more than a decade of obsessive innovation and development, today’s world-beating Teammachine SLR01 still leads where others follow."
    },

    {
        id: 17,
        new: 0,
        title: "Java J-Air Fuoco 105",
        category: "Road",
        price: "1,78,500",
        value: 178500,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/java-j-air-fuoco-105-new.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/java-j-air-fuoco-105-new-4.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/java-j-air-fuoco-105-new-5.webp"],
        specs: ["Shimano 105 2x11-Speed", "Deca Hydraulic Disc Brakes", "UCI Certified J-Air Fuoco Carbon Frame", "Java Fuoco Carbon Fork"],
        descripton: "The Java J-Air Fuoco 105 is a Race Ready Road Bicycle which is ideal for Road Racing. This Road Bicycle comes with Deca Hydraulic Disc Brakes. The Java J-Air Fuoco 105 is a Race Ready Road Bicycle which has a J-Air Fuoco Carbon Frame."
    },

    {
        id: 18,
        new: 0,
        title: "Orbea Orca M30i",
        category: "Road",
        price: "3,79,990",
        value: 379990,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/orbea-orca-m30i.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/orbea-orca-m30i-1.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/orbea-orca-m30i-3.webp"],
        specs: ["Orbea Orca Carbon OMR Frame", "Shimano 105 Di2 R7170 2x12-Speed", "Vittoria Zaffiro V 700x28c Tire", "Shimano R7170 Hydraulic Disc Brakes"],
        descripton: "The Orbea Orca M30i is the choice of stylish riders who demand the lightest bike with the best combination of technologies and flexible ergonomics. The Orbea Orca M30i comes with a pair of Vittoria Zaffiro V 700x28c tires which are attached to Orbea Wheels."
    },

    // --e bycycle
    {
        id: 19,
        new: 1,
        title: "Cannondale Topstone Neo Carbon",
        category: "Electric",
        price: "2,11,000",
        value: 211000,
        img: ["https://embed.widencdn.net/img/dorelrl/m0hkt9s3mn/1100px@1x/C21_C62271M_Topstone_Neo_Crb_BPL_PD.webp?color=f2eff7&q=99", "https://embed.widencdn.net/img/dorelrl/3ghbkx0cnn/1100px@1x/C21_C62271M_Topstone_Neo_Crb_BPL_3Q.webp?color=f2eff7&q=99", "https://embed.widencdn.net/img/dorelrl/mf6fmf57ry/1100px@1x/C21_C62271M_Topstone_Neo_Crb_BPL_D3.webp?color=f2eff7&q=99"],
        specs: ["BallisTec carbon frameset", "Shimano GRX 800 2x11-speed", "Range: up to 78 mi (125km)", "Bosch PowerTube, 500Wh"],
        descripton: "An e-gravel bike like no other.  We combined our finest carbon gravel bike chassis with the best motor system from Bosch to create a powerful, go-anywhere, do-anything adventure machine with unreal riding qualities and a range of up to 125 km."
    },

    {
        id: 20,
        new: 0,
        title: "Cannondale Compact Neo",
        category: "Electric",
        price: "1,25,000",
        value: 125000,
        img: ["https://embed.widencdn.net/img/dorelrl/z5cga2nxwc/1100px@1x/C22_C60102U_Compact_Neo_SBK_PD.webp?color=F1F1F1&q=99", "https://embed.widencdn.net/img/dorelrl/6ogqwnmn74/1100px@1x/C22_C60102U_Compact_Neo_SBK_3Q.webp?color=F1F1F1&q=99", "https://embed.widencdn.net/img/dorelrl/kajnj06wqx/1100px@1x/C22_C60102U_Compact_Neo_SBK_D2.webp?color=F1F1F1&q=99"],
        specs: ["Hyena 250Wh Hidden Battery", "Range: up to 47 mi(75km)", "Accelerates up to speeds of 20 mph", "Folding stem and pedals"],
        descripton: "Fully equipped with lights, fenders, a rear rack, and big, grippy tires, Compact Neo is a versatile, easy to ride e-bike that gets you to where you’re going in style. From joyrides and commuting, to finding your next favorite place, Compact Neo can get you there with ease."
    },

    {
        id: 21,
        new: 0,
        title: "WaltX Spark 5 V2",
        category: "Electric",
        price: "34,443",
        value: 34443,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/waltx-spark-5-v2-new-4.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/waltx-spark-5-v2-new.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/waltx-spark-5-v2-new-1.webp"],
        specs: ["Detachable 36v 7.8Ah Li-Ion Battery", "Powerful 36V 250W Motor", "Range up to 50km", "100-240V Automatic With Smart Charging"],
        descripton: "The WaltX Spark 5 V2 is a Electric Bicycle which can be ridden by both Men and Women who are looking for an E-Bicycle for cummuting and fitness purposes.The WaltX Spark 5 V2 comes with an EU Certified Detachable Smart 36v 7.8Ah Lithium-ion battery with waterproof casing"
    },

    {
        id: 22,
        new: 0,
        title: "EMotorad EMX",
        category: "Electric",
        price: "58,999",
        value: 58999,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/emotorad-emx-new.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/emotorad-emx-new-1.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/emotorad-emx-new-2.webp"],
        specs: ["10.4Ah Li-Ion Battery", "36V, 250W, BLDC Rear Hub Motor", "External Detachable Battery", "Range upto 65km"],
        descripton: "The EMotorad EMX is a Dual Suspension Electric MTB which is ideal for trail riding. This E-Bike from EMotorad comes with a 36V, 250W BLDC Rear Hub Motor. The EMotorad EMX comes with a 10.4Ah Li-Ion Battery."
    },

    {
        id: 23,
        new: 0,
        title: "Ninety One Meraki Ultra 27.5T",
        category: "Electric",
        price: "60,500",
        value: 60500,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ninety-one-meraki-ultra-27-5t.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ninety-one-meraki-ultra-27-5t-2.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/ninety-one-meraki-ultra-27-5t-3.webp"],
        specs: ["Panasonic 9.6Ah Battery", "250W BLDC Motor", "Range upto 50km", "Battery life 4-5 years"],
        descripton: "The Ninety One Meraki Ultra 27.5T is a Performance Focysed Electric Bicycle which is ideal for commutes as well as Flat Trail Rides. The Ninety One Meraki Ultra 27.5T comes with a Panasonic 9.6Ah Battery.S"
    },

    {
        id: 24,
        new: 0,
        title: "Bianchi E-SUV Rally-XTR (2023)",
        category: "Electric",
        price: "1,38,683",
        value: 138683,
        img: ["https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/bianchi-e-suv-rally-xtr-2023-3.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/bianchi-e-suv-rally-xtr-2023-1.webp", "https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/bianchi-e-suv-rally-xtr-2023-2.webp"],
        specs: ["Darfon 10S4P 720Wh Battery", "GPS and battery level sensor", "Shimano EP8 Motor Unit", "unique cooling system"],
        descripton: "The Bianchi E-SUV Rally - XTR (2023) is a Electric Mountain Bike which has a Bianchi E-SUV Carbon Frame, a Fox Float DPX2 Factory Rear Suspension and a Fox 38 Float Factory Suspension Fork with 150mm travel."
    },


]

export { data , category };